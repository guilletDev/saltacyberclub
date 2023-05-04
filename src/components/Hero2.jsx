import React from 'react'
import SliderVideo from './SliderVideo'
import styles from '../style';
import { scc } from "../assets/images";
import { vid } from "../constants";

const Hero2 = () => {
  return (
      <div className={`${styles.boxWidth} sm:pb-14 flex justify-center flex-col mr-1`}>
        <div className="absolute z-40 sm:ml-[352px] h-[100%] flex justify-center items-center flex-col  sm:pt-1 sm:mt-44 ml-9 lg:mb-32 lg:mr-72">
           <h1 className="text-white le:text-6xl text-2xl font-Roboto lg:text-5xl md:text-xl">
              SALTA CYBERSEGURITY CLUB
           </h1>
  
           <div className=" sm:pt-28 pt-14 mb-8 sm:mb-0 grid grid-cols-2 grid-rows-2 sm:grid-cols-4 sm:grid-rows-1  ">
             <button className={`${styles.botonHero}`}>EVENTOS</button>
             <button className={`${styles.botonHero}`}>ACADEMIA</button>
             <button className={`${styles.botonHero}`}>CURSOS</button>
             <button className={`${styles.botonHero}`}>CONTACTO</button>
           </div>
           <img src={scc} alt="" className="sm:w-[250px] sm:h-[300px] w-[200px] h-[250] sm:mt-10 lg:h-[250px] lg:w-[200px]"/>
        </div>

        <div>
          <SliderVideo />
        </div>
      

      </div>
  )
};

export default Hero2