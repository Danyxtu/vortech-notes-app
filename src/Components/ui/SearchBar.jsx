import React, { useState } from 'react';

const SearchBar = ({ notes, onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    onSearch(value); // Call the parent function to filter notes
  };

  return (
    <div className='flex justify-center'>
      <input
        className='
          h-[40px] w-[500px]
          px-[15px]
          border-2 border-black rounded-full
        '
        type='text'
        placeholder='Search'
        value={searchTerm}
        onChange={handleSearch}
      />
    </div>
  );
};

export default SearchBar;
