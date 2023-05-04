import React from 'react'


const NavbarLinks = ({title}) => {
  return (
    <div className=''>
        <ul className="flex justify-center ">
                    <li className="flex justify-center sm:mx-2 text-white">
                        <a href="" className='font-Roboto'>{title}</a>
                    </li>
        </ul>
    </div>
  )
}

export default NavbarLinks