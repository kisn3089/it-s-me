import React, {useRef, useEffect} from 'react';
import './services.css';
import {BiCheck} from 'react-icons/bi';
import gsap from 'gsap'
import {ScrollTrigger} from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Services = () => {
    const sub = useRef(null);
    const main = useRef(null);
    const section = useRef(null);
    const card1 = useRef(null);
    const card2 = useRef(null);
    const card3 = useRef(null);

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
        gsap.from([card1.current, card2.current, card3.current], {
            scrollTrigger: {
                trigger: section.current,
                start: "top bottom",
                end: "+=70%",
                scrub: true
            },
            opacity: 0,
            x: -50,
            skewX: 5,
            duration: .5,
            delay: .3,
            ease: "Expo.inOut",
            stagger: {
                amount: .6
            }
        })
    }, [])

    return (
        <section id='services' ref={section}>
            <h5 ref={sub}>What I Offer</h5>
            <h2 ref={main}>Services</h2>

            <div className='container services__container'>
                <article className='service' ref={card1}>
                    <div className='service__head'>
                        <h3>UI/UX Design</h3>
                    </div>

                    <ul className='service__list'>
                        <li>
                            <BiCheck className='service__list-icon' />
                            <p>Interactive Design</p>
                        </li>
                        <li>
                            <BiCheck className='service__list-icon' />
                            <p>Animation</p>
                        </li>
                        <li>
                            <BiCheck className='service__list-icon' />
                            <p>Responsive Web Design</p>
                        </li>
                        <li>
                            <BiCheck className='service__list-icon' />
                            <p>User Focus UI/UX</p>
                        </li>
                    </ul>
                </article>
            {/*    END OF UI/UX*/}
                <article className='service' ref={card2}>
                    <div className='service__head'>
                        <h3>Web Development</h3>
                    </div>

                    <ul className='service__list'>
                        <li>
                            <BiCheck className='service__list-icon' />
                            <p>Redux</p>
                        </li>
                        <li>
                            <BiCheck className='service__list-icon' />
                            <p>THREE.js</p>
                        </li>
                        <li>
                            <BiCheck className='list-icon' />
                            <p>Next.js</p>
                        </li>
                        <li>
                            <BiCheck className='list-icon' />
                            <p>TypeScript</p>
                        </li>
                        
                    </ul>
                </article>
                {/*END OF Web Development*/}
                <article className='service' ref={card3}>
                    <div className='service__head'>
                        <h3>Business Tools</h3>
                    </div>

                    <ul className='service__list'>
                        <li>
                            <BiCheck className='service__list-icon' />
                            <p>Github</p>
                        </li>
                        <li>
                            <BiCheck className='service__list-icon' />
                            <p>Slack</p>
                        </li>
                        <li>
                            <BiCheck className='service__list-icon' />
                            <p>Notion</p>
                        </li>
                        <li>
                            <BiCheck className='service__list-icon' />
                            <p>Logic Pro X</p>
                        </li>
                    </ul>
                </article>
            {/*    END OF Content Creation*/}
            </div>
        </section>
    );
}

export default Services;