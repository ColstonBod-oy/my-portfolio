import React, { Suspense, useEffect, useRef, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';
import * as THREE from 'three';

import CanvasLoader from '../loader';

const Planet = () => {
  const planet = useGLTF('./planet/scene.gltf');

  useEffect(() => {
    const ambientLight = new THREE.AmbientLight(0xcccccc, 0.5);
    const directionalLight = new THREE.DirectionalLight(0x8f6e8d, 18);

    // Set to top left
    directionalLight.position.set(-10, 10, 10);

    planet.scene.add(ambientLight);
    planet.scene.add(directionalLight);

    return () => {
      // Clean up lights
      planet.scene.remove(ambientLight);
      planet.scene.remove(directionalLight);

      // Dispose of geometries and materials
      planet.scenes.forEach((scene) => {
        scene.traverse((object) => {
          if (object instanceof THREE.Mesh) {
            object.geometry.dispose();
            if (object.material instanceof THREE.Material) {
              object.material.dispose();
            } else if (Array.isArray(object.material)) {
              object.material.forEach((material) => material.dispose());
            }
          }
        });
      });
    };
  }, [planet]);

  return (
    <primitive
      object={planet.scene}
      scale={0.36}
      position-y={-0.5}
      rotation-y={0}
    />
  );
};

const PlanetCanvas = () => {
  const [canvasKey, setCanvasKey] = useState(0);
  const glRef = useRef<THREE.WebGLRenderer | null>(null);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    if (!glRef.current) return;

    const gl = glRef.current;

    // Handle context loss
    const handleContextLost = (e: Event) => {
      e.preventDefault();
      setCanvasKey((prev) => prev + 1);
    };

    // Handle visibility change
    const handleVisibilityChange = () => {
      setIsVisible(!document.hidden);
    };

    // Use Intersection Observer to detect when canvas is in/out of view
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible(entry.isIntersecting);
        });
      },
      { threshold: 0.1 }
    );

    observer.observe(gl.domElement);

    gl.domElement.addEventListener('webglcontextlost', handleContextLost);
    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      gl.domElement.removeEventListener('webglcontextlost', handleContextLost);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      observer.disconnect();

      // Properly dispose of resources
      gl.dispose();
      gl.forceContextLoss();
    };
  }, [canvasKey]);

  return (
    <Canvas
      key={canvasKey}
      shadows
      frameloop={isVisible ? 'always' : 'never'}
      dpr={[1, 1.5]}
      gl={{
        preserveDrawingBuffer: true,
        powerPreference: 'high-performance',
        antialias: false,
        alpha: true,
      }}
      camera={{
        fov: 45,
        near: 0.1,
        far: 200,
        position: [-4, 3, 6],
      }}
      onCreated={({ gl }) => {
        glRef.current = gl;
      }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          autoRotate
          enableZoom={false}
          enablePan={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Planet />

        <Preload all />
      </Suspense>
    </Canvas>
  );
};

export default PlanetCanvas;
