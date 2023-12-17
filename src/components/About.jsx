import React from 'react';
import InfoIcon from '@mui/icons-material/Info';

function About(props) {
    return (
    <div id='about' className='bg-gray-200'>
        <div className='flex p-8 md:h-[50vh] h-[auto] text-black'>
        <div className='flex-1 pr-4 ml-[15%]'>
            <p className='text-3xl font-bold mb-4 md:text-left text-center'>About me <InfoIcon className='text-green-500'/></p>
            <p className='font-semibold md:w-[30rem] md:text-base text-lg md:text-justify text-center'>
            Muzzammil Hussain, a dedicated software developer pursuing a BTech in Computer Science and Engineering, is fueled by a passion for creating impactful solutions. With a robust command of the JavaScript programming language, Muzzammil excels in developing robust, real-world full-stack applications.
            </p>
        </div>
        <div className='flex-1 hidden md:block'>
        <img 
        className=' md:h-[75%] h-[45%]'
        src="https://cdn-icons-png.flaticon.com/512/7774/7774001.png"/>
        </div>
        
    </div>
    </div>
);
}

export default About;