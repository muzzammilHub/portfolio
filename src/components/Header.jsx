import React from 'react'

const Header = () => {

  return (
    <div className='bg-gray-200 dark:bg-gray-900 p-4'>
        <ul className='z-20'>
                <li>
                    <a className='text-gray-800 dark:text-white hover:underline' href="#intro">Home</a>
                </li>
                <li>
                    <a className='text-gray-800 dark:text-white hover:underline'  href="#about">About</a>
                </li>
                <li>
                    <a className='text-gray-800 dark:text-white hover:underline'  href="#skills">Skills</a>
                </li>
                <li>
                    <a className='text-gray-800 dark:text-white hover:underline'  href="#projects">Projects</a>
                </li>
                <li>
                    <a className='text-gray-800 dark:text-white hover:underline'  href="#contact">Contact</a>
                </li>
                <li>
                    <a className='text-gray-800 dark:text-white hover:underline'  href="#education">Education</a>
                </li>
            </ul>
    </div>
  )
}

export default Header