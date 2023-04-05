import React from 'react'

const SponsorCards = ({img, url}) => {
  return (
    <>
        <div className='sm:w-[420px] sm:h-[300px] w-[370px] text-center bg-white rounded-xl my-2 mb-4'>
        <a target="_blank" href={url}><img src={img} alt="" className= 'sm:ml-8 hover:brightness-110 rounded-tl-xl rounded-xl mb-2 sm:hover:opacity-75 hover:opacity-75 transition duration-500 sm:h-[300px]' /></a>    
        
        </div>
       
    </>
   

  )
}

export default SponsorCards