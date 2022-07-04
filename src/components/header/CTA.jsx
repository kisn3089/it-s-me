import React, {useRef, useEffect} from 'react';
import CV from '../../assets/cv.pdf'
import gsap from 'gsap'

const Cta = ({timeline}) => {
    const cv = useRef(null);
    const con = useRef(null);
    useEffect(() => {
        gsap.from(cv.current, .5, {
            opacity: 0,
            x: -70,
            delay: 3.5,
            ease: 'Power3.inOut'
        })
        gsap.from(con.current, .5, {
            opacity: 0,
            x: 70,
            delay: 3.5,
            ease: 'Power3.inOut'
        })
    }, []);


    return (
        <div className='cta'>
            <a href={CV} download className='btn' ref={cv}>Download CV</a>
            <a href='#contact' className='btn btn-primary' ref={con}>Contact</a>
        </div>
    );
}

export default Cta;