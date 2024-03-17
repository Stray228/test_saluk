import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

import { Intro } from '../../../assets';

import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import style from './IntroSlider.module.scss'

import { EffectFade, Autoplay, Pagination, Navigation } from 'swiper/modules';

const IntroSlider = () => {
  return (
    <Swiper
      effect={'fade'}
      grabCursor={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      loop={true}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[EffectFade, Autoplay, Pagination, Navigation]}
      className={style.mySwiper}
      slidesPerView={1}
    >
      <SwiperSlide>
        <img className={style.img} src={Intro} alt="intro" />
      </SwiperSlide>
      <SwiperSlide>
        <img className={style.img} src={Intro} alt="intro" />
      </SwiperSlide>
      <SwiperSlide>
        <img className={style.img} src={Intro} alt="intro" />
      </SwiperSlide>
    </Swiper>
  )
}

export default IntroSlider