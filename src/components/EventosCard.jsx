import React from 'react'

const EventosCard = ({img, title, content, boton  }) => {
  return (
    <div className={` sm:w-[420px] w-[370px] text-center bg-white rounded-xl my-2 mb-4 `}>

        <img src={img} alt="" className= ' hover:brightness-110 rounded-tl-xl rounded-tr-xl mb-2 sm:hover:opacity-75 hover:opacity-75 transition duration-500' />
        <h3 className= ' py-3 text-xl text-gray-700  font-Roboto'>{title}</h3>
        <p className= 'text-gray-600 sm:text-base font-Roboto sm:w-[350px] w-[320px] text-center sm:ml-6 ml-6'>{content}</p><br />
        <button className= 'text-white text-xs bg-gray-500  py-3 px-6 rounded shadow-md hover:shadow-lg mb-5 hover:drop-shadow-2xl'>{boton}</button>
        

    </div>
  )
}

export default EventosCard