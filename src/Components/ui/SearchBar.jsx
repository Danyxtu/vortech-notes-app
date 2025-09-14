import React from 'react'

const SearchBar = () => {
  return (
    <div className='flex justify-center'>
      <input 
      className='
        h-[40px] w-[500px]
        px-[15px]
        border-2 border-black rounded-full
      '
      type='text' 
      placeholder='Search '
      />
    </div>
  )
}

export default SearchBar
