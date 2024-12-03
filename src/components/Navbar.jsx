import React from 'react'
import '../styles/Navbar.css';
export const Navbar = ({setInputValue,inputValue,search}) => {
  console.log(inputValue);
  return (
    <div className='navbar'>
      <span className='heading'>Movie DB</span>
      <input onChange={(event)=>{
        setInputValue(event.target.value);
      }}
      onKeyDown={search} 
      type='text' placeholder='Search...' className='search-bar'></input>
    </div>
  )
}

export default Navbar
