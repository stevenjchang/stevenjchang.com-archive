import React from "react";
import ReactIdSwiperCustom from "react-id-swiper/lib/ReactIdSwiper.custom";
import { Swiper, Navigation, Pagination } from "swiper/js/swiper.esm";

import "../../node_modules/swiper/css/swiper.min.css";

const CustomBuildSwiper = ({ children }) => {
  const params = {
    // Provide Swiper class as props
    Swiper,
    // Add modules you need
    modules: [Navigation, Pagination],
    pagination: {
      el: ".swiper-pagination",
      type: "bullets",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    spaceBetween: 20,
    slidesPerView: 1,
    breakpoints: {
      769: {
        slidesPerView: 3,
        spaceBetween: 10,
      },
    },
  };

  return <ReactIdSwiperCustom {...params}>{children}</ReactIdSwiperCustom>;
};

export default CustomBuildSwiper;
