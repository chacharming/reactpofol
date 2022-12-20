import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y, Autoplay } from 'swiper';

import 'swiper/css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


const Chachaswiper = () => {
    const swiperinfo = [{
        worktitle : '리액트광고웹앱',
        worktime : '4주',
        co : '단독작업',
        app : ['illust','photoshop','v-code'],
        cls : 'react'
    },{
        polink : 'http://ckwnal0723.cafe24.com/awesome/',
        worktitle : '2022 AWESOME MUSIC FESTIVAL 가을의 끝자락, 난지한강공원에 어썸뮤직페스티벌이 찾아옵니다.',
        worksub : '*라인업 발표 , 일정 , 안내사항 등의 기타 정보는 어썸뮤직페스티벌 공식 SNS를 통해서도 확인 가능합니다.',
        worktime : '1주',
        co : '단독작업',
        app : ['v-code'],
        cls : 'boot'
    },{
        worktitle : 'CMS 그누보드',
        worktime : '1주',
        co : '단독작업',
        app : ['illust','photoshop','v-code'],
        cls : 'sir'
    }];
    return(
        <Swiper className='pofolswiper'
            modules={[Navigation, Pagination, A11y, Autoplay]}
            spaceBetween={0}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            // autoplay={{
            //     delay: 5000,
            //     disableOnInteraction: false,
            //     }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
        >
        {
            swiperinfo.map((item, index) =>{
                return(
                    <SwiperSlide className={item.cls}><h2 className='pb-5'>{item.worktitle}</h2><p className='pt-5'>{item.worksub}</p></SwiperSlide>
                )
            }) 
        }
        </Swiper>
    )
}

export default Chachaswiper;