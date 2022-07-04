import React, {useRef, useEffect} from 'react';
import {BsGithub} from 'react-icons/bs'
import velog from '../../assets/velog2.ico';
import zep from '../../assets/zep.png';
import gsap from 'gsap'

const HeaderSocials = ({timeline}) => {
    const social = useRef(null);
    useEffect(() => {
        gsap.from(social.current, {
            duration: .7,
            delay: 5,
            x: -50,
            opacity: 0
        })
    }, [])

    return (
        <div className='header__socials' ref={social}>
            {/* a / target 은 새로운 탭에서 열기 */}
            <a href='https://github.com/kisn3089' target='_blank' style={{marginBottom: '-7px'}}><BsGithub /></a>
            <a href='https://velog.io/@his' target='_blank'><img src={velog} style={{width: '17px', borderRadius: '100%' ,backgroundColor: '#4db5ff'}} /></a>
            <a href='https://zep.us/play/yOvJR5' target='_blank'><img src={zep} style={{width: '17px', borderRadius: '100%' ,backgroundColor: '#4db5ff', color: '#111'}} /></a>
        </div>
    );
}

export default HeaderSocials;