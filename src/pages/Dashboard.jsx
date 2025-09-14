import React from 'react'
import Navbar from '../Components/ui/Navbar'
import SearchBar from '../Components/ui/SearchBar'
const Dashboard = () => {
  return (
    <div className='
        bg-primary layout
        pt-[75px]
    '>
      <Navbar />
      <div>
        <h1 className='text-center'><b>Greetings! Danny</b></h1>
        <SearchBar />
      </div>
      

    </div>
  )
}

export default Dashboard
