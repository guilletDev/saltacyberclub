import React from "react";
import styles from "../style";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { noticias } from "../constants";
import NoticiasCard from "./NoticiasCard";

const Noticias = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1500,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
              dots: true,

            }
          },
          {
            breakpoint: 1200,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            }
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            }
          }
        ]
      };
  return (
    <div >

      <div className="flex flex-col relative sm:mt-4">
      <h1 className={`${styles.heading2} sm:mb-5 text-xl`}>NOTICIAS</h1>
        <Slider
          {...settings}
          className={`${styles.boxWidth}`}
        >
          {noticias.map((notic) => (
            <NoticiasCard key={notic.id} {...notic} />
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Noticias;
