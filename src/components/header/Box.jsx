import React, {useRef} from 'react';
import { useFrame } from '@react-three/fiber'

const Box = () => {
    const ref = useRef();

    useFrame(() => {
        // ref.current.rotation.y += 0.01
    })

    return (
        <>
            <mesh position={[0, 0, 0]} ref={ref}>
                <boxBufferGeometry attach='geometry' />
                <meshStandardMaterial attach='material' color='hotpink' />
            </mesh>
        </>
    );
}

export default Box;