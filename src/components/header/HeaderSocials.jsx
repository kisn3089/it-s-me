import React from 'react';
import {BsGithub} from 'react-icons/bs'
import velog from '../../assets/velog2.ico';
import zep from '../../assets/zep.png';

const HeaderSocials = () => {
    return (
        <div className='header__socials'>
            <a href='https://github.com' target='_blank' style={{marginBottom: '-7px'}}><BsGithub /></a>
            <a href='https://linkedin.com' target='_blank'><img src={velog} style={{width: '17px', borderRadius: '100%' ,backgroundColor: '#4db5ff'}} /></a>
            <a href='https://linkedin.com' target='_blank'><img src={zep} style={{width: '17px', borderRadius: '100%' ,backgroundColor: '#4db5ff', color: '#111'}} /></a>
        </div>
    );
}

export default HeaderSocials;