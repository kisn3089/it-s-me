import React, { useRef, useEffect } from 'react';
import './portfolio.css';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const data = [
  {
    id: 1,
    image: `${process.env.PUBLIC_URL}/img/gpt.png`,
    title: 'Chat GPT API를 활용해 만든 검색웹',
    github: 'https://github.com/kisn3089/Stemps_GPT',
    demo: 'https://stemps-gpt.vercel.app/',
  },
  {
    id: 2,
    image: `${process.env.PUBLIC_URL}/img/message.png`,
    title: '인사말 작성하여 마음을 전달하는 서비스 ( 모바일 전용 )',
    github: 'https://github.com/kisn3089/send_message',
    demo: 'https://send-message.vercel.app/create',
  },
  {
    id: 3,
    image: `${process.env.PUBLIC_URL}/img/marvel.png`,
    title:
      '마블 스냅 게임 카드 데이터를 만들어 가상의 덱을 꾸려볼 수 있는 서비스',
    github: 'https://github.com/kisn3089/marvel',
    demo: 'https://marvel-vert-nine.vercel.app/card/create',
  },
  {
    id: 4,
    image: `${process.env.PUBLIC_URL}/img/its.png`,
    title: 'IT.S ME Using Three.js React Portfolio',
    github: 'https://github.com/kisn3089/it-s-me',
    demo: 'https://portfolio-hist.vercel.app/',
  },
  {
    id: 5,
    image: `${process.env.PUBLIC_URL}/img/number.png`,
    title: 'JavaScipt를 사용한 숫자 맞추기 게임',
    github: 'https://github.com/kisn3089/number-game',
    demo: 'https://number-game-swart.vercel.app/',
  },
];

const Portfolio = () => {
  const sub = useRef(null);
  const main = useRef(null);
  const card = useRef([]);
  card.current = [];

  const refs = (el) => {
    if (el && !card.current.includes(el)) {
      card.current.push(el);
    }
  };

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
    gsap.from(card.current, {
      scrollTrigger: {
        trigger: card.current,
        start: 'top bottom',
        end: '+=150%',
        scrub: true,
      },
      opacity: 0,
      y: 50,
      duration: 0.5,
      delay: 0.3,
      ease: 'Expo.inOut',
      stagger: {
        amount: 0.9,
      },
    });
  });

  return (
    <section id="portfolio">
      <h5 ref={sub}>My Recent Project</h5>
      <h2 ref={main}>Portfolio</h2>

      <div className="container portfolio__container">
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <article key={id} className="portfolio__items" ref={refs}>
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a href={github} className="btn" target="_blank">
                  Github
                </a>
                <a href={demo} className="btn btn-primary" target="_blank">
                  View Project
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
