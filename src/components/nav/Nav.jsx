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
    const [a, setA] = useState('');
    const [scrollTop, setScrollTop] = useState('nav');
    const [home, setHome] = useState('#');
    const [about, setAbout] = useState('#');
    const [experience, setExperience] = useState('#');
    const [service, setService] = useState('#');
    const [portfolio, setPortfolio] = useState('#');

    const downNav = () => {
        window.scrollY < 60 ? setScrollTop('nav') : setScrollTop('ac')
        window.scrollY <= 400 ? setHome('active') : setHome('#')
        400 < window.scrollY && window.scrollY < 1100 ? setAbout('active') : setAbout('#')
        1100 < window.scrollY && window.scrollY < 1700 ? setExperience('active') : setExperience('#')
        1700 < window.scrollY && window.scrollY < 2300 ? setService('active') : setService('#')
        window.scrollY >= 2300 ? setPortfolio('active') : setPortfolio('#')
        // DeskTop
        if(4350 < window.scrollY && window.scrollY <= 4900) {
            setScrollTop('bot')
            // Tablet
        }   else if(5900 < window.scrollY && window.scrollY <= 6000) {
            setScrollTop('bot')
            // Phone
        }   else if(7800 < window.scrollY && window.scrollY <= 8500) {
            setScrollTop('bot')
        }   else {
            return false;
        }
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
        gsap.to(".bot", {
            yPercent: -180,
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
        <nav className={scrollTop}>
            <a href='#' className={home}><AiOutlineHome /></a>
            <a href='#about' className={about}><AiOutlineUser /></a>
            <a href='#experience' className={experience}><BiBook /></a>
            <a href='#services' className={service}><RiServiceLine /></a>
            <a href='#contact' className={portfolio}><BiMessageSquareDetail /></a>
        </nav>
    );
}

export default Nav;