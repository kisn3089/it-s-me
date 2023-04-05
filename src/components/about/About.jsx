import React, { useRef, useEffect } from 'react';
import './about.css';
import { FaAward } from 'react-icons/fa';
import { BiBookmarkMinus } from 'react-icons/bi';
import { VscFolderLibrary } from 'react-icons/vsc';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const sub = useRef(null);
  const main = useRef(null);
  const img = useRef(null);
  const card1 = useRef(null);
  const card2 = useRef(null);
  const card3 = useRef(null);
  const text = useRef(null);
  const btn = useRef(null);

  useEffect(() => {
    gsap.from([sub.current, main.current], {
      scrollTrigger: {
        trigger: sub.current,
        start: 'top bottom',
        end: '+=40%',
        scrub: true,
      },
      opacity: 0,
      y: 50,
      duration: 0.5,
      delay: 0.3,
      ease: 'Expo.inOut',
      stagger: {
        amount: 0.3,
      },
    });
    gsap.from(img.current, {
      scrollTrigger: {
        trigger: img.current,
        start: '-=420',
        end: '+=270',
        scrub: true,
      },
      opacity: 0,
      x: -100,
      y: -300,
      duration: 0.5,
      delay: 0.3,
      ease: 'Expo.inOut',
    });
    gsap.from([card1.current, card2.current, card3.current], {
      scrollTrigger: {
        trigger: card1.current,
        start: 'top bottom',
        end: '+=40%',
        scrub: true,
      },
      opacity: 0,
      y: 50,
      duration: 0.5,
      delay: 0.3,
      ease: 'Expo.inOut',
      stagger: {
        amount: 0.3,
      },
    });
    gsap.from(text.current, {
      scrollTrigger: {
        trigger: text.current,
        start: 'top bottom',
        end: '+=40%',
        scrub: true,
      },
      opacity: 0,
      y: 50,
      duration: 0.5,
      delay: 0.3,
      ease: 'Expo.inOut',
    });
    gsap.from(btn.current, {
      scrollTrigger: {
        trigger: btn.current,
        start: 'top bottom',
        end: '+=10%',
        scrub: true,
      },
      opacity: 0,
      x: 70,
      duration: 0.2,
      ease: 'linear',
    });
  }, []);

  return (
    <section id="about">
      <h5 ref={sub}>Get To Know</h5>
      <h2 ref={main}>About Me</h2>

      <div className="container about__container">
        <div className="about__me" ref={img}>
          <div className="about__me-image">
            <img
              src={`${process.env.PUBLIC_URL}/img/me2.jpg`}
              alt="About Image"
            />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards" ref={card1}>
            <article className="about__card">
              <BiBookmarkMinus className="about__icon" />
              <h5>Experience</h5>
              <small>2022.08 - 스타트업 재직중</small>
            </article>

            <article className="about__card" ref={card2}>
              <FaAward className="about__icon" />
              <h5>Award</h5>
              <small>멀티캠퍼스 프로젝트 최우수상</small>
            </article>

            <article className="about__card" ref={card3}>
              <VscFolderLibrary className="about__icon" />
              <h5>Project</h5>
              <small>5개 이상의 완성된 프로젝트</small>
            </article>
          </div>

          <p ref={text}>
            기술로 일상생활의 불편함을 해결합니다. 사용자에게 입체적이고
            인터렉티브한 경험을 제공하기 위해 최적화와 렌더링, 로딩을 집중적으로
            보완하고 타입스크립트의 타입가드를 통해 안전한 개발 환경을
            만들어나갑니다.
          </p>

          <a href="#contact" className="btn btn-primary" ref={btn}>
            Contact
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
