import React from 'react'

const AddNotes = () => {
  return (
    <div className='fixed bottom-15 right-20'>
      <svg
        xmlns="http://www.w3.org/2000/svg" 
        className='border-2 border-solid rounded-[40px] hover:cursor-pointer'
        width="40" 
        height="40" 
        viewBox="0 0 24 24" 
        fill="none" 
        stroke="currentColor" 
        stroke-width="2" 
        stroke-linecap="round" 
        stroke-linejoin="round" 
        class="lucide lucide-plus-icon lucide-plus">
          <path d="M5 12h14"/><path d="M12 5v14"/>
      </svg>

    </div>
  )
}

export default AddNotes
