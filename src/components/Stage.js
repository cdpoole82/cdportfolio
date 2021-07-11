import React from 'react'
import {Canvas, extend, useFrame} from '@react-three/fiber'
import {OrbitControls } from 'three/examples/jsm/controls/OrbitControls';


extend({OrbitControls}); //allows controls to be used in JSX

//this component will be structured using React Three Fiber paradigm importing all it needs to run itself
function Stage() {
    
    //create a new animation component function to take in mesh and then apply animation properties. the useFrame hook provides the animation loop and type
    const AnimateFrame = (props) => {
        useFrame(({clock}) => {
            props.meshRef.current.rotation.x += .01;
        });
        return null;
    }
    
    const xMesh = React.useRef();  
    return (
        <div className='canvas-container'>
            <Canvas>
                <mesh ref={xMesh}>
                    <boxGeometry/>
                    <meshBasicMaterial color={"#ff0000"}/>
                </mesh>
                <AnimateFrame meshRef={xMesh} />
                   
            </Canvas>
        </div>
    )
}

export default Stage
