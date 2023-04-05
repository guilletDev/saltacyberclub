import React from 'react'
import styles from '../style'
import { sponsor } from '../constants'
import SponsorCards from './SponsorCards'

const Sponsors = () => {
  return (
    <div className={` ${styles.flexCenter} flex-col relative sm:mt-8`}>
        <h1 className={`${styles.heading2} sm:mb-5 text-xl`}>SPONSORS</h1>
        <div className='py-8 mb-6 pb-4  grid md:grid-cols-2 md:grid-rows-3 md:gap-x-6 md:mt-2 le:grid-cols-3 le:grid-rows-1 le:gap-x-8 '>
            {sponsor.map((spon)=> <SponsorCards key={spon.id} {...spon} /> )}
        </div>
    </div>
  )
}

export default Sponsors