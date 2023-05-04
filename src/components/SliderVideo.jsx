import React, { useState } from 'react';
import Slider from 'react-slick';
import ReactPlayer from 'react-player';
import { vid } from "../constants";

const SliderVideo = ({video, text}) => {
  const [settings, setSettings] = useState({
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    centerMode: false,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
    ],
  });


  return (
    <>
    
    <div>
      
      <Slider className='z-30 w-full h-[500px] sm:h-[100%] sm:w-[100%]' {...settings}>
        {vid.map((vi) => (
          <div key={vi.id}>
            <ReactPlayer url={vi.video} controls={false} width="100%" height="100%"  style={{ objectFit: "cover" }} autoPlay muted loop />
            <div className="flex justify-center items-center z-50 ">
               <div className="sm:h-[115px] h-[80px] sm:w-[900px] w-[200px] flex justify-center flex-col text-center absolute sm:mb-[1000px] mb-[960px] z-50 ">
                 <p className="font-Roboto sm:text-xl text-xs text-white z-50">{vi.text}</p>
               </div>
            </div>
            
            
          </div>
        ))}
        
      </Slider>
    </div>
   
    </>
    
  );
};

export default SliderVideo;