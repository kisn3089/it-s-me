import React, {useEffect} from 'react';
import './header.css';
import Cta from "./CTA";
import me from '../../assets/me.png';
import HeaderSocials from "./HeaderSocials";
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import * as THREE from 'three';



const Header = () => {
    useEffect(() => {
        const scene = new THREE.Scene();
        const renderer = new THREE.WebGLRenderer( {
            canvas: document.getElementById("canvas"),
            antialias: true
        });
        renderer.outputEncoding = THREE.sRGBEncoding;
// OrthographicCamera
        const camera = new THREE.PerspectiveCamera(30, 1);
        camera.position.set(0,0,0);

        scene.background = new THREE.Color("white");
        const light = new THREE.DirectionalLight(0xffff00, 10);
        scene.add(light);

        const loader = new GLTFLoader();
        loader.load('src/assets/scene.gltf', function (gltf){
            scene.add(gltf.scene);

            function animate() {
                requestAnimationFrame(animate);
                gltf.scene.rotation.y += 0.01;
                renderer.render(scene, camera);
            }
            animate();
        });
    }, []);


    return (
        <header>
            <div className="container header__container">
                <h5>Hello I'm</h5>
                <h1>his</h1>
                <h5 className='text-light'>Frontend Developer</h5>
                <Cta />
                <HeaderSocials />

                <div className='me'>
                    <canvas id='canvas' className='canvas'></canvas>
                    {/*<img src={me} alt='me' />*/}
                </div>

                <a href='#contact' className='scroll__down'>Scroll Down</a>
            </div>
        </header>
    );
}

export default Header;