import React, {useState} from 'react';


function Topbar() {
    
    return (
        <div className='flex h-20 items-center justify-between'>
            <p className='md:ml-10 bg-green-400 p-1 pl-2 pr-2 rounded-xl font-semibold md:text-base text-lg'>
                <a href="#intro">Developer.</a>
            </p>
            <ul className='md:flex md:mx-auto hidden md:block'>
                <li className='ml-3 mr-3 bg-green-400 p-1  pl-2 pr-2 rounded-xl font-semibold'>
                    <a href="#intro">Home</a>
                </li>
                <li className='ml-3 mr-3 bg-green-400 p-1  pl-2 pr-2 rounded-xl font-semibold'>
                    <a href="#about">About</a>
                </li>
                <li className='ml-3 mr-3 bg-green-400 p-1 pl-2 pr-2 rounded-xl font-semibold'>
                    <a href="#skills">Skills</a>
                </li>
                <li className='ml-3 mr-3 bg-green-400 p-1 pl-2 pr-2 rounded-xl font-semibold'>
                    <a href="#projects">Projects</a>
                </li>
                <li className='ml-3 mr-3 bg-green-400 p-1 pl-2 pr-2 rounded-xl font-semibold'>
                    <a href="#contact">Contact</a>
                </li>
                <li className='ml-3 mr-3 bg-green-400 p-1 pl-2 pr-2 rounded-xl font-semibold'>
                    <a href="#education">Education</a>
                </li>
            </ul>
            <p 
            className='bg-green-400 font-semibold p-1 pl-2 pr-2 md:mr-10 rounded-xl text-lg md:text-base'>
                <a href='https://drive.google.com/file/d/1xgxje-TUFxtEViyHKbuHXppg_lKS6Xex/view?usp=sharing'>Resume</a>
            </p>
            {/* <Hamberger
            onClick={handleClick}
            menuOpen={menuOpen}
            setMenuOpen={setMenuOpen}
            /> */}
            
        </div>
    );
}

export default Topbar;