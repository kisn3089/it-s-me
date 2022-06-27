import React from 'react';
import './portfolio.css';
import IMG1 from '../../assets/portfolio2.jpg';
import food from '../../assets/31.png';
import add from '../../assets/add.png';
import number from '../../assets/number.png';
import homes from '../../assets/homs.png';
import daily from '../../assets/daily.png';
import kairos from '../../assets/kairos.png';


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
        demo: 'https://github.com/kisn3089'
    },


]

const Portfolio = () => {
    return (
        <section id='portfolio'>
            <h5>My Recent Project</h5>
            <h2>Portfolio</h2>

            <div className='container portfolio__container'>
                {data.map(({id, image, title, github, demo}) => {
                    return (
                        <article key={id} className='portfolio__items'>
                            <div className='portfolio__item-image'>
                                <img src={image} alt={title} />
                            </div>
                            <h3>{title}</h3>
                            <div className='portfolio__item-cta'>
                                <a href={github} className='btn' target='_blank'>Github</a>
                                <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
                            </div>
                        </article>
                    )

                })}
                <article className='portfolio__items'>
                    <div className='portfolio__item-image'>
                        <img src={homes} alt='' />
                    </div>
                    <h3>home + hospital 원스톱 비대면 의료 서비스 프로젝트</h3>
                    <div className='portfolio__item-cta'>
                        <a href='https://github.com/silbioa480/homespital' className='btn' target='_blank'>Github</a>
                        <a href='file:///C:/Users/InSung/Desktop/%EC%9D%B4%EB%A0%A5%EC%84%9C%20%EB%B0%8F%20%ED%8F%AC%ED%8F%B4/Front%20end/online-personal.pdf' className='btn btn-primary' target='_blank'>Live Demo</a>
                    </div>
                </article>

                <article className='portfolio__items'>
                    <div className='portfolio__item-image'>
                        <img src={kairos} alt='' />
                    </div>
                    <h3>Online-Personal-Exhibition 온라인 개인 사진전</h3>
                    <div className='portfolio__item-cta'>
                        <a href='https://github.com/kisn3089/Online-Personal-Photo-Exhibition' className='btn' target='_blank'>Github</a>
                        <a href='file:///C:/Users/InSung/Desktop/%EC%9D%B4%EB%A0%A5%EC%84%9C%20%EB%B0%8F%20%ED%8F%AC%ED%8F%B4/Front%20end/online-personal.pdf' className='btn btn-primary' target='_blank'>Live Demo</a>
                    </div>
                </article>
            </div>


        </section>
    );
}

export default Portfolio;