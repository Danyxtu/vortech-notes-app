import { useState, useEffect } from 'react';
import { Plus } from 'lucide-react';

// import components
import Navbar from '../Components/ui/Navbar';
import SearchBar from '../Components/ui/SearchBar';
import NoteCard from '../Components/ui/NoteCard';
import AddNoteModal from '../Components/ui/AddNoteModal';
import ViewNotesModal from '../Components/ui/ViewNotesModal';

const Dashboard = () => {
  const name = localStorage.getItem('name');
  const [darkMode, setDarkMode] = useState(false);
  const [modal, setModal] = useState(false);
  const [viewModal, setViewModal] = useState(false);

  // ✅ use state for notes
  const [notes, setNotes] = useState([]);

  // ✅ load notes from localStorage when component mounts
  useEffect(() => {
    const storedNotes = JSON.parse(localStorage.getItem('notes') || '[]');
    setNotes(storedNotes);
  }, []);

  // ✅ helper function to refresh notes after add/edit/delete
  const refreshNotes = () => {
    const storedNotes = JSON.parse(localStorage.getItem('notes') || '[]');
    setNotes(storedNotes);
  };

  return (
    <div
      className={`relative w-screen min-h-screen pt-[95px] pb-[50px] px-4 sm:px-6 md:px-10 ${
        darkMode ? 'bg-secondary' : 'bg-primary'
      }`}
    >
      {/* Navbar */}
      <Navbar setDarkMode={setDarkMode} darkMode={darkMode} />

      {/* Greeting + Search */}
      <SearchBar />
      <div className="mb-[20px]">
        <h1 className="text-center text-black dark:text-white font-bold">
          Greetings! {name}
        </h1>
      </div>

      {/* Notes Grid */}
      <div
        className="
          grid gap-4 mx-auto max-w-5xl
          grid-cols-[repeat(auto-fit,minmax(330px,1fr))]
        "
      >
        {notes.length > 0 ? (
          notes.map((note, index) => (
            <NoteCard
              key={index}
              title={note.title}
              content={note.text}
              darkMode={darkMode}
              onClick={() => {
                setViewModal(true);
                localStorage.setItem('currentNote', JSON.stringify(note));
              }}
            />
          ))
        ) : (
          <p className="text-center text-gray-500 col-span-full">
            No notes found
          </p>
        )}
      </div>

      {/* Add Notes Floating Button */}
      <Plus
        className="
          fixed bottom-15 right-15 
          border-2 border-solid rounded-[40px] 
          hover:cursor-pointer hover:opacity-70
          active:opacity-60 
          h-[40px] w-[40px]
        "
        onClick={() => setModal(true)}
      />

      {/* Modals */}
      {modal && (
        <AddNoteModal
          darkMode={darkMode}
          onClose={() => {
            setModal(false);
            refreshNotes(); // ✅ refresh after closing modal
          }}
        />
      )}
      {viewModal && (
        <ViewNotesModal
          onClose={() => {
            setViewModal(false);
            refreshNotes(); // ✅ refresh after closing modal
          }}
        />
      )}
    </div>
  );
};

export default Dashboard;
