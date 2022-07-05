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
    const [scrollTop, setScrollTop] = useState('nav');
    const [home, setHome] = useState('#');
    const [about, setAbout] = useState('#');
    const [experience, setExperience] = useState('#');
    const [service, setService] = useState('#');
    const [portfolio, setPortfolio] = useState('#');
    const nav = useRef(null);

    const downNav = () => {
        window.scrollY >= 80 ? setScrollTop('ac') : setScrollTop('nav')
        window.scrollY <= 200 ? setHome('active') : setHome('#')
        200 < window.scrollY && window.scrollY < 1300 ? setAbout('active') : setAbout('#')
        1300 < window.scrollY && window.scrollY < 2200 ? setExperience('active') : setExperience('#')
        2200 < window.scrollY && window.scrollY < 3200 ? setService('active') : setService('#')
        window.scrollY >= 3200 ? setPortfolio('active') : setPortfolio('#')
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
            <a href='#' className={home}><AiOutlineHome /></a>
            <a href='#about' className={about}><AiOutlineUser /></a>
            <a href='#experience' className={experience}><BiBook /></a>
            <a href='#services' className={service}><RiServiceLine /></a>
            <a href='#contact' className={portfolio}><BiMessageSquareDetail /></a>
        </nav>
    );
}

export default Nav;