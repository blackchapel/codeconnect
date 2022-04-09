import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import BlogCard from "./BlogCard"
import 'swiper/css';
const CardSwiper = () => {
  return (
    <>
      <Swiper
        spaceBetween={50}
        slidesPerView={4}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide><BlogCard/></SwiperSlide>
        <SwiperSlide><BlogCard/></SwiperSlide>
        <SwiperSlide><BlogCard/></SwiperSlide>
        <SwiperSlide><BlogCard/></SwiperSlide>
        <SwiperSlide><BlogCard/></SwiperSlide>

      </Swiper>
    </>
  )
}

export default CardSwiper