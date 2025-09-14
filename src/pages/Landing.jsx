import React from 'react'
import appLogo from 'assets/app-logo.png'
import 'styles/index.css'
import { Link } from 'react-router-dom'

const Landing = () => {
  return (
    <div className='
          w-screen h-screen
          bg-primary
          flex items-center justify-center
      '>
        <Link to="/entry">
            <img src={appLogo} alt="appLogo" className="cursor-pointer" />
        </Link>
    </div>
  )
}

export default Landing
