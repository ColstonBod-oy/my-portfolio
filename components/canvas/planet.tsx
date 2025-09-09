import React, { Suspense, useEffect, useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';
import * as THREE from 'three';

import CanvasLoader from '../loader';

const Planet = () => {
  const planet = useGLTF('./planet/scene.gltf');
  const planetRef = useRef<THREE.Group>(null);

  useEffect(() => {
    const ambientLight = new THREE.AmbientLight(0xcccccc, 0.5);
    const directionalLight = new THREE.DirectionalLight(0x8f6e8d, 18);

    // Set to top left
    directionalLight.position.set(-10, 10, 10);
    directionalLight.castShadow = true;

    // Optimize shadow map
    directionalLight.shadow.mapSize.width = 512;
    directionalLight.shadow.mapSize.height = 512;
    directionalLight.shadow.camera.near = 0.5;
    directionalLight.shadow.camera.far = 500;

    planet.scene.add(ambientLight);
    planet.scene.add(directionalLight);

    return () => {
      planet.scene.remove(ambientLight);
      planet.scene.remove(directionalLight);
    };
  }, [planet]);

  return (
    <primitive
      ref={planetRef}
      object={planet.scene}
      scale={0.36}
      position-y={-0.5}
      rotation-y={0}
    />
  );
};

const PlanetCanvas = () => {
  const glRef = useRef<THREE.WebGLRenderer | null>(null);
  const planetRef = useRef<THREE.Group | null>(null);

  useEffect(() => {
    if (!glRef.current) return;

    const gl = glRef.current;

    // Handle context loss and restoration
    const handleContextLost = (e: Event) => {
      e.preventDefault();
      if (planetRef.current) {
        planetRef.current.visible = false;
      }
    };

    const handleContextRestored = () => {
      if (planetRef.current) {
        planetRef.current.visible = true;
      }
    };

    gl.domElement.addEventListener('webglcontextlost', handleContextLost);
    gl.domElement.addEventListener(
      'webglcontextrestored',
      handleContextRestored
    );

    return () => {
      gl.domElement.removeEventListener('webglcontextlost', handleContextLost);
      gl.domElement.removeEventListener(
        'webglcontextrestored',
        handleContextRestored
      );
    };
  }, []);

  return (
    <Canvas
      shadows
      frameloop='always'
      dpr={[1, 2]}
      gl={{
        preserveDrawingBuffer: true,
        powerPreference: 'high-performance',
        antialias: true,
        alpha: true,
        stencil: false,
        depth: true,
        failIfMajorPerformanceCaveat: false,
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
