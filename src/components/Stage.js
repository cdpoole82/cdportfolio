/* --this component will be structured using the React Three Fiber paradigm importing assets as required to be 'self contained'
 --The Canvas component in RTF contains a scene and camera vs THREEJS which is built seperately.
 --RTF components receive values thru args or properties, not instantiating new items.
    <mesh visible userData={{ hello: 'world' }} position={[1, 2, 3]} rotation={[Math.PI / 2, 0, 0]}>
        <sphereGeometry args={[1, 16, 16]} />
        <meshStandardMaterial color="hotpink" transparent />
    </mesh>
    --As of version 5 all elements ending with "Material" receive attach="material", 
    and all elements ending with "Geometry" receive attach="geometry" automatically. 
    Of course you can still overwrite it, but it isn't necessary to type out any longer
    --the Canvas component provides an inherit frame loop. The useFrame function hooks into that frame loop to execute items in a loop.
    --using the threeJS object clock allows us increment geomesh properties on each tick

*/

import React from 'react'
import { Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, useTexture, Environment } from '@react-three/drei'
import InfoPanel from './InfoPanel';

const Stage = () => {

    //Celestial References
    const sun = React.useRef();
    const earth = React.useRef();
    const moon = React.useRef();


    //CREATE MESHES
    function SUN() {

        const [suncolormap] = useTexture([
            './textures/sun-2k.jpg',
        ])

        useFrame(({ clock }) => {
            sun.current.rotation.z = sun.current.rotation.z + .003
            sun.current.rotation.x = sun.current.rotation.z + .003


        })

        return (
            <mesh ref={sun} position={[-1, 1, 0]} scale={1.25} onClick={() => { window.alert("Left Mouse=Rotate; Right Mouse=Pan; Wheel=Zoom") }}>
                <sphereGeometry args={[1, 100, 100]} />
                <meshPhongMaterial
                    map={suncolormap}

                />
            </mesh>
        )
    }

    function EARTH() {

        const [earthcolormap, earthnormalmap, earthspecularmap] = useTexture([
            './textures/earth_daymap.jpg',
            './textures/earth_normal_map.jpg',
            './textures/earth_specular_map.jpg',
        ])

        useFrame(({ clock }) => {
            earth.current.rotation.y = earth.current.rotation.y + 0.010

        })

        return (
            <mesh ref={earth} position={[4, 3, -8]}>
                <sphereGeometry args={[1, 100, 100]} />
                <meshPhongMaterial
                    map={earthcolormap}
                    normalMap={earthnormalmap}
                    specularMap={earthspecularmap}

                />
            </mesh>
        )
    }


    function MOON() {


        const [mooncolormap, moonnormalmap] = useTexture([
            './textures/moon.jpg',
            './textures/moonnormal.jpg',

        ])

        useFrame(({ clock }) => {
            moon.current.rotation.y = moon.current.rotation.y + 0.03


        })

        return (
            <mesh ref={moon} position={[2, 3.65, -9]} scale={.50}>
                <sphereGeometry args={[1, 100, 100]} />
                <meshPhongMaterial
                    map={mooncolormap}
                    normalMap={moonnormalmap}

                />
            </mesh>
        )
    }

        

    //THE STAGE CANVAS  --defines the scene, lighting, and objects to place including helpers and user controls   
    return (

        <div className="canvas-container" >
           <InfoPanel/>
            <Canvas >
                <Suspense fallback={null}>
                    {/*Atmosphere*/}
                    <Environment preset={"night"} background />
                    <ambientLight intensity={.5} />
                    <directionalLight position={[-1, 0, 0]} intensity={1} color={0xffffff} />


                    {/*Camera and Controls*/}
                    <OrbitControls enablePan={true} enableZoom={true} enableRotate={true} />

                    {/*Component Models (moon, sun, earth)*/}
                    <SUN />
                    <EARTH />
                    <MOON />

                </Suspense>

            </Canvas>

        </div>

    )
}

export default Stage
