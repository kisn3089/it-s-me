import React, {useRef, useEffect} from 'react';
import './about.css';
import me2 from '../../assets/me2.jpg';
import {FaAward} from 'react-icons/fa';
import {FiUsers} from 'react-icons/fi';
import {VscFolderLibrary} from 'react-icons/vsc';
import gsap from 'gsap'
import {ScrollTrigger} from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
    const sub = useRef(null);
    const main = useRef(null);
    const img = useRef(null);
    const card1 = useRef(null);
    const card2 = useRef(null);
    const card3 = useRef(null);
    const text = useRef(null);
    const btn = useRef(null);

    useEffect(() => {
        gsap.from([sub.current, main.current], {
            scrollTrigger: {
                trigger: sub.current,
                start: "top bottom",
                end: "+=40%",
                scrub: true
            },
            opacity: 0,
            y: 50,
            duration: .5,
            delay: .3,
            ease: "Expo.inOut",
            stagger: {
                amount: .3
            }
        })
        gsap.from(img.current, {
            scrollTrigger: {
                trigger: img.current,
                start: "-=220",
                end: "+=270",
                scrub: true
            },
            opacity: 0,
            x: -100,
            y: -300,
            duration: .5,
            delay: .3,
            ease: "Expo.inOut"
        })
        gsap.from([card1.current, card2.current, card3.current], {
            scrollTrigger: {
                trigger: card1.current,
                start: "top bottom",
                end: "+=40%",
                scrub: true
            },
            opacity: 0,
            y: 50,
            duration: .5,
            delay: .3,
            ease: "Expo.inOut",
            stagger: {
                amount: .3
            }
        })
        gsap.from(text.current, {
            scrollTrigger: {
                trigger: text.current,
                start: "top bottom",
                end: "+=40%",
                scrub: true
            },
            opacity: 0,
            y: 50,
            duration: .5,
            delay: .3,
            ease: "Expo.inOut"
        })
        gsap.from(btn.current, {
            scrollTrigger: {
                trigger: btn.current,
                start: "top bottom",
                end: "+=10%",
                scrub: true,
            },
            opacity: 0,
            x: 70,
            duration: .2,
            ease: "linear"
        })
    }, [])

    return (
        <section id='about'>
            <h5 ref={sub}>Get To Know</h5>
            <h2 ref={main}>About Me</h2>

            <div className='container about__container'>
                <div className='about__me' ref={img}>
                    <div className='about__me-image'>
                        <img src={me2} alt='About Image' />
                    </div>
                </div>


                <div className='about__content'>
                    <div className='about__cards' ref={card1}>
                        <article className='about__card'>
                            <FaAward className='about__icon' />
                            <h5>Experience</h5>
                            <small>1 ~ Years Studying</small>
                        </article>

                        <article className='about__card' ref={card2}>
                            <FiUsers className='about__icon' />
                            <h5>Clients</h5>
                            <small>0</small>
                        </article>

                        <article className='about__card' ref={card3}>
                            <VscFolderLibrary className='about__icon' />
                            <h5>Project</h5>
                            <small>7 + Completed</small>
                        </article>
                    </div>

                    <p ref={text}>
                        사용자에게 입체적이고 인터렉티브한 웹서비스를 제공하기 위해 사용자 중심 인터페이스와 3D 웹뷰를 지향해,
                        JavaScript 라이브러리인 Three.js를 공부하고 있고 중점적으로는 React를 공부하고 있습니다.
                    </p>

                    <a href='#contact' className='btn btn-primary' ref={btn}>Contact</a>
                </div>
            </div>
        </section>
    );
}

export default About;