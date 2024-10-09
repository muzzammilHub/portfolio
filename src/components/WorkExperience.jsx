import React from 'react'
import WorkIcon from '@mui/icons-material/Work';

const WorkExperience = () => {
  return (
    <div className='h-auto  dark:bg-gray-900 pt-10 pb-10'>
        <div className=' flex justify-center items-center'>
            <h3 className='text-3xl font-semibold text-gray-800 dark:text-white'>Work Experience <span><WorkIcon className="text-3xl text-green-400"/></span></h3>
            
        </div>
        <div className='rounded-lg  flex justify-center items-center'>
            <img 
                className='h-24 w-24 rounded-full border-4 border-indigo-500 shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out bg-green-300' 
                src="assets/img.png" 
                alt="Profile Image"
            />
            <p className='text-lg font-semibold text-gray-700 dark:text-gray-300 ml-4'>Software Developer</p>
        </div>
        <div className=' p-2'>
            <div className='text-left mx-auto md:w-[40%] p-6 mt-4 mb-6 bg-white dark:bg-gradient-to-br  dark:from-gray-800 dark:to-gray-900 rounded-lg shadow-lg border-2 border-green-500 h-auto'>
                <div className='flex items-center'>
                    <img className='w-16 h-16 object-cover rounded-full mr-4 border-4 border-green-500 bg-amber-900' src='/assets/c1_logo.png' alt='logo'/> 
                    <div className=' p-2'>
                        <p className='text-lg font-semibold text-gray-800 dark:text-white'>App Avenge Labs Pvt. Ltd.</p>
                        <div className=' flex items-center justify-between'>
                                <p className='text-md font-semibold mr-2 dark:text-gray-300'>Reactjs Dev(intern)</p>
                                <p className='text-sm text-gray-600 mr-2 dark:text-gray-400'>Remote <span>(Aug 2024 - Present)</span></p>
                                <p className='text-sm text-gray-600 dark:text-gray-400'>Ahmedabad, India</p>                        
                        </div>
                    </div>
                </div>
                <div className=' mt-2 flex   flex-wrap gap-4'>
                    <div 
                    className='flex w-[8rem] p-1 pl-2 pr-2  items-center border-2 border-green-500 rounded-lg bg-gradient-to-r from-gray-800 to-gray-900 hover:from-gray-900 hover:to-gray-800 transform hover:scale-105 transition-all shadow-lg'>
                        <img className='h-7 mr-2' src='assets/react.png' alt='React Logo' />
                        <p className='text-base font-semibold text-gray-300'>React JS</p>
                    </div>
                    <div 
                    className='flex w-[8rem] p-1 pl-2 pr-2 items-center border-2 border-green-500 rounded-lg bg-gradient-to-r from-gray-800 to-gray-900 hover:from-gray-900 hover:to-gray-800 transform hover:scale-105 transition-all shadow-lg'>
                        <img className='h-7 mr-2' src='assets/nextjs-icon.png' alt='React Logo' />
                        <p className='text-base font-semibold text-gray-300'>Next JS</p>
                    </div>
                    <div 
                    className='flex w-[8rem] p-1 pl-2 pr-2 items-center border-2 border-green-500 rounded-lg bg-gradient-to-r from-gray-800 to-gray-900 hover:from-gray-900 hover:to-gray-800 transform hover:scale-105 transition-all shadow-lg'>
                        <img className='h-7 mr-2' src='assets/tail.png' alt='React Logo' />
                        <p className='text-base font-semibold text-gray-300'>Tailwind</p>
                    </div>
                    <div 
                    className='flex w-[8rem] p-1 pl-2 pr-2 items-center border-2 border-green-500 rounded-lg bg-gradient-to-r from-gray-800 to-gray-900 hover:from-gray-900 hover:to-gray-800 transform hover:scale-105 transition-all shadow-lg'>
                        <img className='h-7 mr-2' src='assets/git.png' alt='React Logo' />
                        <p className='text-base font-semibold text-gray-300'>Git</p>
                    </div>
                </div>
            </div>
            <div className='text-left mx-auto md:w-[40%] p-6 mt-4 mb-6 bg-white dark:bg-gradient-to-br  dark:from-gray-800 dark:to-gray-900 rounded-lg shadow-lg border-2 border-green-500 h-auto'>
                <div className='flex items-center'>
                    <img className='w-16 h-16 object-cover rounded-full mr-4 border-4 border-green-500 bg-black' src='/assets/c2_logo.png' alt='logo'/> 
                    <div>
                        <p className='text-lg font-semibold text-gray-800 dark:text-white'>Excellence Technology Pvt. Ltd.</p>
                        <div className=' flex items-center justify-between'>
                            <p  className='text-md font-semibold mr-2 dark:text-gray-300'>Jr. SDE(intern)</p>
                            <p className='text-sm text-gray-600 mr-2 dark:text-gray-400'>Remote <span>(June 2024 - August 2024)</span></p>
                            <p  className='text-sm text-gray-600 dark:text-gray-400'>Noida, India</p>                        
                        </div>
                    </div>
                </div>
                <div className='mt-2 flex flex-wrap gap-4'>
                    <div className='flex w-[8rem] p-1 pl-2 pr-2 items-center border-2 border-green-500 rounded-lg bg-gradient-to-r from-gray-800 to-gray-900 hover:from-gray-900 hover:to-gray-800 transform hover:scale-105 transition-all shadow-lg'>
                        <img className='h-7 mr-2' src='assets/react.png' alt='React Logo' />
                        <p className='text-base font-semibold text-gray-300'>React JS</p>
                    </div>
                    <div className='flex w-[8rem] p-1 pl-2 pr-2 items-center border-2 border-green-500 rounded-lg bg-gradient-to-r from-gray-800 to-gray-900 hover:from-gray-900 hover:to-gray-800 transform hover:scale-105 transition-all shadow-lg'>
                        <img className='h-7 mr-2' src='assets/py.png' alt='Python Logo' />
                        <p className='text-base font-semibold text-gray-300'>Python</p>
                    </div>
                    <div className='flex w-[8rem] p-1 pl-2 pr-2 items-center border-2 border-green-500 rounded-lg bg-gradient-to-r from-gray-800 to-gray-900 hover:from-gray-900 hover:to-gray-800 transform hover:scale-105 transition-all shadow-lg'>
                        <img className='h-7 mr-2' src='assets/tail.png' alt='TailwindCSS Logo' />
                        <p className='text-base font-semibold text-gray-300'>Tailwind</p>
                    </div>
                    <div className='flex w-[8rem] p-1 pl-2 pr-2 items-center border-2 border-green-500 rounded-lg bg-gradient-to-r from-gray-800 to-gray-900 hover:from-gray-900 hover:to-gray-800 transform hover:scale-105 transition-all shadow-lg'>
                        <img className='h-7 mr-2' src='assets/aws.png' alt='AWS Logo' />
                        <p className='text-base font-semibold text-gray-300'>AWS</p>
                    </div>
                    <div className='flex w-[8rem] p-1 pl-2 pr-2 items-center border-2 border-green-500 rounded-lg bg-gradient-to-r from-gray-800 to-gray-900 hover:from-gray-900 hover:to-gray-800 transform hover:scale-105 transition-all shadow-lg'>
                        <img className='h-7 mr-2' src='assets/git.png' alt='Git Logo' />
                        <p className='text-base font-semibold text-gray-300'>Git</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default WorkExperience