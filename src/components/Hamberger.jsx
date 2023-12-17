import React from 'react'

const Hamberger = ({menuOpen, setMenuOpen}) => {
  return (
    <div
    onClick={()=>setMenuOpen(!menuOpen)} 
    className={`grid grid-rows-3 gap-1 w-4 md:hidden  ${menuOpen ? 'ml-[16rem]' : 'ml-[16rem]'}`}>
    <div className={`h-1 bg-black ${menuOpen ? 'transform -rotate-45 translate-x-1 translate-y-2 w-6' : 'w-6'}`}>&nbsp;</div>
    <div className={`h-1 bg-black ${menuOpen ? 'hidden' : ''}`}>&nbsp;</div>
    <div className={`h-1 bg-black ${menuOpen ? 'transform rotate-45 translate-x-1 translate-y-0 w-6' : 'w-6'}`}>&nbsp;</div>
  </div>
  )
}

export default Hamberger