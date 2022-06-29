import React from 'react';

const Plane = () => {
    return (
        <mesh posision={[0, 0, 0]} rotation={[ -Math.PI / 2, 0, 0]}>
            <planeBufferGeometry attach='geometry' args={[100, 100]} />
            <meshLambertMaterial attach='material' coloc='lightblue' />
        </mesh>
    );
}

export default Plane;