import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";
import css from '../access/css.png'
import express from '../access/express.png'
import html from '../access/html.png'
import js from '../access/js.png'
import node from '../access/node.png'
import react from '../access/react.png'
import redux from '../access/redux.png'
import sequelize from '../access/sequelize.png'

// import required modules
let images = [css, express, html, js, node, react, redux, sequelize]

export default function App() {
  return (
    <div className='w-full px-80'>
      <Swiper
        pagination={{
          type: "progressbar",
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="w-full mySwiper"
      >
        {
                      images?.length > 0 && images.map((e, i) => (
                        <SwiperSlide className="w-28">
                          <img src={e} alt='Not found' className="mx-auto w-28"/>
                        </SwiperSlide>
                      ))
                    } 
      </Swiper>
    </div>
  );
}
/* 
<Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
      </Swiper> */
