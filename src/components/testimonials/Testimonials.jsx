import React from 'react';
import './testimonials.css';
import AVA1 from '../../assets/avatar1.jpg';
import AVA2 from '../../assets/avatar2.jpg';
import AVA3 from '../../assets/avatar3.jpg';
import AVA4 from '../../assets/avatar4.jpg';

// import Swiper core and required modules
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const data = [
    {
        avatar: AVA1,
        name: 'Ernest Achiever',
        review: 'Loremqwewjiqejijwqejeq qjiqjqdqdid jdqiwjqidqwdj qdijqidjdq',
    },
    {
        avatar: AVA2,
        name: 'Ernest Achiever',
        review: 'Loremqwewjiqejijwqejeq qjiqjqdqdid jdqiwjqidqwdj qdijqidjdq',
    },
    {
        avatar: AVA3,
        name: 'Ernest Achiever',
        review: 'Loremqwewjiqejijwqejeq qjiqjqdqdid jdqiwjqidqwdj qdijqidjdq',
    },
    {
        avatar: AVA4,
        name: 'Ernest Achiever',
        review: 'Loremqwewjiqejijwqejeq qjiqjqdqdid jdqiwjqidqwdj qdijqidjdq',
    },
]

const Testimonials = () => {
    return (
        <section id='testimonials'>
            <h5>Review from clients</h5>
            <h2>Testimonials</h2>

            <Swiper className='container testimonials__container'
                // install Swiper modules
                    modules={[Pagination]}
                    spaceBetween={40}
                    slidesPerView={1}
                    pagination={{ clickable: true }}>
                {data.map(({name, avatar, review}, index) => {
                    return (
                        <SwiperSlide key={index} className='testimonial'>
                            <div className='client__avatar'>
                                <img src={avatar} />
                            </div>
                            <h5 className='client__name'>{name}</h5>
                            <small className='client__review'>{review}</small>
                        </SwiperSlide>
                    )
                })}
            </Swiper>
        </section>
    );
}

export default Testimonials;