import React from 'react';
import './services.css';
import {BiCheck} from 'react-icons/bi';

const Services = () => {
    return (
        <section id='services'>
            <h5>What I Offer</h5>
            <h2>Services</h2>

            <div className='container services__container'>
                <article className='service'>
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
                            <p>Gsap</p>
                        </li>
                        <li>
                            <BiCheck className='service__list-icon' />
                            <p>Responsive Web Design</p>
                        </li>
                        <li>
                            <BiCheck className='service__list-icon' />
                            <p>사용자 중심 UI/UX</p>
                        </li>
                    </ul>
                </article>
            {/*    END OF UI/UX*/}
                <article className='service'>
                    <div className='service__head'>
                        <h3>Web Development,</h3>
                            <h3>Business Tools</h3>
                    </div>

                    <ul className='service__list'>
                        <li>
                            <BiCheck className='service__list-icon' />
                            <p>THREE.js</p>
                        </li>
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
                    </ul>
                </article>
                {/*END OF Web Development*/}
                <article className='service'>
                    <div className='service__head'>
                        <h3>Content Creation</h3>
                    </div>

                    <ul className='service__list'>
                        <li>
                            <BiCheck className='service__list-icon' />
                            <p>Unreal Engine 5</p>
                        </li>
                        <li>
                            <BiCheck className='service__list-icon' />
                            <p>Final Cut Pro</p>
                        </li>
                        <li>
                            <BiCheck className='service__list-icon' />
                            <p>Drone Filming</p>
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