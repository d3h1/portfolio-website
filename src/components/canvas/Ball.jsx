import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { Decal, Float, OrbitControls, Preload, useTexture } from '@react-three/drei';
import CanvasLoader from '../Loader';

const Ball = (props) => {
  // This is how we are loading the textures to the technologies models
  const [decal] = useTexture([props.imgUrl]);

  return (
    // Special float prop coming from ReactThreeDrei
    <Float 
          // speed={1.75} 
          // rotationIntensity={1} 
          // floatIntensity={2}
    >
      <ambientLight intensity={0.25}/>
      <directionalLight position={[0, 0, 0.05]}/>
      <mesh castShadow receiveShadow scale={2.75}>
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial 
          color="#fff8eb"
          polygonOffset
          polygonOffsetFactor={-5}
          flatShading
        />
        <Decal 
          position={[0, 0, 1]}
          rotation={[ 2 * Math.PI, 0, 6.25]}
          flatShading 
          map={decal}
        />
      </mesh>  
    </Float>
  )
}

const BallCanvas = ({ icon }) => {
  return (
    <Canvas 
    frameloop='demand'  
    gl={{ preserveDrawingBuffer: true }}>
      {/* Suspense will load the canvas with the saved properties */}
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls 
        // Does not allow zoom, and allows rotating at a certain point
        enableZoom={false} />
        <Ball imgUrl={icon} />
      </Suspense>

      <Preload all />
    </Canvas>
  )
}

export default BallCanvas