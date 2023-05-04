import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faTwitter, faDiscord, faFacebook } from '@fortawesome/free-brands-svg-icons';


const NavIcons = () => {
  return (
    
    <div className='py-2  mt-3 '>
        <div className=' flex justify-end gap-x-4  '>
            <a target="_blank" href="https://www.instagram.com/saltacybersecurityclub/"><FontAwesomeIcon className='w-4 h-4 hover:opacity-75 transition duration-300' icon={faInstagram} style={{ color: "white" }}/></a>
            <a target="_blank" href="https://www.facebook.com/Salta-CyberSecurity-Club-105216319130079"><FontAwesomeIcon className='w-4 h-4 hover:opacity-75 transition duration-300' icon={faFacebook} style={{ color: "white" }} /></a>
            <a target="_blank" href="https://twitter.com/saltacyberclub"><FontAwesomeIcon className='w-4 h-4 hover:opacity-75 transition duration-300' icon={faTwitter} style={{ color: "white" }} /></a>
            <a target="_blank" href="https://discord.com/invite/CJGdwAwe"><FontAwesomeIcon className='w-4 h-4 hover:opacity-75 transition duration-300' icon={faDiscord} style={{ color: "white" }}/></a>
            
        </div>


    </div>

    
  )
}

export default NavIcons