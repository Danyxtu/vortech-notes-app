import React, { useState } from 'react'
import Navbar from '../Components/ui/Navbar'
import SearchBar from '../Components/ui/SearchBar'
import NoteCard from '../Components/ui/NoteCard'
import AddNotes from '../Components/ui/AddNotes'

const Dashboard = () => {
  const name = localStorage.getItem("name")
  const [darkMode, setDarkMode] = useState(false);
  
  return (
    <div
      className={`relative w-screen min-h-screen pt-[95px] pb-[50px] px-4 sm:px-6 md:px-10 ${darkMode ? ' dark:bg-secondary' : 'bg-primary'}`}>
      {/* Navbar */}
      <Navbar setDarkMode={setDarkMode} darkMode={darkMode} />

      {/* Greeting + Search */}
      <div className="mb-[20px]">
        <h1 className="text-center text-black dark:text-white font-bold">
          Greetings! {name}
        </h1>
        <SearchBar />
      </div>

      {/* Notes Grid */}
      <div
        className="
          grid gap-4 mx-auto max-w-5xl
          grid-cols-[repeat(auto-fit,minmax(330px,1fr))]
        "
      >
        <NoteCard />
        <NoteCard />
        <NoteCard />
        <NoteCard />
        <NoteCard />
        <NoteCard />
        <NoteCard />
        <NoteCard />
        <NoteCard />
        <NoteCard />
        <NoteCard />
        <NoteCard />
      </div>

      {/* Add Notes Floating Button */}
      <AddNotes />
    </div>
  )
}

export default Dashboard
