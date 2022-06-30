import React from 'react';
import './about.css';
import me2 from '../../assets/me2.jpg';
import {FaAward} from 'react-icons/fa';
import {FiUsers} from 'react-icons/fi';
import {VscFolderLibrary} from 'react-icons/vsc';

const About = () => {
    return (
        <section id='about'>
            <h5>Get To Know</h5>
            <h2>About Me</h2>

            <div className='container about__container'>
                <div className='about__me'>
                    <div className='about__me-image'>
                        <img src={me2} alt='About Image' />
                    </div>
                </div>


                <div className='about__content'>
                    <div className='about__cards'>
                        <article className='about__card'>
                            <FaAward className='about__icon' />
                            <h5>Experience</h5>
                            <small>1 ~ Years Studying</small>
                        </article>

                        <article className='about__card'>
                            <FiUsers className='about__icon' />
                            <h5>Clients</h5>
                            <small>0</small>
                        </article>

                        <article className='about__card'>
                            <VscFolderLibrary className='about__icon' />
                            <h5>Project</h5>
                            <small>5 + Completed</small>
                        </article>
                    </div>

                    <p>
                        사용자에게 입체적인 웹서비스를 제공하기 위해 사용자 중심 인터페이스와 인터렉티브한 3D 웹뷰를 지향해,
                        JavaScript 라이브러리인 Three.js를 공부하고 있고 메타버스와 블록체인에도 관심이 많아
                        Unreal Engine 5와 Solidity 라이브러리를 공부하고 있습니다.
                    </p>

                    <a href='#contact' className='btn btn-primary'>Contact</a>
                </div>
            </div>
        </section>
    );
}

export default About;