import React from 'react';

const NoteCard = ({ title, content, onClick, darkMode }) => {
  const cardClasses = `h-[300px] w-[280px] ${
    darkMode ? 'bg-primary' : 'bg-secondary'
  } rounded-[8px] p-4 overflow-auto cursor-pointer hover:shadow-lg transition`;

  return (
    <div 
      className={cardClasses}
      onClick={onClick}
    >
      <h3 className="font-semibold mb-2">{title}</h3>
      <p className="text-sm">{content}</p>
    </div>
  );
};

export default NoteCard;