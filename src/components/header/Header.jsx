import React, {useRef, useState, useEffect} from 'react';
import './header.css';
import Cta from "./CTA";
import HeaderSocials from "./HeaderSocials";
import { Canvas, useFrame } from '@react-three/fiber'
import Box from "./Box";
import { OrbitControls, Stars } from '@react-three/drei'

const Header = () => {

    return (
        <header>
            <div className="container header__container">
                <h5>Hello I'm</h5>
                <h1>his</h1>
                <h5 className='text-light'>Frontend Developer</h5>
                <Cta />
                <HeaderSocials />

                <div className='me'>
                    <Canvas className='canvas'>
                        <OrbitControls
                            enableZoom={true}
                            enablePan={true}
                            enableRotate={true}
                            enableDamping={true}
                            zoomSpeed={1}
                            panSpeed={1}
                            rotateSpeed={1}
                        />
                        <ambientLight intensity={0.5} />
                        <Stars depth={100}
                               fade={true}
                               factor={7}
                               saturation={0}
                        />
                        <Box position={[0, 0, 0]} />
                        <pointLight position={[5, 5, 5]} intensity={5} />
                    </Canvas>
                </div>

                <a href='#contact' className='scroll__down'>Scroll Down</a>
            </div>
        </header>
    );
}

export default Header;