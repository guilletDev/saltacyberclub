import React from 'react'
import styles from '../style'

const NoticiasCard = ({img, tittle}) => {
  return (
    <div className={`${styles.boxWidth} rounded-xl my-2 mb-4`}>
        <img src={img} alt={tittle} />
        
    </div>
  )
}

export default NoticiasCard