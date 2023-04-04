import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import CanvasLoader from '../Loader';
import { OrbitControls, useGLTF } from "@react-three/drei";

const Model = () => {
  // How we import 3-D models
  const model = useGLTF('./retro-comp/scene.gltf')

  return (
    <mesh>
      <hemisphereLight intensity={0.15} groundColor="black"/>
      <pointLight intensity={1} />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
        />
      <primitive 
        object={model.scene}
        scale={2.5}
        position-y={0} 
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
        fov: 50,
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