import React, {useRef, useEffect} from 'react';
import './experience.css';
import {BsFillPatchCheckFill} from 'react-icons/bs';
import gsap from 'gsap'
import {ScrollTrigger} from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Experience = () => {
    const sub = useRef(null);
    const main = useRef(null);
    const card1 = useRef(null);
    const card2 = useRef(null);

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
        gsap.from(card1.current, {
            scrollTrigger: {
                trigger: card1.current,
                start: "top bottom",
                end: "+=50%",
                scrub: true
            },
            opacity: 0,
            x: -100,
            duration: .5,
            delay: .3,
            ease: "Expo.inOut"
        })
        gsap.from(card2.current, {
            scrollTrigger: {
                trigger: card1.current,
                start: "top bottom",
                end: "+=50%",
                scrub: true
            },
            opacity: 0,
            x: 100,
            duration: .5,
            delay: .3,
            ease: "Expo.inOut"
        })
    }, [])


    return (
        <section id='experience'>
            <h5 ref={sub}>What Skills I Have</h5>
            <h2 ref={main}>My Experience</h2>

            <div className='container experience__container'>
                <div className='experience__frontend' ref={card1}>
                    <h3>Frontend Development</h3>
                    <div className='experience__content'>

                        <article className='experience__details'>
                            <BsFillPatchCheckFill className='experience__details-icon' />
                            <div>
                                <h4>React</h4>
                                <small className='text-light'>Experienced</small>
                            </div>
                        </article>

                        <article className='experience__details'>
                            <BsFillPatchCheckFill className='experience__details-icon' />
                            <div>
                                <h4>HTML</h4>
                                <small className='text-light'>Experienced</small>
                            </div>
                        </article>

                        <article className='experience__details'>
                            <BsFillPatchCheckFill className='experience__details-icon' />
                            <div>
                                <h4>JavaScript</h4>
                                <small className='text-light'>Experienced</small>
                            </div>
                        </article>

                        <article className='experience__details'>
                            <BsFillPatchCheckFill className='experience__details-icon' />
                            <div>
                                <h4>CSS</h4>
                                <small className='text-light'>Experienced</small>
                            </div>
                        </article>

                        <article className='experience__details'>
                            <BsFillPatchCheckFill className='experience__details-icon' />
                            <div>
                                <h4>Bootstrap</h4>
                                <small className='text-light'>Intermediate</small>
                            </div>
                        </article>

                        <article className='experience__details'>
                            <BsFillPatchCheckFill className='experience__details-icon' />
                            <div>
                                <h4>Tailwind</h4>
                                <small className='text-light'>Intermediate</small>
                            </div>
                        </article>
                    </div>
                </div>
                {/*END OF FRONTEND*/}
                <div className='experience__backend' ref={card2}>
                    <h3>Backend Development</h3>
                    <div className='experience__content'>

                        <article className='experience__details'>
                            <BsFillPatchCheckFill className='experience__details-icon' />
                            <div>
                                <h4>Node JS</h4>
                                <small className='text-light'>Intermediate</small>
                            </div>
                        </article>

                        <article className='experience__details'>
                            <BsFillPatchCheckFill className='experience__details-icon' />
                            <div>
                                <h4>MySQL</h4>
                                <small className='text-light'>Experienced</small>
                            </div>
                        </article>

                        <article className='experience__details'>
                            <BsFillPatchCheckFill className='experience__details-icon' />
                            <div>
                                <h4>Python</h4>
                                <small className='text-light'>Intermediate</small>
                            </div>
                        </article>

                        <article className='experience__details'>
                            <BsFillPatchCheckFill className='experience__details-icon' />
                            <div>
                                <h4>MariaDB</h4>
                                <small className='text-light'>Intermediate</small>
                            </div>
                        </article>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Experience;