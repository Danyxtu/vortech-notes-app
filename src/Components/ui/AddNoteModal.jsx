import React from 'react';

const AddNoteModal = ({ onClose, darkMode }) => {
  // if (!isOpen) return null;

  return (
    <div className={`
      fixed inset-0 bg-black-400/50 bg-opacity-50 
      flex items-center justify-center z-50
      `}>
      <div className={` ${darkMode? 'bg-primary': 'bg-secondary'} rounded-lg shadow-lg w-11/12 max-w-md p-6 relative`}>
        <button
          className="absolute text-[35px] top-0 right-2 text-gray-500 hover:text-gray-700"
          onClick={onClose}
        >
          &times;
        </button>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            const title = e.target.title.value;
            const text = e.target.text.value;
            const notes = JSON.parse(localStorage.getItem('notes')) || [];
            notes.push({ title, text });
            localStorage.setItem('notes', JSON.stringify(notes));
            e.target.reset();
            alert('Note added successfully!');
            onClose();
          }}
        >
          <div className="mb-4">
            <label
              htmlFor="title"
              className="block text-sm font-medium text-gray-700"
            >
              Title:
            </label>
            <input
              type="text"
              id="title"
              name="title"
              required
              className="mt-1 block w-full border-gray-500 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="text"
              className="block text-sm font-medium text-gray-700"
            >
              Text:
            </label>
            <textarea
              id="text"
              name="text"
              required
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
          >
            Add Note
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddNoteModal;
