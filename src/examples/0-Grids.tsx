import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { useRef } from 'react'

export function Grids() {
  return (
    <Canvas camera={{ position: [3, 1, 9], fov: 40 }}>
      <OrbitControls />
      <fog attach="fog" args={['black', 10, 20]} />
      <color attach="background" args={['black']} />

      <Grid />
    </Canvas>
  )
}

const Grid = () => {
  // rotate
  const ref = useRef(null)

  useFrame(() => {
    if (ref.current) {
      ref.current!.rotation.y += 0.0006
    }
  })

  return (
    <gridHelper
      ref={ref}
      args={[20, 20, 'rgba(93,93,93,0.5)', 'rgba(93,93,93,0.5)']}
    />
  )
}
