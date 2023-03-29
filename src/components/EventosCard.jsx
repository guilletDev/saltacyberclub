import React from 'react'
import styles from '../style'

const EventosCard = ({img, title, content, boton  }) => {
  return (
    <div className={` w-[420px] text-center bg-white rounded-xl`}>

        <img src={img} alt="" className= ' hover:brightness-110 rounded-tl-xl rounded-tr-xl mb-2 hover:opacity-75 transition duration-500' />
        <h3 className= ' py-3 text-xl text-gray-700  font-Roboto'>{title}</h3>
        <p className= 'text-gray-600 text-base font-Roboto w-[350px] ml-6'>{content}</p><br />
        <button className= 'text-white text-xs bg-gray-500  py-3 px-6 rounded shadow-md hover:shadow-lg mb-5 hover:drop-shadow-2xl'>{boton}</button>
        

    </div>
  )
}

export default EventosCard