import React, {useState, useRef, useEffect} from 'react';
import './nav.css';
import {AiOutlineHome} from 'react-icons/ai';
import {AiOutlineUser} from 'react-icons/ai';
import {BiBook} from 'react-icons/bi';
import {BiMessageSquareDetail} from 'react-icons/bi';
import {RiServiceLine} from 'react-icons/ri';
import gsap from 'gsap'

const Nav = () => {
    const [activeNav, setActiveNav] = useState('#');
    const nav = useRef(null);
    useEffect(() => {
        gsap.from(nav.current, {
            y: 50,
            opacity: 0,
            duration: .7,
            delay: 5
        })
    }, [])


    return (
        <nav ref={nav}>
            <a href='#' onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><AiOutlineHome /></a>
            <a href='#about' onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><AiOutlineUser /></a>
            <a href='#experience' onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}><BiBook /></a>
            <a href='#services' onClick={() => setActiveNav('#services')} className={activeNav === '#services' ? 'active' : ''}><RiServiceLine /></a>
            <a href='#contact' onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><BiMessageSquareDetail /></a>
        </nav>
    );
}

export default Nav;