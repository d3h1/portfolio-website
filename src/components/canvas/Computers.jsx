import { Suspense, suspense, useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';
import CanvasLoader from '../Loader';

// This will use three js
const Computers = () => {
  const computer = useGLTF('./space/scene.gltf')

  return (
    <mesh>
      <hemisphereLight intensity={0.15} groundColor="black"/>
      <pointLight intensity={1} />
      <primitive object={computer.scene}
      scale={4}
      position={[-8, -7.25, -1.5]}
      rotation={[1, -0.2, -0.1]} />
    </mesh>
  )
}

const ComputersCanvas = () => {
  return (
    // Canvas will allow us to draw our 3-D model --- each one of these is needed to display the model you wanna see
    <Canvas 
    frameloop='demand' 
    shadows 
    camera={{position: [17, 10, 5], fov: 40}}
    gl={{ preserveDrawingBuffer: true }}>
      {/* Suspense will load the canvas with the saved properties */}
      <Suspense>
        <OrbitControls 
        // Does not allow zoom, and allows rotating at a certain point
        enableZoom={false} 
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 2}
        />
        <Computers />
      </Suspense>
      <Preload all />
    </Canvas>
  )
}

export default ComputersCanvas;