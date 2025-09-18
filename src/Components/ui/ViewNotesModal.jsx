import React, { useEffect, useState } from 'react';
import { Edit, Save, X, Trash2 } from 'lucide-react';

const ViewNotesModal = ({ onClose }) => {
  const [note, setNote] = useState({ title: "", text: "" });
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    // Retrieve the current note from local storage
    const storedNote = localStorage.getItem('currentNote');
    if (storedNote) {
      setNote(JSON.parse(storedNote));
    }
  }, []);

  const handleSave = () => {
    const notes = JSON.parse(localStorage.getItem("notes") || "[]");

    // Update by matching both title + text to avoid collisions
    const updatedNotes = notes.map(n =>
      n.title === note.title && n.text === note.text ? note : n
    );

    localStorage.setItem("notes", JSON.stringify(updatedNotes));
    localStorage.setItem("currentNote", JSON.stringify(note));
    setIsEditing(false);
  };

  const handleDelete = () => {
    const notes = JSON.parse(localStorage.getItem("notes") || "[]");

    // Remove the current note
    const updatedNotes = notes.filter(
      n => !(n.title === note.title && n.text === note.text)
    );

    localStorage.setItem("notes", JSON.stringify(updatedNotes));
    localStorage.removeItem("currentNote");

    // Close modal after deleting
    onClose();
  };

  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-opacity-50 bg-gray-800 dark:bg-opacity-80"
      style={{ backgroundColor: 'var(--color-background)' }}
    >
      <div
        className="w-4/5 md:w-3/5 lg:w-[800px] bg-secondary dark:bg-primary p-6 rounded-lg shadow-lg"
        style={{ maxHeight: '70%', overflowY: 'auto' }}
      >
        <h1
          className="text-right text-[35px] hover:cursor-pointer hover:opacity-70 active:opacity-60"
          onClick={onClose}
        >
          &times;
        </h1>

        <h2 className="text-xl font-bold mb-4">
          {isEditing ? "Edit Note" : "View Note"}
        </h2>

        {isEditing ? (
          <>
            <input
              type="text"
              className="w-full mb-4 p-2 border rounded"
              value={note.title}
              onChange={(e) => setNote({ ...note, title: e.target.value })}
            />
            <textarea
              className="w-full p-2 border rounded h-40"
              value={note.text}
              onChange={(e) => setNote({ ...note, text: e.target.value })}
            />
          </>
        ) : (
          <>
            <h3 className="text-lg font-semibold mb-2">{note.title || "Untitled"}</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              {note.text || "No note available."}
            </p>
          </>
        )}

        <div className="flex gap-3 mt-4">
          {isEditing ? (
            <button
              onClick={handleSave}
              className="flex items-center px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
            >
              <Save className="mr-2" />
              Save
            </button>
          ) : (
            <button
              onClick={() => setIsEditing(true)}
              className="flex items-center px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
              <Edit className="mr-2" />
              Edit
            </button>
          )}

          {isEditing && (
            <button
              onClick={() => setIsEditing(false)}
              className="flex items-center px-4 py-2 bg-gray-400 text-white rounded hover:bg-gray-500"
            >
              <X className="mr-2" />
              Cancel
            </button>
          )}

          {/*Delete button */}
          <button
            onClick={handleDelete}
            className="flex items-center px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
          >
            <Trash2 className="mr-2" />
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default ViewNotesModal;
