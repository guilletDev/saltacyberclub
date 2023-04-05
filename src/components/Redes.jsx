import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faTwitter, faDiscord, faFacebook } from '@fortawesome/free-brands-svg-icons';


const Redes = () => {
  return (
    <div className='py-8 text-center mb-6'>
        <h3 className='text-white text-xl'>Sigue nuestras redes sociales</h3>
        <div className=' flex justify-center mt-8 gap-x-9  '>
            <a target="_blank" href="https://www.instagram.com/saltacybersecurityclub/"><FontAwesomeIcon className='w-8 h-6 hover:opacity-75 transition duration-300' icon={faInstagram} style={{ color: "white" }}/></a>
            <a target="_blank" href="https://twitter.com/saltacyberclub"><FontAwesomeIcon className='w-8 h-6 hover:opacity-75 transition duration-300' icon={faTwitter} style={{ color: "white" }} /></a>
            <a target="_blank" href="https://discord.com/invite/CJGdwAwe"><FontAwesomeIcon className='w-8 h-6 hover:opacity-75 transition duration-300' icon={faDiscord} style={{ color: "white" }}/></a>
            <a target="_blank" href="https://www.facebook.com/Salta-CyberSecurity-Club-105216319130079"><FontAwesomeIcon className='w-8 h-6 hover:opacity-75 transition duration-300' icon={faFacebook} style={{ color: "white" }} /></a>
        
        
        
        
        </div>
    </div>
  )
}

export default Redes

