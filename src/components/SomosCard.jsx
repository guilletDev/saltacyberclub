import React from 'react'
import styles from '../style'

const SomosCard = ({img, title, text}) => {
  return (
    <div className={` sm:w-[420px] w-[370px] bg-white rounded-xl my-2 mb-4 `}>

        <img src={img} alt="" className= ' hover:brightness-110 rounded-tl-xl rounded-tr-xl mb-2 sm:hover:opacity-75 hover:opacity-75 transition duration-500' />
        <div className='sm:px-8 px-6 flex flex-col relative'>
           <h3 className= 'font-medium py-3 text-3xl text-gray-900  font-Roboto'>{title}</h3>
           <hr className='border-4 border-solid border-gray-300 mb-4' />
           <p className= 'text-left text-gray-600 sm:text-base font-Roboto sm:w-[350px] w-[320px]'>{text}</p><br />
        </div>
        
        
        

    </div>
  )
}

export default SomosCard