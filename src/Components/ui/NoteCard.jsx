const NoteCard = ({ title, content, onClick, darkMode }) => {
  const cardClasses = `h-[300px] w-[280px] border-1 ${
    darkMode ? 'bg-primary' : 'bg-secondary'
  } rounded-[8px] p-4 overflow-auto cursor-pointer hover:shadow-lg transition`;

  return (
    <div 
      className={cardClasses}
      onClick={onClick}
    >
      <h3 className="font-semibold mb-2">{title}</h3>
      <p className="text-sm">{content}</p>
      <p className="text-xs text-gray-500 mt-2">{new Date().toLocaleDateString()}</p>
    </div>
  );
};

export default NoteCard;