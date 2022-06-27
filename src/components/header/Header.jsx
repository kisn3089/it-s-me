import React, {useEffect} from 'react';
import './header.css';
import Cta from "./CTA";
import me from '../../assets/me.png';
import HeaderSocials from "./HeaderSocials";
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import * as THREE from 'three';
import me1 from '../../assets/me1.jpg';



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
                    <img src={me1} alt='me' style={{borderRadius: '10%'}} />
                </div>

                <a href='#contact' className='scroll__down'>Scroll Down</a>
            </div>
        </header>
    );
}

export default Header;