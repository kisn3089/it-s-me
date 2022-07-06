import React, {useRef, useEffect} from 'react';
import './Remember.css'
import gsap from 'gsap'

const Remember = () => {
    const back = useRef(null);
    const r = useRef(null);
    const re = useRef(null);
    const rem = useRef(null);
    const reme = useRef(null);
    const remem = useRef(null);
    const rememb = useRef(null);
    const remembe = useRef(null);
    const remember = useRef(null);
    useEffect(() => {
        gsap.from(r.current,  {
            duration: 1.5,
            x: -350,
            ease: 'strong.inOut',
        })
        gsap.from(re.current,  {
            duration: 1.5,
            x: -250,
            ease: 'strong.inOut',
        })
        gsap.from(rem.current,  {
            duration: 1.5,
            x: -150,
            ease: 'strong.inOut',
        })
        gsap.from(reme.current,  {
            duration: 1.5,
            x: -50,
            ease: 'strong.inOut',
        })
        gsap.from(remem.current,  {
            duration: 1.5,
            x: 50,
            ease: 'strong.inOut',
        })
        gsap.from(rememb.current,  {
            duration: 1.5,
            x: 150,
            ease: 'strong.inOut',
        })
        gsap.from(remembe.current,  {
            duration: 1.5,
            x: 250,
            ease: 'strong.inOut',
        })
        gsap.from(remember.current,  {
            duration: 1.5,
            x: 350,
            ease: 'strong.inOut',
        })
        gsap.to([r.current, re.current, rem.current, reme.current, remem.current,
            rememb.current, remembe.current, remember.current], {
            delay: 1.5,
            duration: 1,
            y: 50,
            opacity: 0,
            zIndex: -1,
            stagger: {
                amount: .3
            }
        })
        gsap.to(back.current, {
            delay: 3,
            duration: 1,
            y: 50,
            opacity: 0,
            zIndex: -1,
            display: 'none'
        })
        const timer = setInterval(() => {
            document.body.style.overflow = 'auto';
        }, 7000)
        return () => clearInterval(timer);
    }, [])


    return (
        <>
            <div className='background' ref={back}>
                <span className='R' ref={r}>R</span>
                <span className='E' ref={re}>E</span>
                <span className='M' ref={rem}>M</span>
                <span className='E' ref={reme}>E</span>
                <span className='M' ref={remem}>M</span>
                <span className='B' ref={rememb}>B</span>
                <span className='E' ref={remembe}>E</span>
                <span className='R' ref={remember}>R</span>
            </div>
        </>
    );
}

export default Remember;