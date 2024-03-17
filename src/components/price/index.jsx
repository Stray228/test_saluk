import React from 'react'
import { heart, item1, item2, item3 } from '../../assets'
import { Swiper, SwiperSlide } from 'swiper/react';

import { Pagination, Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';

import style from './price.module.scss'


const sliderItems = [
  {
    img: item1,
    title: 'Термобілизна для бодібілдерів',
    navText: 'Для чоловіків',
    text: '2 кольори',
    price: 4000
  },
  {
    img: item2,
    title: 'Майка для бодібілдерів',
    navText: 'Для жінок',
    text: '6 кольорів',
    price: 1100
  },
  {
    img: item3,
    title: 'Ланцюжок для бодібілдерів',
    navText: 'Аксесуари',
    text: '30 кг.',
    price: 2000
  },
  {
    img: item1,
    title: 'Термобілизна для бодібілдерів',
    navText: 'Для чоловіків',
    text: '2 кольори',
    price: 4000
  },
  {
    img: item2,
    title: 'Майка для бодібілдерів',
    navText: 'Для жінок',
    text: '6 кольорів',
    price: 1100
  },
]

const Price = () => {
  const [total, setTotal] = React.useState(sliderItems.length);
  const [active, setActive] = React.useState(0);

  const handleSwiper = (swiper) => {
    setActive(swiper.activeIndex);
  };

  const addZero = (num) => {
    return (num > 9) ? num : '0' + num;
  };
  console.log(addZero(active + 1));

  return (
    <div className='price'>
      <h4>Найгарячіші товари</h4>
      <Swiper
        grabCursor={true}
        navigation={
          {
            nextEl: ".image-swiper-button-next",
            prevEl: ".image-swiper-button-prev"
          }
        }
        pagination={{
          type: 'fraction',
        }}
        modules={[Pagination, Navigation]}
        className={style.mySwiper}
        slidesPerView={3}
        spaceBetween={30}
        onSlideChange={handleSwiper}
        onInit={(swiper) => setTotal(swiper.slides.length)}
      >
        {sliderItems.map((item, index) => (
          <SwiperSlide key={index}>
            <img className={style.cardImg} src={item.img} alt="card" />
            <img className={style.cardHeart} src={heart} alt="heart" />
            <div className={style.title}>{item.title}</div>
            <div className={style.navText}>{item.navText}</div>
            <div className={style.text}>{item.text}</div>
            <div className={style.priceItem}>{item.price} грн.</div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="swiper-button image-swiper-button-next"></div>
      <div className="swiper-button image-swiper-button-prev"></div>
      <div class="jail-app-left-side-fractions">
        <span>{addZero(active + 1)}</span>
        /
        <span>0{total - 2}</span>
      </div>
    </div>
  )
}

export default Price