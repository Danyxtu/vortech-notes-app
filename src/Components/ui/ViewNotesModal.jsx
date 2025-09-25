import { useEffect, useState } from 'react';
import { Edit, Save, X, Trash2 } from 'lucide-react';


const ViewNotesModal = ({ onClose, refreshNotes }) => {
  const [note, setNote] = useState({ title: "", text: "" });
  const [originalNote, setOriginalNote] = useState(null); // store original
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    const storedNote = localStorage.getItem("currentNote");
    if (storedNote) {
      const parsed = JSON.parse(storedNote);
      setNote(parsed);
      setOriginalNote(parsed); // keep a copy of original for matching
    }
  }, []);

  const handleSave = () => {
    const notes = JSON.parse(localStorage.getItem("notes") || "[]");

    // update by matching original note instead of modified note
    const updatedNotes = notes.map(n =>
      n.title === originalNote.title && n.text === originalNote.text ? note : n
    );

    localStorage.setItem("notes", JSON.stringify(updatedNotes));
    localStorage.setItem("currentNote", JSON.stringify(note));

    setOriginalNote(note); // update original to latest
    setIsEditing(false);

    if (refreshNotes) refreshNotes(); // refresh Dashboard immediately
  };

  const handleDelete = () => {
    const notes = JSON.parse(localStorage.getItem("notes") || "[]");

    const updatedNotes = notes.filter(
      n => !(n.title === note.title && n.text === note.text)
    );

    localStorage.setItem("notes", JSON.stringify(updatedNotes));
    localStorage.removeItem("currentNote");

    if (refreshNotes) refreshNotes(); // refresh Dashboard immediately

    onClose();
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-opacity-50 bg-gray-400/40 dark:bg-opacity-80">
      <div
        className="w-4/5 md:w-3/5 lg:w-[800px] bg-secondary dark:bg-primary p-6 rounded-lg shadow-lg"
        style={{ maxHeight: "70%", overflowY: "auto" }}
      >
        {/* Close button */}
        <h1
          className="text-right text-[35px] hover:cursor-pointer hover:opacity-70 active:opacity-60"
          onClick={onClose}
        >
         <p className="text-[15px] text-black-500 font-bold mt-2">{new Date().toLocaleDateString()}</p>  &times;
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
            <p className="h-[180px] text-gray-700 dark:text-gray-300 mb-6">
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
          {/* Buttonas */}
              <Edit className="mr-2" />
              Edit
            </button>
          )}

          {isEditing && (
            <button
              onClick={() => {
                setIsEditing(false);
                setNote(originalNote); //reset changes if cancelled
              }}
              className="flex items-center px-4 py-2 bg-gray-400 text-white rounded hover:bg-gray-500"
            >
              <X className="mr-2" />
              Cancel
            </button>
          )}

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
