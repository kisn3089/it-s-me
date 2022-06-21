import React, {useRef, useState} from 'react';
import './contact.css';
import {MdEmail} from 'react-icons/md';
import {RiMessageLine} from 'react-icons/ri';
import {BsWhatsapp} from 'react-icons/bs';
import emailjs from 'emailjs-com';

const Contact = () => {
    const [send, setSend] = useState(false);
    const form = useRef();

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
            <h2>Contact Me</h2>
            {send && <h2>Success!</h2>}

            <div className='container contact__container'>
                <div className='contact__options'>

                    <article className='contact__option'>
                        <MdEmail className='contact__option-icon' />
                        <h4>Naver Email</h4>
                        <h5>kisn3089@naver.com</h5>
                        <a href='https://mail.naver.com/write/popup?srvid=note&to=kisn3089@naver.com' target='_blank'>Send a message</a>
                    {/*  mailto:kisn3089@naver.com?bcc=kisn3089@naver.com  */}
                    </article>

                    {/*<article className='contact__option'>*/}
                    {/*    <RiMessageLine className='contact__option-icon' />*/}
                    {/*    <h4>Email</h4>*/}
                    {/*    <h5>kisn3089@naver.com</h5>*/}
                    {/*    <a href='mailto:kisn3089@naver.com?bcc=kisn3089@naver.com' target='_blank'>Send a message</a>*/}
                    {/*</article>*/}

                    <article className='contact__option'>
                        <BsWhatsapp className='contact__option-icon' />
                        <h4>Phone</h4>
                        <h5>010-3363-3089</h5>
                        {/*<a href='https://api.whatsapp.com/send?phone+01033633089' target='_blank'>Send a message</a>*/}
                    </article>
                </div>
                    {/*    END OF CONTACT OPTIONS*/}
                <form ref={form} onSubmit={sendEmail}>
                    <input type='text' name='name' placeholder='Your Full Name' required />
                    <input type='email' name='email' placeholder='Your Email' required />
                    <textarea name='message' rows='7' placeholder='Your Message' required />
                    <button type='submit' className='btn btn-primary'>Send Message</button>
                </form>
            </div>
        </section>
    );
}

export default Contact;