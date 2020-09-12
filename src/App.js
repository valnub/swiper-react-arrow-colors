import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation } from 'swiper';
import './styles.css';
import 'swiper/swiper-bundle.css';

SwiperCore.use([Navigation]);

export default () => {
  return (
    <>
      <h1>Demo - Customize React Swiper Next/Prev Arrows</h1>
      <h2>1. Replacing color</h2>
      <code className="code">
        {`
          .swiper-button-next { color: red; }
        `}
      </code>
      <Swiper
        id="swiper-color"
        width="500"
        navigation
        spaceBetween={5}
        slidesPerView={1}
      >
        {Array.from(Array(5)).map((el, i) => {
          return (
            <SwiperSlide key={`slide-${i}`} style={{ listStyle: 'none' }}>
              <img
                className="slide"
                src={`https://picsum.photos/id/${i + 1}/500/300`}
                alt={`Slide ${i}`}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>

      <h2>2. Swapping image</h2>
      <pre className="code">
        {`.swiper-button-next {
  background-image: url(./next.svg);
  background-repeat: no-repeat;
  background-size: 100% auto;
  background-position: center;
}

.swiper-button-next::after {
  display: none;
}`}
      </pre>
      <Swiper
        id="swiper-replace"
        width="500"
        navigation
        spaceBetween={5}
        slidesPerView={1}
      >
        {Array.from(Array(5)).map((el, i) => {
          return (
            <SwiperSlide key={`slide-${i}`} style={{ listStyle: 'none' }}>
              <img
                className="slide"
                src={`https://picsum.photos/id/${i + 1}/500/300`}
                alt={`Slide ${i}`}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
};
