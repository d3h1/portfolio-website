import { useState, useRef, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial, Preload } from "@react-three/drei";
import * as random from 'maath/random/dist/maath-random.esm'

const RandomBackground = (props) => {
  const ref = useRef();

  // This will be our spheres that populate the background
  const sphere = random.inSphere(new Float32Array(5000), { radius:1.2 })

  // useFrame will be used a hook that will allow it all to rotate
  useFrame((state, delta) => {
    ref.current.rotation.x -= delta / 10;
    ref.current.rotation.y -= delta / 15;
  })

  // We are returning the background spheres as a group that will rotate
  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points 
        ref={ref} 
        positions={sphere} 
        stride={3} 
        frustumCulled 
        {...props}
      >
        <PointMaterial 
          transparent
          color="#f272c8"
          size={0.002}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  )
}

// We have to create a canvas like usual when doing threeJS things
const RandomBackgroundCanvas = () => {
  return (
    <div className="w-full h-auto absolute inset-0 z-[-1]">
      <Canvas camera={{ position: [0, 0, 1]}}>
        <Suspense fallback={null}>
          <RandomBackground />
        </Suspense>

        <Preload all/>
      </Canvas>
    </div>
  )
}


export default RandomBackgroundCanvas