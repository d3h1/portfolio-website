import React from 'react';
import { Html, useProgress } from '@react-three/drei';

const Loader = () => {
  const { progress } = useProgress();

  return (
    <Html>
      {/* This will allow us to show a loader on how long the page will take to load the model */}
      <span className='canvas-load'></span>
      <p style={{
        fontsize: 14,
        color: '#f1f1f1',
        fontweight: 800,
        marginTop: 40
      }}
      >{progress.toFixed(2)}%</p> 
    </Html>
  )
}

export default Loader;