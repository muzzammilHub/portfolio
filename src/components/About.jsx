import React from 'react';
import InfoIcon from '@mui/icons-material/Info';

function About(props) {
    return (
    <div id='about' className='bg-gray-200'>
        <div className='flex p-8 md:h-[50vh] h-[auto] text-black'>
        <div className='flex-1 pr-4 ml-[15%]'>
            <p className='text-3xl font-bold mb-4 md:text-left text-center'>About me <InfoIcon className='text-green-500'/></p>
            <p className='font-semibold md:w-[30rem] md:text-base text-lg md:text-justify text-center'>
                <span class="font-bold">Muzzammil Hussain</span>, a dedicated software developer with a <span class="text-green-600 font-semibold">BTech in Computer Science and Engineering</span>, is currently interning as a <span class="text-green-600 font-semibold">React developer</span> at <span class="text-green-600">App Avengers</span>. Fueled by a passion for creating impactful solutions, Muzzammil excels in developing real-world full-stack applications, with a robust command of <span class="text-green-600 font-semibold">Nodejs, Reactjs</span>.
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