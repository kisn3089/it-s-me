import React, {useState, useRef, useEffect} from 'react';
import './nav.css';
import {AiOutlineHome} from 'react-icons/ai';
import {AiOutlineUser} from 'react-icons/ai';
import {BiBook} from 'react-icons/bi';
import {BiMessageSquareDetail} from 'react-icons/bi';
import {BiErrorCircle} from 'react-icons/bi';
import {BiCarousel} from 'react-icons/bi';
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
    const [contact, setContact] = useState('#');

    const downNav = () => {
        window.scrollY < 60 ? setScrollTop('nav') : setScrollTop('ac')
        window.scrollY <= 600 ? setHome('active') : setHome('#')
        600 < window.scrollY && window.scrollY < 1400 ? setAbout('active') : setAbout('#')
        1400 < window.scrollY && window.scrollY < 1900 ? setExperience('active') : setExperience('#')
        1900 < window.scrollY && window.scrollY < 2600 ? setService('active') : setService('#')
        2600 < window.scrollY && window.scrollY < 4300 ? setPortfolio('active') : setPortfolio('#')
        window.scrollY >= 4300 ? setContact('active') : setContact('#')
        // DeskTop
        if(4350 < window.scrollY && window.scrollY <= 4900) {
            setScrollTop('bot')
            // Tablet
        }   else if(6000 < window.scrollY && window.scrollY <= 6100) {
            setScrollTop('bot')
            // Phone
        }   else if(8200 < window.scrollY && window.scrollY <= 8600) {
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
            <a href='#services' className={service}><BiErrorCircle /></a>
            <a href='#portfolio' className={portfolio}><BiCarousel /></a>
            <a href='#contact' className={contact}><BiMessageSquareDetail /></a>
        </nav>
    );
}

export default Nav;