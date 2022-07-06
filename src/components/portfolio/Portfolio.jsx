import React, {useRef, useEffect} from 'react';
import './portfolio.css';
import IMG1 from '../../assets/portfolio2.jpg';
import food from '../../assets/31.png';
import add from '../../assets/add.png';
import number from '../../assets/number.png';
import homes from '../../assets/homs.png';
import daily from '../../assets/daily.png';
import kairos from '../../assets/kairos.png';
import gsap from 'gsap'
import {ScrollTrigger} from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);


const data = [
    {
        id: 1,
        image: IMG1,
        title: 'Crypto Currency Dashboard & Financial Visualization',
        github: 'https://github.com/kisn3089',
        demo: 'https://github.com/kisn3089'
    },
    {
        id: 2,
        image: food,
        title: 'React, firebase를 활용한 음식 주문 서비스',
        github: 'https://github.com/kisn3089/react-food',
        demo: 'https://react-food-nu.vercel.app/'
    },
    {
        id: 3,
        image: add,
        title: 'React를 활용한 간단한 가계부 서비스',
        github: 'https://github.com/kisn3089/udemy-react',
        demo: 'https://udemy-react-jet.vercel.app/'
    },
    {
        id: 4,
        image: number,
        title: 'JavaScipt를 사용한 숫자 맞추기 게임',
        github: 'https://github.com/kisn3089/number-game',
        demo: 'https://number-game-swart.vercel.app/'
    },
    {
        id: 5,
        image: daily,
        title: 'Daily Cooder 커뮤니티 기반 의류 추천 서비스 프로젝트',
        github: 'https://github.com/silbioa480/Daily-Coorder',
        demo: 'https://daily-coorder.vercel.app/'
    },
    {
        id: 6,
        image: homes,
        title: 'home + hospital 원스톱 비대면 의료 서비스 프로젝트',
        github: 'https://github.com/silbioa480/homespital',
        demo: 'https://drive.google.com/file/d/10jBlqS6Rj1jkDzrYCcn0xy8inyVuWkaq/view?usp=sharing'
    },
    {
        id: 7,
        image: kairos,
        title: 'Online-Personal-Exhibition 온라인 개인 사진전',
        github: 'https://github.com/kisn3089/Online-Personal-Photo-Exhibition',
        demo: 'https://drive.google.com/file/d/19944Pjh-zbgcbg02VY2hw564JOBSRyxp/view?usp=sharing'
    },
]

const Portfolio = () => {
    const sub = useRef(null);
    const main = useRef(null);
    const card = useRef([]);
    card.current = [];

    const refs = (el) => {
        if(el && !card.current.includes(el)) {
         card.current.push(el);
        }
    }

    useEffect(() => {
        gsap.from([sub.current, main.current], {
            scrollTrigger: {
                trigger: sub.current,
                start: "top bottom",
                end: "+=40%",
                scrub: true
            },
            opacity: 0,
            y: 50,
            duration: .5,
            delay: .3,
            ease: "Expo.inOut",
            stagger: {
                amount: .3
            }
        })
        gsap.from(card.current, {
            scrollTrigger: {
                trigger: card.current,
                start: "top bottom",
                end: "+=150%",
                scrub: true
            },
            opacity: 0,
            y: 50,
            duration: .5,
            delay: .3,
            ease: "Expo.inOut",
            stagger: {
                amount: .9
            }
        })
    })

    return (
        <section id='portfolio'>
            <h5 ref={sub}>My Recent Project</h5>
            <h2 ref={main}>Portfolio</h2>

            <div className='container portfolio__container'>
                {data.map(({id, image, title, github, demo}) => {
                    return (
                        <article key={id} className='portfolio__items' ref={refs}>
                            <div className='portfolio__item-image'>
                                <img src={image} alt={title} />
                            </div>
                            <h3>{title}</h3>
                            <div className='portfolio__item-cta'>
                                <a href={github} className='btn' target='_blank'>Github</a>
                                <a href={demo} className='btn btn-primary' target='_blank'>Live PDF</a>
                            </div>
                        </article>
                    )
                })}
            </div>


        </section>
    );
}

export default Portfolio;