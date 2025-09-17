import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import DarkModeToggle from './Darkmode'
const Navbar = ({setDarkMode, darkMode}) => {
  return (
    <div className='
        h-[75px] w-full
        flex justify-between items-center
        fixed top-0 left-0
        bg-primary
        shadow-md
    '>
      <FontAwesomeIcon className='
          text-[35px] pl-[15px]
      '
        icon="fa-solid fa-bars" />
        <h1>Notes App - VorTech</h1>
      <DarkModeToggle setDarkMode={setDarkMode} darkMode={darkMode} />
    </div>
  )
}

export default Navbar
