import React from 'react'
import styles from '../style'
import EventosCard from './EventosCard'

const Eventos = () => {
  return (
    <div>
        <h1 className={`${styles.heading2}`}>Eventos realizados</h1>
        <div className='py-8 mb-4 pb-4 grid sm:grid-cols-3 sm:grid-rows-2 sm:gap-6 grid grid-cols-1 grid-rows-6 gap-4'>
            <EventosCard />
            <EventosCard />
            <EventosCard />
            <EventosCard />
            <EventosCard />
            <EventosCard />
        </div>
    </div>
  )
}

export default Eventos