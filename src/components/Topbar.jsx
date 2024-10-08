import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faToggleOn, faToggleOff } from '@fortawesome/free-solid-svg-icons';

function Topbar({ toggleDarkMode, isDarkMode }) {
    return (
        <div className={`flex h-20 items-center justify-between ${isDarkMode ? 'bg-[#393e46]' : 'bg-white'} transition-colors duration-300`}>
            <p className={`md:ml-10 p-1 pl-2 pr-2 rounded-xl font-semibold md:text-base text-lg ${isDarkMode ? 'bg-green-500 text-white' : 'bg-green-400 text-black'} transition-colors duration-300`}>
                <a href="#intro">Developer.</a>
            </p>
            <ul className='md:flex md:mx-auto hidden md:block'>
                {['Home', 'About', 'Skills', 'Projects', 'Contact', 'Education'].map((item) => (
                    <li key={item} className={`ml-3 mr-3 p-1 pl-2 pr-2 rounded-xl font-semibold ${isDarkMode ? 'bg-green-500 text-white' : 'bg-green-400 text-black'} transition-colors duration-300`}>
                        <a href={`#${item.toLowerCase()}`}>{item}</a>
                    </li>
                ))}
            </ul>
            <p className={`bg-green-500 font-semibold p-1 pl-2 pr-2 md:mr-10 rounded-xl text-lg md:text-base ${isDarkMode ? 'text-white' : 'text-black'} transition-colors duration-300`}>
                <a href='https://drive.google.com/file/d/1xgxje-TUFxtEViyHKbuHXppg_lKS6Xex/view?usp=sharing'>Resume</a>
            </p>
            
            {/* Toggle Button using FontAwesome Icon */}
            <button 
                className='p-1 pl-2 pr-2 md:mr-10 rounded-xl text-lg md:text-base'
                onClick={toggleDarkMode} 
            >
                <FontAwesomeIcon 
                    icon={isDarkMode ? faToggleOn : faToggleOff} 
                    size="2x" 
                    className={`${isDarkMode ? 'text-green-500' : 'text-black'} transition-colors duration-300`} 
                />
            </button>
        </div>
    );
}

export default Topbar;
