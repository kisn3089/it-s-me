import React, {useRef, useEffect} from 'react';
import gsap from 'gsap'

const Cta = () => {
    const cv = useRef(null);
    const con = useRef(null);
    useEffect(() => {
        gsap.from(cv.current, {
            duration: 0.5,
            opacity: 0,
            x: -70,
            delay: 3.5,
            ease: 'Power3.inOut'
        })
        gsap.from(con.current, {
            duration: .5,
            opacity: 0,
            x: 70,
            delay: 3.5,
            ease: 'Power3.inOut'
        })
    }, []);


    return (
        <div className='cta'>
            <a href="https://drive.google.com/file/d/1tToLWdGECtSFGNFSedkZVnH782h8KzCt/view?usp=sharing" target='_blank' className='ebtn' ref={cv}>CV PDF</a>
            <a href='#contact' className='ebtn' ref={con}>Contact</a>
        </div>
    );
}

export default Cta;