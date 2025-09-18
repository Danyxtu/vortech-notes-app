import React from 'react'
import DarkModeToggle from './Darkmode'
import appLogo from '../../assets/app-logo.png'
const Navbar = ({setDarkMode, darkMode}) => {
  return (
    <div className={`
        h-[75px] w-full
        flex justify-between items-center
        fixed top-0 left-0
        ${darkMode ? ' bg-secondary' : 'bg-primary'}
        shadow-md
    `}>
      <h1 className='
        font-bold text-2xl
        flex items-center
        pl-[20px]
      '
      >
        <img height={50} width={50} src={appLogo}/>
        Notes App - VorTech
      </h1>
      <DarkModeToggle setDarkMode={setDarkMode} darkMode={darkMode} />
    </div>
  )
}

export default Navbar
