import React from 'react'
import styles from '../style'

const NoticiasCard = ({img, tittle}) => {
  return (
    <div className={`rounded-xl my-2 mb-4`}>
        <img src={img} alt={tittle} className={`${styles.boxWidth}`} />
        
    </div>
  )
}

export default NoticiasCard