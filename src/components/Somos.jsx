import React from 'react'
import styles from '../style'
import { somos } from '../constants'
import SomosCard from './SomosCard'


const Somos = () => {
  return (
    <div className={` ${styles.flexCenter} flex-col relative sm:mt-4 sm:mb-6`}>
      <br />
        <h1 className={`${styles.heading2} sm:mb-5 text-xl`}>NOSOTROS</h1>
        <div className='py-8 mb-6 pb-4  grid md:grid-cols-2 md:grid-rows-1 md:gap-x-6 le:grid-cols-3 le:grid-rows-1 le:gap-x-8 '>
            {somos.map((som) => <SomosCard Key={som.id} {...som} />)}
        </div>
    </div>
  )
}

export default Somos