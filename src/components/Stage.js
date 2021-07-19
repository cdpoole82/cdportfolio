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

    <MeshWobbleMaterial 
                color='hotpink' 
                factor={1}
                speed={10}
    />

    <meshPhongMaterial
                    displacementScale={0.2}
                    map={colorMap}
                    displacementMap={displacementMap}
                    normalMap={normalMap}
                    roughnessMap={roughnessMap}
                    aoMap={aoMap}
                                        
     />

*/

import React from 'react'
import { Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, useTexture, Environment } from '@react-three/drei'


const Stage = () => {

    //Animated Primary Sphere model
    function AnimatedSphere1() {

        const sphere1 = React.useRef();

        const [colorMap, normalMap] = useTexture([
            './textures/moon.jpg',
            './textures/moonnormal.jpg',

        ])

        useFrame(({ clock }) => {
            sphere1.current.rotation.x = clock.getElapsedTime()

        })

        return (
            <mesh ref={sphere1} position={[1.5, 5, -4]} scale={.50}>
                <sphereGeometry args={[1, 100, 100]} />
                <meshPhongMaterial
                    map={colorMap}
                    normalMap={normalMap}

                />
            </mesh>

        )
    }

    //Animated Second Sphere model
    function AnimatedSphere2() {

        const sphere2 = React.useRef();

        const [colorMap] = useTexture([
            './textures/sun-2k.jpg',
            

        ])

        useFrame(({ clock }) => {
            sphere2.current.rotation.z = clock.getElapsedTime()

        })

        return (
            <mesh ref={sphere2} position={[-1, 1, 0]}>
                <sphereGeometry args={[1, 100, 100]} />
                <meshPhongMaterial
                    map={colorMap}
                    
                />
            </mesh>

        )
    }

    //Animated Primary Sphere model
    function AnimatedSphere3() {

        const sphere3 = React.useRef();

        const [colorMap, normalMap, specularMap] = useTexture([
            './textures/earth_daymap.jpg',
            './textures/earth_normal_map.jpg',
            './textures/earth_specular_map.jpg',
            
           

        ])

        useFrame(({ clock }) => {
            sphere3.current.rotation.y = clock.getElapsedTime()

        })

        return (
            <mesh ref={sphere3} position={[4, 3, -4]}>
                <sphereGeometry args={[1, 100, 100]} />
                <meshPhongMaterial
                    map={colorMap}
                    normalMap={normalMap}
                    specularMap={specularMap}                   

                />
            </mesh>

        )
    }
    //THE STAGE CANVAS  --defines the scene, lighting, and objects to place including helpers and user controls   
    return (
        <div className="canvas-container" >
            <Canvas >
                <Suspense fallback={null}>
                    {/*Atmosphere*/}
                    <Environment preset={"night"} background />
                    <ambientLight intensity={.5} />
                    <directionalLight position={[-1,0,0]} intensity={1} color={0xffffff}/>

                    
                    {/*Camera and Controls*/}
                    <OrbitControls enablePan={true} enableZoom={true} enableRotate={true} />

                    {/*Component Models*/}
                    <AnimatedSphere1 />
                    <AnimatedSphere2 />
                    <AnimatedSphere3 />

                </Suspense>
               
            </Canvas>
        </div>
    )
}

export default Stage
