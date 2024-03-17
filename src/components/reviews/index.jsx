import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

import { Pagination, Navigation } from 'swiper/modules';
import { itemLogo, star, starFill } from '../../assets';

import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';

import style from './reviews.module.scss'

const sliderItem = [
  {
    img: itemLogo,
    star: 4,
    name: 'Жора Ремінгтон',
    title: 'Дуже задоволений якістю обслуговування і самою продукцією. Купували термобілизну у подарунок, друзі...',
  },
  {
    img: itemLogo,
    star: 4,
    name: 'Жора Ремінгтон',
    title: 'Дуже задоволений якістю обслуговування і самою продукцією. Купували термобілизну у подарунок, друзі...',
  },
  {
    img: itemLogo,
    star: 4,
    name: 'Жора Ремінгтон',
    title: 'Дуже задоволений якістю обслуговування і самою продукцією. Купували термобілизну у подарунок, друзі...',
  },
  {
    img: itemLogo,
    star: 4,
    name: 'Жора Ремінгтон',
    title: 'Дуже задоволений якістю обслуговування і самою продукцією. Купували термобілизну у подарунок, друзі...',
  },
  {
    img: itemLogo,
    star: 4,
    name: 'Жора Ремінгтон',
    title: 'Дуже задоволений якістю обслуговування і самою продукцією. Купували термобілизну у подарунок, друзі...',
  },
  {
    img: itemLogo,
    star: 4,
    name: 'Жора Ремінгтон',
    title: 'Дуже задоволений якістю обслуговування і самою продукцією. Купували термобілизну у подарунок, друзі...',
  },
]

const Reviews = () => {
  const [totalSlides, setTotalSlides] = React.useState(sliderItem.length);
  const [activeSlide, setActiveSlide] = React.useState(0);

  const renderStars = (count) => {
    const filledStars = Array.from({ length: count }, (_, index) => <img className={style.img} key={index} src={starFill} alt="filled star" />);
    const emptyStars = Array.from({ length: 5 - count }, (_, index) => <img key={index} src={star} alt="empty star" />);
    return [...filledStars, ...emptyStars];
  };

  const handleSwiperChange = (swiper) => {
    setActiveSlide(swiper.activeIndex);
  };

  return (
    <div className='reviews'>
      <h4>Відгуки наших клієнтів</h4>
      <Swiper
        grabCursor={true}
        navigation={{
          nextEl: ".image-swiper-next",
          prevEl: ".image-swiper-prev"
        }}
        pagination={{
          type: 'fraction',
        }}
        modules={[Pagination, Navigation]}
        className={style.mySwiperReviews}
        slidesPerView={4}
        spaceBetween={30}
        onSlideChange={handleSwiperChange}
        onInit={(swiper) => setTotalSlides(swiper.slides.length)}
      >
        {sliderItem.map((item, index) => (
          <SwiperSlide key={index} className={style.items}>
            <div className={style.card}>
              <img className={style.cardImg} src={item.img} alt="card" />
              <div className={style.info}>
                <div className={style.star}>{renderStars(item.star)}</div>
                <div className={style.name}>{item.name}</div>
              </div>
            </div>
            <div className={style.title}>{item.title}</div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="swiper-button image-swiper-next">
      </div>
      <div className="swiper-button image-swiper-prev">
      </div>
      <div className="jail-app-left-side">
        <span className="swiper-pagination-current">0{activeSlide + 1}</span> / <span className="swiper-pagination-total">0{totalSlides - 3}</span>
      </div>
    </div>
  )
}

export default Reviews