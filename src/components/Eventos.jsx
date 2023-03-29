import React from 'react'
import styles from '../style'
import { evento } from '../constants'
import EventosCard from '../components/EventosCard'

const Eventos = () => {
  return (
    <div>
      <hr /><br /><br />
        <h1 className={`${styles.heading2} mb-5`}>EVENTOS REALIZADOS</h1>
        <div className='py-8 mb-4 pb-4 grid sm:grid-cols-3 sm:grid-rows-2 sm:gap-6 grid grid-cols-1 grid-rows-6 gap-4'>
            {evento.map((card) => <EventosCard Key={card.id} {...card} />)}
        </div>
      <br /><br />
      <hr />  
    </div>
  )
}

export default Eventos