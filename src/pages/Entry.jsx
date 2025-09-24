import React from 'react'
import 'styles/index.css'
import { Link } from 'react-router-dom'
import { useState } from 'react'

function click(){
  console.log('Clicked')
}

const Entry = () => {
  const [name, setName] = useState("");

  const handleChange = (e) => {
    setName(e.target.value);
    localStorage.setItem('name', e.target.value);
  }

  return (
    <div className='layout center'>
      <div className='
          bg-tertiary 
          h-[200px] w-[350px]
          border-2 border-solid border-black rounded-[10px]
          flex items-center flex-col
        
      '>
        <h1 className='
            text-center font-bold text-2xl
            py-[10px] 
        '>
          Who's Writing Today?
        </h1>
        <form action="" className='
            flex flex-col items-center
        '>
          <input 
              className='
                  border border-solid rounded-[5px]
                  pl-[10px] mb-[13px] h-9
                  font-semibold
                  '
              value={name}
              onChange={handleChange}
              type="text"
              placeholder='Enter your name...'
          />
          <Link to='/dashboard'>
            <button className='
                bg-secondary
                px-4 py-1 w-[100px]
                border-1 rounded-2xl
                hover:cursor-pointer

              '
              type='submit'
              onClick={click}
            >
              Continue
            </button>
          </Link>
          
        </form>
        

      </div>
    </div>
  )
}

export default Entry
