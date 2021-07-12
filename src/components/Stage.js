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
*/

import React from 'react'
import { Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber'
import { Environment, OrbitControls, useTexture } from '@react-three/drei'


function Stage() {

    //Animated Primary Sphere model
    function AnimatedSphere() {
        const sphere1 = React.useRef();

        const [colorMap, displacementMap, normalMap, roughnessMap, aoMap] = useTexture([
            './textures/PavingStones092_1K_Color.jpg',
            './textures/PavingStones092_1K_Displacement.jpg',
            './textures/PavingStones092_1K_Normal.jpg',
            './textures/PavingStones092_1K_Roughness.jpg',
            './textures/PavingStones092_1K_AmbientOcclusion.jpg',
        ])

        useFrame(({ clock }) => {
            sphere1.current.rotation.z = clock.getElapsedTime()
        })

        return (
            <mesh ref={sphere1}>
                <sphereGeometry args={[1, 100, 100]} />
                <meshPhongMaterial
                    displacementScale={0.2}
                    map={colorMap}
                    displacementMap={displacementMap}
                    normalMap={normalMap}
                    roughnessMap={roughnessMap}
                    aoMap={aoMap}
                />

            </mesh>
        )
    }

    //THE STAGE CANVAS  --defines the scene, lighting, and objects to place including helpers and user controls   
    return (
        <div className='canvas-container'>
            <Canvas>
                <Suspense fallback={null}>

                    {/*Atmosphere*/}
                    <Environment preset="night" background />
                    <ambientLight intensity={0.1} />
                    <directionalLight position={[0, 0, 1]} />

                    {/*Camera and Controls*/}
                    <OrbitControls enablePan={true} enableZoom={true} enableRotate={true} />

                    {/*Component Models*/}
                    <AnimatedSphere />

                </Suspense>
            </Canvas>
        </div>
    )
}

export default Stage
