import React from 'react'
import styles from '../style'
import { evento } from '../constants'
import EventosCard from '../components/EventosCard'

const Eventos = () => {
  return (
    <div className={` ${styles.flexCenter} flex-col relative sm:mt-4`}>
      <br />
        <h1 className={`${styles.heading2} sm:mb-5 text-xl`}>EVENTOS REALIZADOS</h1>
        <div className='py-8 mb-6 pb-4  grid sm:grid-cols-3 sm:grid-rows-2 sm:gap-x-8 '>
            {evento.map((card) => <EventosCard Key={card.id} {...card} />)}
        </div>
      <br /><br />
      <hr />  
    </div>
  )
}

export default Eventos