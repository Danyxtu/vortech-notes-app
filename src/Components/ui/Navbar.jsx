import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import DarkModeToggle from './Darkmode'
const Navbar = () => {
  return (
    <div className='
        h-[75px] w-full
        flex justify-between items-center
        fixed top-0
    '>
      <FontAwesomeIcon className='
          text-[35px] pl-[15px]
      '
        icon="fa-solid fa-bars" />
      <DarkModeToggle />
    </div>
  )
}

export default Navbar
