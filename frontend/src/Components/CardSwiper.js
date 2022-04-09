import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import RedditCard from "./RedditCard"
import 'swiper/css';
const CardSwiper = () => {
  return (
    <>
      <Swiper
        spaceBetween={100}
        slidesPerView={3}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide><RedditCard/></SwiperSlide>
        <SwiperSlide><RedditCard/></SwiperSlide>
        <SwiperSlide><RedditCard/></SwiperSlide>
        <SwiperSlide><RedditCard/></SwiperSlide>
      </Swiper>
    </>
  )
}

export default CardSwiper