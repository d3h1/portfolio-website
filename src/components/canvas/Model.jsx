import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import CanvasLoader from '../Loader';
import { OrbitControls, useGLTF } from "@react-three/drei";

const Model = () => {
  // How we import 3-D models
  const model = useGLTF('./model-3d/scene.gltf')

  return (
    <div>Model</div>
  )
}

const ModelCanvas = () => {
  return (
    // Canvas properties for this model, can change
    <Canvas
      shadows
      frameloop="demand"
      gl={{ preserveDrawingBuffer:true }}
      camera={{  }}
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