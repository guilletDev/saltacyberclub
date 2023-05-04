import React from 'react'
import styles from '../style'

const NoticiasCard = ({img, title, text}) => {
  return (
    <div className={`rounded-xl my-2 mb-4`}>
        <img src={img} alt='imagen notice' className={`${styles.boxWidth}`} />
        <div className="flex justify-center items-center ">
          <div className="sm:h-[115px] h-[80px] sm:w-[900px] w-[200px] bg-white flex justify-center flex-col text-center absolute sm:mb-40 mb-24">
            <h5 className="font-semibold font-Roboto sm:text-xl text-xs">{title}</h5>
            <p className="font-Roboto mt-2 sm:text-lg text-xs">{text}</p>
          </div>
        </div>
        
    </div>
  )
}

export default NoticiasCard