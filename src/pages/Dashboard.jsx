import React, { useState } from 'react'
import {Plus} from 'lucide-react'
import Navbar from '../Components/ui/Navbar'
import SearchBar from '../Components/ui/SearchBar'
import NoteCard from '../Components/ui/NoteCard'
import AddNoteModal from '../Components/ui/AddNoteModal'
import ViewNotesModal from '../Components/ui/ViewNotesModal'


const Dashboard = () => {
  const name = localStorage.getItem("name")
  const [darkMode, setDarkMode] = useState(false);
  const [modal, setmodal] = useState(false);
  const [viewModal, setViewModal] = useState(false);

  return (
    <div
      className={`relative w-screen min-h-screen pt-[95px] pb-[50px] px-4 sm:px-6 md:px-10 ${darkMode ? ' bg-secondary' : 'bg-primary'}`}>
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
          {JSON.parse(localStorage.getItem("notes") || "[]").map((note, index) => (
            <NoteCard
              key={index}
              title={note.title}
              content={note.text}
              darkMode={darkMode}
              onClick={() => {
                setViewModal(true);
                localStorage.setItem("currentNote", JSON.stringify(note));
              }}
            />
          ))} 
          </div>


        {/* Add Notes Floating Button */}
      <Plus 
        className='
          fixed bottom-15 right-15 
          border-2 border-solid rounded-[40px] 
          hover:cursor-pointer  hover:opacity-70
          active:opacity-60 
          h-[40px] w-[40px]
          '
        onClick={() => setmodal(true)}
      />

      {/* Add Note Modal */}
      {modal && <AddNoteModal darkMode={darkMode} onClose={() => setmodal(false)} />}
      {viewModal && <ViewNotesModal onClose={() => setViewModal(false)} />}
    </div>
  )
}

export default Dashboard
