import React, {useState, useRef, useEffect} from 'react';
import './nav.css';
import {AiOutlineHome} from 'react-icons/ai';
import {AiOutlineUser} from 'react-icons/ai';
import {BiBook} from 'react-icons/bi';
import {BiMessageSquareDetail} from 'react-icons/bi';
import {RiServiceLine} from 'react-icons/ri';
import gsap from 'gsap'
import {ScrollTrigger} from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Nav = () => {
    const [activeNav, setActiveNav] = useState('#');
    const [scrollTop, setScrollTop] = useState('nav');
    const nav = useRef(null);

    const downNav = () => {
        window.scrollY >= 80 ? setScrollTop('ac') : setScrollTop('nav')
    }

    useEffect(() => {
        gsap.to(".nav", {
            yPercent: 100,
            opacity: 0,
            duration: .3,
            delay: 0,
            ease: "sine.inOut"
        })
        gsap.to(".ac", {
            yPercent: 0,
            duration: .3,
            opacity: 1,
            delay: 0,
            ease: "sine.inOut"
        })
        window.addEventListener('scroll', downNav);
        return () => {
            window.removeEventListener("scroll", downNav);
        }
    }, [window.scrollY])

    return (
        <nav ref={nav} className={scrollTop}>
            <a href='#' onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><AiOutlineHome /></a>
            <a href='#about' onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><AiOutlineUser /></a>
            <a href='#experience' onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}><BiBook /></a>
            <a href='#services' onClick={() => setActiveNav('#services')} className={activeNav === '#services' ? 'active' : ''}><RiServiceLine /></a>
            <a href='#contact' onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><BiMessageSquareDetail /></a>
        </nav>
    );
}

export default Nav;