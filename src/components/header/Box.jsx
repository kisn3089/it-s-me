import React, {useRef, useState} from 'react';
import {useFrame, useLoader} from '@react-three/fiber'

import EarthDayMap from '../../assets/8k_earth_daymap.jpeg'
import EarthNormalMap from '../../assets/8k_earth_normal_map.jpeg'
import EarthSpecularMap from '../../assets/8k_earth_specular_map.jpeg'
import EarthCloudsMap from '../../assets/8k_earth_clouds.jpg'
import {TextureLoader} from "three";
import * as THREE from 'three'

const Box = (props) => {
    const earthRef = useRef();
    const cloudsRef = useRef();
    const [colorMap, normalMap, specularMap, cloudMap] = useLoader(TextureLoader,
        [EarthDayMap, EarthNormalMap, EarthSpecularMap, EarthCloudsMap])

    useFrame(({clock}) => {
        const elapsedTime = clock.getElapsedTime();
        // clock.getElapsedTime() / 6 << 실제 지구의 공전 속도를 가져오는것
        earthRef.current.rotation.y = elapsedTime / 6
        cloudsRef.current.rotation.y = elapsedTime / 6
    })

    // useFrame((state) => {
    //     const step = 0.1;
    //     state.camera.position = THREE.MathUtils.lerp(
    //         state.camera.position,
    //         zoom ?
    //     )
    // })

    return (
        <>
            <mesh ref={cloudsRef}>
                <sphereGeometry args={[1.7005, 32, 32]} />
                <meshPhongMaterial map={cloudMap} opacity={0.4} depthWrite={true} transparent={true} side={THREE.DoubleSide} />
            </mesh>
            <mesh position={[0, 0, 0]}
                  ref={earthRef}
            >
                <sphereGeometry args={[1.7, 32, 32]} attach='geometry' />
                <meshPhongMaterial specularMap={specularMap} />
                <meshStandardMaterial
                    map={colorMap}
                    normalMap={normalMap}
                    attach='material'
                    metalness={0.4}
                    roughness={0.7}
                />
            </mesh>
        </>
    );
}

export default Box;