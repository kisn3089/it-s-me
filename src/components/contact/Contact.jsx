import React, {useRef, useState, useEffect} from 'react';
import './contact.css';
import {MdEmail} from 'react-icons/md';
import {BsWhatsapp} from 'react-icons/bs';
import emailjs from 'emailjs-com';
import gsap from 'gsap'
import {ScrollTrigger} from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
    const main = useRef(null);
    const email = useRef(null);
    const phone = useRef(null);
    const inputName = useRef(null);
    const inputEmail = useRef(null);
    const inputMsg = useRef(null);
    const btn = useRef(null);


    const [send, setSend] = useState(false);
    const form = useRef();

    useEffect(() => {
        gsap.from(main.current, {
            scrollTrigger: {
                trigger: main.current,
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
        gsap.from([email.current, phone.current], {
            scrollTrigger: {
                trigger: email.current,
                start: "top bottom",
                end: "+=50%",
                scrub: true
            },
            opacity: 0,
            x: -50,
            duration: .5,
            delay: .3,
            ease: "Expo.inOut",
            stagger: {
                amount: .6
            }
        })
        gsap.from([inputName.current, inputEmail.current, inputMsg.current], {
            scrollTrigger: {
                trigger: inputName.current,
                start: "top bottom",
                end: "+=50%",
                scrub: true
            },
            opacity: 0,
            x: -50,
            duration: .5,
            delay: .3,
            ease: "Expo.inOut",
            stagger: {
                amount: .6
            }
        })
        gsap.from(btn.current, {
            scrollTrigger: {
                trigger: btn.current,
                start: "top bottom",
                end: "+=40%",
                scrub: true
            },
            opacity: 0,
            x: 70,
            duration: .5,
            delay: .3,
            ease: "Expo.inOut"
        })
    }, [])

    const sendEmail = (e) => {
        e.preventDefault();
        setSend(false);

        emailjs.sendForm('service_qyx1t2p', 'template_08attlj', form.current, 'c3AaeWQ6LX0eriLmS')

        e.target.reset();
        setSend(true);
    };

    return (
        <section id='contact'>
            {/*<h5>Get In Touch</h5>*/}
            <h2 ref={main}>Contact Me</h2>
            {send && <h2>Success!</h2>}

            <div className='container contact__container'>
                <div className='contact__options'>

                    <article className='contact__option' ref={email}>
                        <MdEmail className='contact__option-icon' />
                        <h4>Naver Email</h4>
                        <h5>kisn3089@naver.com</h5>
                        <a href='https://mail.naver.com/write/popup?srvid=note&to=kisn3089@naver.com' target='_blank'>Send a message</a>{/*  mailto:kisn3089@naver.com?bcc=kisn3089@naver.com  */}
                    </article>

                    <article className='contact__option' ref={phone}>
                        <BsWhatsapp className='contact__option-icon' />
                        <h4>Phone</h4>
                        <h5>010-3363-3089</h5>
                    </article>
                </div>
                    {/*    END OF CONTACT OPTIONS*/}
                <form ref={form} onSubmit={sendEmail}>
                    <input type='text' name='name' placeholder='Your Full Name' required ref={inputName} />
                    <input type='email' name='email' placeholder='Your Email' required ref={inputEmail}/>
                    <textarea name='message' rows='7' placeholder='Your Message' required ref={inputMsg} />
                    <button type='submit' className='btn btn-primary' ref={btn}>Send Message</button>
                </form>
            </div>
        </section>
    );
}

export default Contact;