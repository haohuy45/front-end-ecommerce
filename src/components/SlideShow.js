import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import product1 from '../assets/img/83dbcc20437f2a8cff69c6dd72382d3f_tn.jfif'
import product2 from '../assets/img/dbd9c7e6e1fcfad39ced7f3f3573d9f1.jfif'

// import required modules
import { Navigation, Pagination } from "swiper";

const SlideShow = () => {
  return (
    <div className='slideshow'>
        <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        navigation={true}

        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={product1} alt='as'/>
        </SwiperSlide>
        <SwiperSlide>
        <img src={product2} alt='as'/>

        </SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
      </Swiper>
    </div>
  )
}

export default SlideShow