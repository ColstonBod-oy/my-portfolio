import React, { Suspense, useCallback, useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';
import * as THREE from 'three';

import CanvasLoader from '../loader';

const Planet = ({ keyProp }: { keyProp: number }) => {
  const planet = useGLTF('./planet/scene.gltf');

  useEffect(() => {
    const ambientLight = new THREE.AmbientLight(0xcccccc, 0.5);
    const directionalLight = new THREE.DirectionalLight(0x8f6e8d, 18);

    // Set to top left
    directionalLight.position.set(-10, 10, 10);

    planet.scene.add(ambientLight);
    planet.scene.add(directionalLight);

    return () => {
      planet.scene.remove(ambientLight);
      planet.scene.remove(directionalLight);
    };
  }, [planet.scene]);

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
  const [planetKey, setPlanetKey] = useState(0);

  // Handle context loss and restoration when scrolling
  const handleContext = useCallback(
    (gl: THREE.WebGLRenderer, scene: THREE.Scene, camera: THREE.Camera) => {
      const handleContextLost = (e: Event) => {
        e.preventDefault();
        setPlanetKey((prev) => prev + 1); // Remount Planet
      };

      const handleContextRestored = () => {
        gl.render(scene, camera);
      };

      gl.domElement.addEventListener('webglcontextlost', handleContextLost);
      gl.domElement.addEventListener(
        'webglcontextrestored',
        handleContextRestored
      );

      return () => {
        gl.domElement.removeEventListener(
          'webglcontextlost',
          handleContextLost
        );
        gl.domElement.removeEventListener(
          'webglcontextrestored',
          handleContextRestored
        );
      };
    },
    []
  );

  return (
    <Canvas
      shadows
      frameloop='always'
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
      camera={{
        fov: 45,
        near: 0.1,
        far: 200,
        position: [-4, 3, 6],
      }}
      onCreated={({ gl, scene, camera }) => handleContext(gl, scene, camera)}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          autoRotate
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Planet keyProp={planetKey} />

        <Preload all />
      </Suspense>
    </Canvas>
  );
};

export default PlanetCanvas;
