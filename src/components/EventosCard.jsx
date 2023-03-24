import React from 'react'
import styles from '../style'
import { ctf1 } from '../assets/images'

const EventosCard = () => {
  return (
    <div className={` w-[400px] text-center bg-white rounded-2xl`}>

        <img src={ctf1} alt="" className= ' hover:brightness-110' />
        <h3 className= ' py-3 text-xl text-gray-700 font-bold font-Roboto'>CTF 1</h3>
        <p className= 'text-gray-600 text-base font-Roboto'>CTF nivel principiante. Uso de herramientas básicas de linux para encontrar las flags</p><br />
        <button className= 'text-white bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded shadow-md hover:shadow-lg mb-5'>ver mas</button>
        

    </div>
  )
}

export default EventosCard