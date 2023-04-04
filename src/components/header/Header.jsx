import React, { useRef, useEffect } from 'react';
import './header.css';
import Cta from './CTA';
import HeaderSocials from './HeaderSocials';
import { Canvas } from '@react-three/fiber';
import Box from './Box';
import { OrbitControls, Stars } from '@react-three/drei';
import gsap from 'gsap';

const Header = ({ timeline }) => {
  const sub = useRef(null);
  const main = useRef(null);
  const text = useRef(null);
  const canvas = useRef(null);
  const scroll = useRef(null);
  useEffect(() => {
    timeline.from([sub.current, main.current, text.current], 0.7, {
      delay: 3,
      ease: 'Expo.inOut',
      opacity: 0,
      y: 100,
      skewY: 10,
      stagger: {
        amount: 0.3,
      },
    });
    gsap.from(canvas.current, {
      duration: 1.3,
      delay: 4.5,
      x: -1000,
    });
    gsap.from(scroll.current, {
      duration: 0.5,
      opacity: 0,
      delay: 4.5,
      x: 20,
    });
  }, []);

  return (
    <>
      <header>
        <div className="container header__container">
          <h5 ref={sub}>Hello I'm</h5>
          <h1 ref={main}>Stems</h1>
          <h5 className="text-light" ref={text}>
            Frontend Dev
          </h5>
          <Cta timeline={timeline} />
          <HeaderSocials timeline={timeline} />

          <div className="me">
            <Canvas className="canvas" ref={canvas}>
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
              <Stars depth={100} fade={true} factor={7} saturation={0} />
              <Box />
              <pointLight position={[5, 5, 5]} intensity={5} />
            </Canvas>
          </div>

          <a href="#contact" ref={scroll} className="scroll__down">
            Scroll Down
          </a>
        </div>
      </header>
    </>
  );
};

export default Header;
