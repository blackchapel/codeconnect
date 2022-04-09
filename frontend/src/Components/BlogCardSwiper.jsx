import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import BlogCard from "./BlogCard"
import 'swiper/css';
const CardSwiper = () => {
  let arr=[1,2,3,4,5,6,7,8,9,10]
  return (
    <>
      <Swiper
        spaceBetween={50}
        slidesPerView={4}
        onSwiper={(swiper) => console.log(swiper)}

      >
        {arr.map((element)=>(
          <SwiperSlide><BlogCard/></SwiperSlide>
        ))}

      </Swiper>
    </>
  )
}

export default CardSwiper