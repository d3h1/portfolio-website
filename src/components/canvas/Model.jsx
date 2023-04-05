import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import CanvasLoader from '../Loader';
import { OrbitControls, useGLTF } from "@react-three/drei";

const Model = () => {
  // How we import 3-D models
  const model = useGLTF('./pixel-phone/scene.gltf')

  return (
    <mesh>
      <hemisphereLight intensity={0.30} groundColor="black"/>
      <pointLight intensity={1} />
      <spotLight
        position={[-10, 40, 10]}
        angle={0.1}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
        />
      <primitive 
        object={model.scene}
        scale={0.2}
        position-x={-1.5}
        position-y={-1} 
        rotation-y={0} 
      />
    </mesh>
  )
}

const ModelCanvas = () => {
  return (
    // Canvas properties for this model, can change
    <Canvas
      
      shadows
      frameloop="demand"
      gl={{ preserveDrawingBuffer:true }}
      camera={{ 
        fov: 70,
        near: 0.1,
        far: 200,
        position: [-4, 3, 6]
       }}
    >
      {/* Something to fall back on when loading the model */}
      <Suspense fallback={<CanvasLoader />}>
        {/* move around the model */}
        <OrbitControls 
          autoRotate
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        {/* importing Earth here */}
        <Model />
      </Suspense>
    </Canvas>
  )
}

export default ModelCanvas;