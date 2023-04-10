import { Suspense, suspense, useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';
import CanvasLoader from '../Loader';

// This will use three js
const HeroModel = ({ isMobile }) => {
  const heromodel = useGLTF('./hero-model/scene.gltf')

  return (
    <mesh>
      <hemisphereLight intensity={0.15} groundColor="black"/>
      <pointLight intensity={1} />
      <spotLight
        position={[15, 20, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
        />
      <primitive object={heromodel.scene}
      scale={isMobile ? 2.5: 0.5}
      position={isMobile ? [-4.5, -4.25, -1.5] :  [-5.75, -6.25, -1.5]}
      rotation={[1.25, -0.2, -0.1]} />
    </mesh>
  )
}

const HeroModelCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  // Changing the is mobile variable
  useEffect(() => {
    // Add event listener for changing screen size
    const mediaQuery = window.matchMedia('(max-width:643px)');

    // Initial value of 'isMobile' state variable
    setIsMobile(mediaQuery.matches);
    
    // Defining a callback function to handle changes within the media query
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    // Adding a callback function to listen for changes to the media query
    mediaQuery.addEventListener('change', handleMediaQueryChange);

    // Remove listener when component is unmounted
    return () => {
      mediaQuery.removeEventListener('change', handleMediaQueryChange);
    };
  }, []);

  return (
    // Canvas will allow us to draw our 3-D model --- each one of these is needed to display the model you wanna see
    <Canvas 
    frameloop='demand' 
    shadows 
    camera={{position: [17, 10, 5], fov: 40}}
    gl={{ preserveDrawingBuffer: true }}>
      {/* Suspense will load the canvas with the saved properties */}
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls 
        // Does not allow zoom, and allows rotating at a certain point
        // autoRotate
        enableZoom={false} 
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 2}
        />
        <HeroModel isMobile={isMobile} />
      </Suspense>
      <Preload all />
    </Canvas>
  )
}

export default HeroModelCanvas;