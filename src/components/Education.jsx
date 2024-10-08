import React from 'react';
import SchoolIcon from '@mui/icons-material/School';

const Education = () => {
  return (
    <div id='education' className='bg-gray-200 dark:bg-[#393e46] pb-6'>
      <div className='text-center pt-5 mb-5 p-2'>
        <p className='text-3xl font-semibold pb-4 text-gray-800 dark:text-white'>
          Education <SchoolIcon className='text-green-500'/>
        </p>
        <div>
          <div className='text-left mx-auto md:w-[40%] p-6 mt-4 mb-6 bg-white dark:bg-gradient-to-br  dark:from-gray-800 dark:to-gray-900 rounded-lg shadow-lg border-2 border-green-500 h-[12rem] overflow-hidden hover:h-[auto] hover:overflow-visible'>
            <div className='flex items-center'>
              <img className='w-16 h-16 object-cover rounded-full mr-4 border-4 border-green-500' src='https://images.shiksha.com/mediadata/images/1588332150php7MxyGT.jpeg' alt='logo'/> 
              <div>
                <p className='text-lg font-semibold text-gray-800 dark:text-gray-200'>Motihari College Of Engineering, Motihari</p>
                <p className='text-sm text-gray-600 dark:text-gray-300'>Computer Science & Engineering</p>
                <p className='text-sm text-gray-600 dark:text-gray-300'>2020-2024</p>
              </div>
            </div>
            <p className='mt-2 text-gray-700 font-semibold dark:text-gray-300'>Grade: 8.12(cgpa)</p>
            <p className='mt-4 text-gray-700 dark:text-gray-300'>
              B.Tech student and passionate software developer with robust problem-solving skills. Adept in JavaScript and proficient debugger, with a strong foundation in core subjects like object-oriented programming, operating systems, computer networks, DBMS, and data structures.    
            </p>
          </div>
        </div>

        <div className='text-left mx-auto md:w-[40%] p-6 bg-white dark:bg-gradient-to-br  dark:from-gray-800 dark:to-gray-900 rounded-lg shadow-lg border-2 border-green-500 mt-2 mb-6'>
          <div className='flex items-center'>
            <img className='w-16 h-16 object-cover rounded-full mr-4 border-4 border-green-500' src='https://cdn.dribbble.com/users/901725/screenshots/11131508/media/6b0f6629ae6365b46ba928fc4f8e2f57.jpg' alt='logo'/> 
            <div>
              <p className='text-lg font-semibold text-gray-800 dark:text-gray-200'>Mother Teresa Vidyapeeth</p>
              <p className='text-sm text-gray-600 dark:text-gray-300'>12th Science(PCM)</p>
              <p className='text-sm text-gray-600 dark:text-gray-300'>2019</p>
            </div>
          </div>
          <p className='mt-2 text-gray-700 font-semibold dark:text-gray-300'>Grade: 78.6%</p>
          <p className='mt-4 text-gray-700 dark:text-gray-300'>
            I completed my class 12 high school education at Mother Teresa Vidyapeeth, Muzaffarpur, where I studied Science.
          </p>
        </div>

        <div className='text-left mx-auto md:w-[40%] p-6 bg-white dark:bg-gradient-to-br  dark:from-gray-800 dark:to-gray-900 rounded-lg shadow-lg border-2 border-green-500 mt-2 mb-6'>
          <div className='flex items-center'>
            <img className='w-16 h-16 object-cover rounded-full mr-4 border-4 border-green-500' src='https://cdn.dribbble.com/users/901725/screenshots/11131508/media/6b0f6629ae6365b46ba928fc4f8e2f57.jpg' alt='logo'/> 
            <div>
              <p className='text-lg font-semibold text-gray-800 dark:text-gray-200'>Mother Teresa Vidyapeeth</p>
              <p className='text-sm text-gray-600 dark:text-gray-300'>10th Science</p>
              <p className='text-sm text-gray-600 dark:text-gray-300'>2017</p>
            </div>
          </div>
          <p className='mt-2 text-gray-700 font-semibold dark:text-gray-300'>Grade: 10(cgpa)</p>
          <p className='mt-4 text-gray-700 dark:text-gray-300'>
            I completed my class 10 education at Mother Teresa Vidyapeeth, Muzaffarpur, where I studied Science and other subjects like social science and Urdu.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Education;
