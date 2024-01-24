import React from 'react'
import { createRoot } from 'react-dom/client'
import {
  FlexBox,
  Heading,
  OrderedList,
  ListItem,
  Slide,
  Deck,
  Text,
  Image,
  CodePane,
  codePaneThemes,
  fadeTransition,
} from 'spectacle'

import { Intro } from './examples/0-intro'
import Geometry from './examples/0-Geomertry'
import { CameraView } from './examples/CameraView'
import './index.css'
import { Template } from './components/presentation/Template'
import { Face } from './components/icons/Face'
import Edge from './components/icons/Edge'
import Vertex from './components/icons/Vertex'
import { Grids } from './examples/0-Grids'
import Desktop from './components/icons/Desktop'
import Woah from './components/icons/Woah'
import Lights from './components/icons/Lights'
import Camera from './components/icons/Camera'
import Material from './components/icons/Material'

const theme = {
  colors: {
    primary: '#d5de55',
    secondary: '#fff',
    tertiary: '#000',
  },
}

const Presentation = () => (
  <Deck transition={fadeTransition} theme={theme} template={Template}>
    {/* Intro */}
    <Slide>
      <div className="w-full h-full fixed bottom-0 left-0 right-0 top-0">
        <Grids />
      </div>
      <Heading className="three-d-text w-full absolute top-12 left-1/2 -translate-x-1/2">
        <span className="text-yellow-500">3D</span> Rendering in{' '}
        <span className="text-blue-500">react</span>
      </Heading>
      <FlexBox
        className="mt-96 absolute bottom-12 left-1/2 -translate-x-1/2"
        paddingTop={0}
        flex={1}
      >
        <Image
          style={{
            borderRadius: '50%',
            overflow: 'hidden',
            filter: 'grayscale(1)',
          }}
          src={'https://avatars.githubusercontent.com/u/6254009?v=4'}
          width={70}
        />
        <Text color="#fff" fontSize={24}>
          <span>Jafar Rezaei</span> <br />
          <span style={{ fontSize: 16, opacity: 0.6 }}>January 2024</span>
        </Text>
      </FlexBox>
    </Slide>

    {/* What is Three.js */}
    <Slide>
      <Heading>What is Three.js</Heading>
      <span className="text-2xl text-center">https://threejs.com</span>

      <OrderedList className="[&_li]:text-white [&_li]:text-3xl">
        <ListItem>A 3D Javascript Library</ListItem>

        <ListItem>
          Renderers: WebGL, &lt;canvas&gt;, &lt;svg &gt;, and more
        </ListItem>

        <ListItem>
          Scenes, Cameras, Geometry, 3D Model Loaders, Lights, Materials,
          Shaders, Particles, Animation, Math Utilities and so on.
        </ListItem>

        <ListItem></ListItem>
      </OrderedList>
    </Slide>

    {/* What is WebGL */}
    <Slide>
      <Heading>
        WebGL <br />
        <div className="text-gray-300 text-2xl font-medium -mt-5">
          [ Web Graphics Library ]
        </div>
      </Heading>
      <p className="text-white text-4xl text-center">
        is a JavaScript API for rendering interactive 2D and 3D graphics within
        any compatible web browser without the use of plugins.
      </p>
      <ul className="text-3xl list-disc mt-12 w-1/2 translate-x-20">
        <li>Chrome 9+</li>
        <li>Firefox 4+</li>
        <li>Opera 12+</li>
        <li>Safari 5.1+</li>
        <li>Internet Explorer 11+</li>
      </ul>
    </Slide>

    {/* Vertex */}
    <Slide>
      <Heading>Vertex</Heading>
      <span className="text-center text-3xl">Where everything begins!</span>
      <FlexBox className="flex-col mt-32 content-between !justify-between px-12">
        <div className="w-8 h-8 rounded-full bg-blue-500" />
        <span className="text-blue-500 mt-4 text-3xl">[ x, y, z ]</span>
      </FlexBox>
    </Slide>

    {/* Edge */}
    <Slide>
      <Heading>
        Line <span className="text-3xl relative top-[-32px]">[edge] </span>
      </Heading>
      <span className="text-center text-3xl">Connects vertices together</span>
      <FlexBox className="flex-col mt-32 content-between !justify-between px-12">
        <div className="flex flex-row mt-16">
          <div className="w-8 h-8 rounded-full bg-blue-500" />
          <div className="w-96 h-2 bg-blue-500 relative bottom-[-12px]" />
          <div className="w-8 h-8 rounded-full bg-blue-500" />
        </div>
        <span className="mt-12 text-4xl text-gray-200">
          from{' '}
          <span className="text-blue-500 text-5xl font-semibold mx-4">
            [ x, y, z ]
          </span>{' '}
          to{' '}
          <span className="text-blue-500 text-5xl font-semibold mx-4">
            [ x, y, z ]
          </span>
        </span>
      </FlexBox>
    </Slide>

    {/* Face */}
    <Slide>
      <Heading>What else?</Heading>
      <span className="text-center text-3xl">We have faces as well.</span>

      <FlexBox className="flex-row content-between mt-32 !justify-between px-12">
        <Vertex />
        <Edge />
        <Face />
      </FlexBox>
    </Slide>

    {/* Mesh */}
    <Slide>
      <Heading>Mesh</Heading>
      <span className="text-center text-3xl">Vertex + Edge + Face</span>

      <FlexBox className="content-between !justify-between px-32 mt-24">
        <Image src="/images/blender-mesh.png" />

        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 64 64"
          id="Triangle"
          className="text-blue-500 w-56 h-56"
        >
          <path
            d="M56.41,46.92H56.1l-.1-.19L37.4,14.51l-.06-.09a6.31,6.31,0,1,0-10.22-.06l-.07.12L8.33,46.9l0,.06a5.74,5.74,0,0,0-.71,0,6.36,6.36,0,1,0,5.8,8.95H50.61a6.36,6.36,0,1,0,5.8-8.95Zm-4.89,2.3a6.18,6.18,0,0,0-.94,1.53H13.42a5.93,5.93,0,0,0-.7-1.22l0-.07L31.49,17l0-.08a6.27,6.27,0,0,0,1.37,0l.06.12Z"
            fill="currentColor"
          ></path>
        </svg>
      </FlexBox>
    </Slide>

    {/* What is Geometry */}
    <Slide>
      <Heading>Geometry</Heading>
      <span className="text-center text-3xl">is a broader term than Mesh</span>

      <span className="text-center text-2xl text-white mt-32 px-30">
        It encompasses the mathematical representation of spatial information.
        <br />
        In practical terms, when working with 3D graphics programming, you often
        create and manipulate meshes to represent and render objects in a
        virtual environment.
      </span>
    </Slide>

    {/* Geometries */}
    <Slide>
      <Text style={{ position: 'absolute' }} color="#fff">
        Geometries <br />
        <span className="text-yellow-300 text-2xl font-medium -mt-5">
          [ Box ]
        </span>
      </Text>
      <Geometry type="Box" />
    </Slide>
    <Slide>
      <Text style={{ position: 'absolute' }} color="#fff">
        Geometries <br />
        <span className="text-yellow-300 text-2xl font-medium -mt-5">
          [ Sphere ]
        </span>
      </Text>
      <Geometry type="Sphere" />
    </Slide>
    <Slide>
      <Text style={{ position: 'absolute' }} color="#fff">
        Geometries <br />
        <span className="text-yellow-300 text-2xl font-medium -mt-5">
          [ Cylinder ]
        </span>
      </Text>
      <Geometry type="Cylinder" />
    </Slide>
    <Slide>
      <Text style={{ position: 'absolute' }} color="#fff">
        Geometries <br />
        <span className="text-yellow-300 text-2xl font-medium -mt-5">
          [ Donut ]
        </span>
      </Text>
      <Geometry type="Donut" />
    </Slide>
    <Slide>
      <Text style={{ position: 'absolute' }} color="#fff">
        Geometries <br />
        <span className="text-yellow-300 text-2xl font-medium -mt-5">
          [ Icosahedron ]
        </span>
      </Text>
      <Geometry type="Icosahedron" />
    </Slide>

    {/* Pattern? */}
    <Slide>
      <Heading>Noticed the pattern?</Heading>
      <div className="flex items-center justify-center w-full mt-6 text-blue-500">
        <Desktop className="w-72 h-72" />
      </div>
    </Slide>

    {/* triangle quad based mesh */}
    <Slide>
      <Heading>Triangle vs Quad Based Mesh</Heading>
      <span className="text-center text-xl">
        3D graphics are often split into triangles because triangles are the
        simplest shape to work with in computer graphics. They are easy to
        process and calculate, and they form the basis for many algorithms used
        in rendering 3D scenes. Additionally, triangles can be used to
        approximate any other shape, making them a versatile choice for
        representing 3D objects. While other shapes can be used in 3D graphics,
        triangles are the most common due to their simplicity and efficiency in
        rendering.
      </span>
      <div className="flex items-center justify-center w-full mt-6 text-blue-500">
        <Image src="/images/squad-vs-trangle.gif" className="w-2/4" />
      </div>
    </Slide>

    {/* Blender triangulate */}
    <Slide>
      <Heading>Blender triangulate</Heading>
      <span className="text-center text-xl">
        Triangulate modifier converts all faces of the mesh into triangles.
        Triangulation is the division of polygons into triangles. This is
        necessary for some applications that do not support polygons with more
        than three vertices.
      </span>
      <div className="flex items-center justify-center w-full mt-6 text-blue-500">
        <Image src="/images/blender-triangulate.png" className="w-2/4" />
      </div>
    </Slide>
    <Slide>
      <Image className="w-[90vw]" src="/images/blender-quad.png" />
    </Slide>
    <Slide>
      <Image className="w-[90vw]" src="/images/blender-triangulate.png" />
    </Slide>
    <Slide>
      <Image
        className="w-[90vw]"
        src="/images/blender-triangulated-faces.png"
      />
    </Slide>

    {/* Camera */}
    <Slide>
      <Heading>Camera</Heading>
      <span className="text-center text-3xl">The point of users view</span>

      <Camera className="mt-12" />
    </Slide>
    <Slide>
      <iframe src="iframes/camera.html" frameBorder="0" height="100%" />
    </Slide>

    {/* Lights */}
    <Slide>
      <Heading>Lights</Heading>
      <span className="text-center text-3xl">allows items to be visible</span>

      <Lights className="opacity-60" />
    </Slide>
    <Slide>
      <iframe src="iframes/lights.html" frameBorder="0" height="100%" />
    </Slide>
    <Slide>
      <Heading> Three Point Lighting</Heading>

      <iframe
        src="iframes/lights-three-point.html"
        frameBorder="0"
        height="100%"
      />
    </Slide>

    {/* Material */}
    <Slide>
      <Heading>Materials</Heading>
      <span className="text-center text-3xl">The skin of your geometries</span>

      <Material className="opacity-60 mt-24" />
    </Slide>
    <Slide>
      <iframe src="iframes/material.html" frameBorder="0" height="100%" />
    </Slide>

    {/* UV */}
    <Slide>
      <Heading>UVs</Heading>
      <span className="text-center text-3xl">
        map textures onto 3D models for realistic surface rendering
      </span>

      <span className="text-2xl text-center text-white mt-12">
        UVs in Three.js are coordinates assigned to each vertex of a 3D model,
        defining how a 2D texture is mapped onto its surface. These coordinates
        range from (0, 0) to (1, 1), indicating positions on the texture. By
        specifying UVs during geometry creation and associating them with
        textures in materials, Three.js enables precise texture mapping onto 3D
        objects for realistic rendering.
      </span>
    </Slide>
    <Slide>
      <iframe src="iframes/UVs.html" frameBorder="0" height="100%" />
    </Slide>

    {/* What can we do? */}
    <Slide>
      <Heading>What can we do with them?!</Heading>
      <div className="flex items-center justify-center w-full mt-6">
        <Woah className="w-96" />
      </div>
    </Slide>

    {/* Demo video */}
    <Slide>
      <video
        autoPlay={true}
        controls={true}
        className="spotlight"
        src="/webgl-demos.mp4"
      />
    </Slide>

    {/* Three.js website */}
    <Slide>
      <iframe
        style={{ height: '100%' }}
        src="https://threejs.org"
        frameBorder="0"
      />
    </Slide>

    {/* Create the first scene */}
    <Slide>
      <div className="text-5xl font-bold text-center mb-5">
        Create the first scene
      </div>
      <CodePane language="jsx" theme={codePaneThemes.a11yDark}>{`
    var scene = new THREE.Scene();
    var aspect = window.innerWidth / window.innerHeight;
    var camera = new THREE.PerspectiveCamera( 75, aspect, 0.1, 1000 );
    var renderer = new THREE.WebGLRenderer();
    renderer.setSize( window.innerWidth, window.innerHeight );
    document.body.appendChild( renderer.domElement );

    var geometry = new THREE.BoxGeometry( 1, 1, 1 );
    var material = new THREE.MeshNormalMaterial();
    var cube = new THREE.Mesh( geometry, material );
    scene.add( cube );
    camera.position.z = 5;

    var render = function () {
      requestAnimationFrame( render );
      renderer.render( scene, camera );
    };
  
    render();
    `}</CodePane>
    </Slide>

    {/* Why not react */}
    <Slide>
      <Intro />
      <div className="text-5xl absolute left-1/2 -translate-x-1/2 font-bold top-24">
        Why not react?
      </div>
    </Slide>

    {/* Sample app */}
    <Slide>
      <div className="text-5xl font-bold text-center mb-5">
        Start with react-three-fiber
      </div>
      <span className="text-3xl mt-20 pb-5 text-white">
        Install required packages:
      </span>
      <CodePane language="bash" theme={codePaneThemes.a11yDark}>
        {`npm install three @types/three @react-three/fiber`}
      </CodePane>
      <span className="text-3xl mt-2 pb-5 text-white">Abd start coding:</span>
      <CodePane language="jsx" theme={codePaneThemes.a11yDark}>
        {`import { Canvas } from '@react-three/fiber'

export default function ThreeD() {
  return (
    <Canvas>
      <ambientLight intensity={Math.PI / 2} />
      <spotLight position={[10, 10, 10]} angle={0.15} />
    </Canvas>
  )
}
`}
      </CodePane>
    </Slide>

    {/* Sample box */}
    <Slide>
      <span className="text-3xl mt-20 pb-5 text-white">Render a box:</span>
      <CodePane language="jsx" theme={codePaneThemes.a11yDark}>
        {`import { Canvas } from '@react-three/fiber'

export default function ThreeD() {
  return (
    <Canvas>
      <ambientLight intensity={Math.PI / 2} />
      <spotLight position={[10, 10, 10]} angle={0.15} />
      
      <mesh>
        <boxGeometry args={[1.7, 1.7, 1.7]} />
        <meshStandardMaterial color={'#049EF4'} />
      </mesh>
    </Canvas>
  )
}
`}
      </CodePane>
    </Slide>

    {/* Particles */}
    <Slide>
      <Heading>Particles system</Heading>
      <span>
        <p className="text-4xl text-center">
          <strong>Points</strong> vs <strong>Particles</strong>
          <br />
          <div className="mt-32 text-white px-32">
            <strong>Points</strong> are rendered as single pixels on the screen.
            <strong>Particles</strong> are rendered as small textures.
          </div>
        </p>
      </span>
    </Slide>
    <Slide>
      <div className="text-5xl font-bold text-center mb-5">
        Advanced usage of Particles
      </div>
      <iframe
        src="https://3d-fire.sayjeyhi.com/"
        frameBorder="0"
        height="100%"
      />
    </Slide>
    <Slide>
      <iframe
        src="https://3d-grass.sayjeyhi.com/"
        frameBorder="0"
        height="100%"
      />
    </Slide>

    {/* Shaders */}
    <Slide>
      <Heading>Shaders</Heading>
      <p className="text-3xl text-center text-white px-32">
        Shaders are programs that run on the GPU. <br /> They are used to
        calculate the color of each pixel rendered on the screen.
      </p>
    </Slide>
    <Slide>
      <div className="text-5xl font-bold text-center mb-5">
        Advanced usage of Shaders
      </div>
      <iframe
        src="https://3d-cloud.sayjeyhi.com/"
        frameBorder="0"
        height="100%"
      />
    </Slide>

    {/* Butcher */}
    <Slide>
      <div className="text-5xl font-bold text-center mb-5">
        A Game we made for iO hackathon
      </div>
      <iframe src="http://localhost:5173/" frameBorder="0" height="100%" />
    </Slide>
    <Slide>
      <Heading>Physics</Heading>

      <CodePane
        language="bash"
        theme={codePaneThemes.a11yDark}
      >{`npm i @react-three/rapier`}</CodePane>

      <p className="text-3xl text-center text-white mt-32 px-40">
        is a wrapper library around the Rapier WASM-based physics engine,
        designed to slot seamlessly into a react-three/fiber pipeline.
      </p>
    </Slide>
    <Slide>
      <Heading>Animations</Heading>

      <span className="text-yellow-500 text-3xl px-12 leading-10">
        1. Create 3d model
        <br />
        2. Export in FBX
        <br />
        3. Use Maximo to create animations
        <br />
        4. Export in FBX and use it in r3f
      </span>
      <a
        href="https://www.mixamo.com/"
        target="_blank"
        className="text-blue-500 text-center text-2xl mt-32"
        rel="noreferrer"
      >
        https://www.mixamo.com/
      </a>
    </Slide>

    <Slide>
      <Heading> Resources:</Heading>

      <div className="[&_a]:text-blue-500 [&_a]:text-3xl">
        <ListItem>
          <a
            target="_blank"
            href="https://threejs.org/docs/index.html#manual/en/introduction/Creating-a-scene"
            rel="noreferrer"
          >
            Three.js docs
          </a>
        </ListItem>
        <ListItem>
          <a target="_blank" href="https://github.com/wass08" rel="noreferrer">
            Wassim Sammad https://github.com/wass08
          </a>
        </ListItem>
        <ListItem>
          <a
            target="_blank"
            href="https://github.com/simondevyoutube"
            rel="noreferrer"
          >
            Simon Dev https://github.com/simondevyoutube
          </a>
        </ListItem>
        <ListItem>
          <a
            target="_blank"
            href="https://github.com/davidlyons"
            rel="noreferrer"
          >
            David Lyons https://github.com/davidlyons
          </a>
        </ListItem>
        <ListItem>
          <a>...etc</a>
        </ListItem>
      </div>
    </Slide>

    {/* Thanks */}
    <Slide>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontWeight: 900,
          width: '100%',
          height: '100%',
          flexDirection: 'column',
        }}
      >
        <Heading color="yellow">Thanks!</Heading>
        <FlexBox flexDirection="column" mt="40px">
          <Image
            style={{
              borderRadius: '50%',
              overflow: 'hidden',
              filter: 'grayscale(1)',
            }}
            src={'https://avatars.githubusercontent.com/u/6254009?v=4'}
            width={120}
          />
          <Text
            height
            color="#fff"
            textAlign="center"
            fontSize={22}
            className="relative top-[-17px]"
          >
            Jafar Rezaei <br />
            <span
              className="relative top-[-14px] font-thin"
              style={{ fontSize: 14, opacity: 0.6 }}
            >
              January 2024
            </span>
          </Text>
          <a
            href="https://r3f-threejs.sayjeyhi.com/"
            target="_blank"
            rel="noreferrer"
            className="text-blue-500 text-lg font-medium -mt-2"
          >
            https://r3f-threejs.sayjeyhi.com/
          </a>
        </FlexBox>

        <CameraView />
      </div>
    </Slide>
  </Deck>
)

createRoot(document.getElementById('app')!).render(<Presentation />)
