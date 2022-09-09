import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCube, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/pagination";
import imgs from '../access/Cardimg1.png'

export default function Cards() {
  return (
    <div className='w-full px-80'>
        <Swiper
        effect={"cube"}
        grabCursor={true}
        cubeEffect={{
          shadow: true,
          slideShadows: true,
          shadowOffset: 40,
          shadowScale: 0.94,
        }}
        modules={[EffectCube, Pagination]}
        className="mySwiper w-60"
      >
        <SwiperSlide className='h-60 w-60'>
          <img src={imgs} alt="Not found" className='h-60 '/>
        </SwiperSlide>
        <SwiperSlide className='h-60 w-60'>
          <img src={imgs} alt="Not found" className='h-60'/>
        </SwiperSlide>
        <SwiperSlide className='h-60 w-60'>
          <img src={imgs} alt="Not found" className='h-60'/>
        </SwiperSlide>
        <SwiperSlide className='h-60 w-60'>
          <img src={imgs} alt="Not found" className='h-60'/>
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

/* 

import "./styles.css";

// import required modules
import { EffectCube, Pagination } from "swiper";

export default function App() {
  return (
    <>
      <Swiper
        effect={"cube"}
        grabCursor={true}
        cubeEffect={{
          shadow: true,
          slideShadows: true,
          shadowOffset: 20,
          shadowScale: 0.94,
        }}
        pagination={true}
        modules={[EffectCube, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
 */