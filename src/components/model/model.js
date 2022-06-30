import React from 'react'
import { Canvas } from '@react-three/fiber'
import {OrbitControls, Stars} from '@react-three/drei'

const Display = ()=>{

    return(
        <mesh scale={2}>
          <sphereBufferGeometry />
          <meshStandardMaterial color="blue" />
        </mesh>
    )
}
const Plane = ()=>{

    return(
        <mesh scale={5}>
          <planeBufferGeometry />
          <meshStandardMaterial color="red" />
        </mesh>
    )
}


const Model = () => (
  <Canvas>
      <OrbitControls/>
      <ambientLight intensity={0.9}/>
    <pointLight position={[5, 10, 10]} />
    <Display/>
    <Plane/>
  </Canvas>
)

export default Model;

