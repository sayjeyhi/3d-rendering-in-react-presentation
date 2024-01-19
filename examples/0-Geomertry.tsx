import { useRef } from 'react'
import { Canvas } from '@react-three/fiber'
import { Html, OrbitControls } from '@react-three/drei'
import * as THREE from 'three'
import { Mesh } from 'three'

function Box(props: any) {
  const ref = useRef<Mesh>(null)

  return (
    <mesh {...props} ref={ref}>
      <boxGeometry args={[1.7, 1.7, 1.7]} />
      <meshStandardMaterial color={'#049EF4'} />

      <lineSegments>
        <wireframeGeometry
          attach="geometry"
          args={[new THREE.BoxGeometry(1.7, 1.7, 1.7)]}
        />
      </lineSegments>
      <Html>Box</Html>
    </mesh>
  )
}

function Cylinder(props: any) {
  const ref = useRef<Mesh>(null)

  return (
    <mesh {...props} ref={ref}>
      <cylinderGeometry args={[1, 0.9, 2]} />
      <meshStandardMaterial color={'#049EF4'} />
      <lineSegments>
        <wireframeGeometry
          attach="geometry"
          args={[new THREE.CylinderGeometry(1, 0.9, 2)]}
        />
      </lineSegments>
      <Html>Cylinder</Html>
    </mesh>
  )
}

function Sphere(props: any) {
  const ref = useRef<Mesh>(null)

  return (
    <mesh {...props} ref={ref}>
      <sphereGeometry args={[1, 30, 30]} />
      <meshStandardMaterial color={'#049EF4'} />
      <lineSegments>
        <wireframeGeometry
          attach="geometry"
          args={[new THREE.SphereGeometry(1, 30, 30)]}
        />
      </lineSegments>
      <Html>Sphere</Html>
    </mesh>
  )
}

function Torus(props: any) {
  const ref = useRef<Mesh>(null)

  return (
    <mesh {...props} ref={ref}>
      <icosahedronGeometry args={[1, 0]} />
      <meshStandardMaterial color={'#049EF4'} />
      <lineSegments>
        <wireframeGeometry
          attach="geometry"
          args={[new THREE.IcosahedronGeometry(1, 1)]}
        />
      </lineSegments>
      <Html>Torus</Html>
    </mesh>
  )
}

export default function Geometry() {
  return (
    <Canvas>
      <ambientLight intensity={Math.PI / 2} />
      <spotLight
        position={[10, 10, 10]}
        angle={0.15}
        penumbra={1}
        decay={0}
        intensity={Math.PI}
      />
      <pointLight position={[-10, -10, -10]} decay={0} intensity={Math.PI} />

      <Box position={[-2.6, 0, 0]} />
      <Cylinder position={[0, 0, 0]} />
      <Sphere position={[2.6, 0, 0]} />
      <Torus position={[5.2, 0, 0]} />

      <OrbitControls />
    </Canvas>
  )
}
