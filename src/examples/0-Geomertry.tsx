import { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import * as THREE from 'three'
import { Mesh } from 'three'

const useRotate = (ref: any) => {
  useFrame(() => {
    if (ref.current) ref.current.rotation.x = ref.current.rotation.y += 0.01
  })
}

const lineMaterial = new THREE.LineBasicMaterial({
  color: '#000',
})

function Box(props: any) {
  const ref = useRef<Mesh>(null)

  useRotate(ref)

  return (
    <mesh {...props} ref={ref}>
      <boxGeometry args={[1.7, 1.7, 1.7]} />
      <meshStandardMaterial color={'#049EF4'} />

      <lineSegments material={lineMaterial}>
        <wireframeGeometry
          attach="geometry"
          args={[new THREE.BoxGeometry(1.7, 1.7, 1.7)]}
        />
      </lineSegments>
    </mesh>
  )
}

function Cylinder(props: any) {
  const ref = useRef<Mesh>(null)

  useRotate(ref)
  return (
    <mesh {...props} ref={ref}>
      <cylinderGeometry args={[1.4, 1.4, 3]} />
      <meshStandardMaterial color={'#049EF4'} />
      <lineSegments material={lineMaterial}>
        <wireframeGeometry
          attach="geometry"
          args={[new THREE.CylinderGeometry(1.4, 1.4, 3)]}
        />
      </lineSegments>
    </mesh>
  )
}

function Sphere(props: any) {
  const ref = useRef<Mesh>(null)

  useRotate(ref)
  return (
    <mesh {...props} ref={ref}>
      <sphereGeometry args={[2, 15, 15]} />
      <meshStandardMaterial color={'#049EF4'} />
      <lineSegments material={lineMaterial}>
        <wireframeGeometry
          attach="geometry"
          args={[new THREE.SphereGeometry(2, 15, 15)]}
        />
      </lineSegments>
    </mesh>
  )
}

function Donut(props: any) {
  const ref = useRef<Mesh>(null)

  useRotate(ref)
  return (
    <mesh scale={0.4} {...props} ref={ref}>
      <torusGeometry args={[4, 1.5, 16, 40]} />
      <meshStandardMaterial color={'#049EF4'} />
      <lineSegments material={lineMaterial}>
        <wireframeGeometry
          attach="geometry"
          args={[new THREE.TorusGeometry(4, 1.5, 16, 40)]}
        />
      </lineSegments>
    </mesh>
  )
}

function Icosahedron(props: any) {
  const ref = useRef<Mesh>(null)

  useRotate(ref)
  return (
    <mesh scale={0.4} {...props} ref={ref}>
      <icosahedronGeometry args={[6, 0]} />
      <meshStandardMaterial color={'#049EF4'} />
      <lineSegments material={lineMaterial}>
        <wireframeGeometry
          attach="geometry"
          args={[new THREE.IcosahedronGeometry(6, 0)]}
        />
      </lineSegments>
    </mesh>
  )
}

export default function Geometry({
  type = 'Box',
}: {
  type: 'Box' | 'Cylinder' | 'Sphere' | 'Icosahedron' | 'Donut'
}) {
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

      {type === 'Box' && <Box />}
      {type === 'Cylinder' && <Cylinder />}
      {type === 'Sphere' && <Sphere />}
      {type === 'Icosahedron' && <Icosahedron />}
      {type === 'Donut' && <Donut />}

      <OrbitControls />
    </Canvas>
  )
}
