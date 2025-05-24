import React, { Suspense, useEffect } from 'react';
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
      planet.scene.remove(ambientLight);
      planet.scene.remove(directionalLight);
    };
  }, []);

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
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          autoRotate
          enableZoom={false}
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
