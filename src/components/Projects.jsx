import React, {useState} from 'react';
import AssignmentIcon from '@mui/icons-material/Assignment';
import CopyToClipboard from './CopyToClipboard';


function Projects(props) {
    const [isOpen, setIsOpen] = useState(true)

    const handleClick = ()=>{
        setIsOpen((prev)=>setIsOpen(!prev))
    }

    const textToCopy = ["mhussain@gmail.com","Pqrst@12","mhussain@mh.com", "pqrst12"]
    return (
        <div id='projects' className='bg-gray-200 pb-3'>
            <p className=' text-3xl font-semibold text-center pt-6'>Projects <AssignmentIcon className='text-green-500'/></p>
            <div>
            <div className='md:flex items-center justify-center md:w-1/2 mx-auto mt-5'>
              <div className='bg-gradient-to-br from-gray-800 to-gray-900 text-white p-6 rounded-lg shadow-lg md:w-1/2 m-6 '>
                <img src='assets/netflix.png' className='mb-4 rounded-lg' alt='Project Image' />

                <ul className='list-none grid grid-cols-3 gap-2'>
                    <li className='bg-blue-500 p-2 rounded-md text-center hover:bg-blue-600 cursor-pointer'>React</li>
                    <li className='bg-green-500 p-2 rounded-md text-center hover:bg-green-600 cursor-pointer'>Tailwind</li>
                    <li className='bg-purple-500 p-2 rounded-md text-center hover:bg-purple-600 cursor-pointer'>Firebase</li>
                    <li className='bg-yellow-500 p-2 rounded-md text-center hover:bg-yellow-600 cursor-pointer'>Redux</li>
                </ul>

                <h3 className='text-2xl font-semibold mt-4'>NetflixGPT</h3>
                <p className='text-gray-300 mb-4'>
                Netflix GPT blends streaming with ChatGPT 3.5, creating a unique <a href='https://github.com/muzzammilHub/netflix-gpt' target='_blank'>{">>>"}</a>.
                </p>

                <p className='text-gray-300'>Testing Email and Password</p>

                <div className='mb-1'>
                    <CopyToClipboard textToCopy={textToCopy[0]} />
                </div>

                <div className='mb-1'>
                    <CopyToClipboard textToCopy={textToCopy[1]} />
                </div>

                <div className='flex space-x-4'>
                    <a href='https://github.com/muzzammilHub/netflix-gpt' target='_blank'>
                    <button className='bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md transition duration-300'>View Code</button>
                    </a>
                    <a href='https://entertainflix.netlify.app/' target='_blank'>
                    <button className='bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md transition duration-300'> View Live</button>
                    </a>
                </div>
                </div>
                <div className='bg-gradient-to-br from-gray-800 to-gray-900 text-white p-6 rounded-lg shadow-lg md:w-1/2 m-6'>
                <img src='assets/dochub.png' className='mb-4 rounded-lg' alt='Project Image' />

                <ul className='list-none grid grid-cols-3 gap-2'>
                    <li className='bg-blue-500 p-2 rounded-md text-center hover:bg-blue-600 cursor-pointer'>React</li>
                    <li className='bg-orange-500 p-2 rounded-md text-center hover:bg-orange-600 cursor-pointer'>Redux</li>
                    <li className='bg-green-500 p-2 rounded-md text-center hover:bg-green-600 cursor-pointer'>Express</li>
                    <li className='bg-purple-500 p-2 rounded-md text-center hover:bg-purple-600 cursor-pointer'>mongoose</li>
                    <li className='bg-yellow-500 p-2 rounded-md text-center hover:bg-yellow-600 cursor-pointer'>Tailwind</li>
                </ul>

                <h3 className='text-2xl font-semibold mt-4'>Doctor Pannel</h3>
                <p className='text-gray-300 mb-4'>
                Comprehensive doctor portal for streamlined medical processes <a href='https://github.com/muzzammilHub/doctor_pannel' target='_blank'>{">>>"}</a>.
                </p>

                <p className='text-gray-300'>Testing Email and Password</p>

                <div className='mb-1'>
                    <CopyToClipboard textToCopy={textToCopy[2]} />
                </div>

                <div className='mb-1'>
                    <CopyToClipboard textToCopy={textToCopy[3]} />
                </div>

                <div className='flex space-x-4'>
                    <a href='https://github.com/muzzammilHub/doctor_pannel' target='_blank'>
                    <button className='bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md transition duration-300'>View Code</button>
                    </a>
                    <a href='https://docportall.netlify.app/' target='_blank'>
                    <button className='bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md transition duration-300'>View Live</button>
                    </a>
                </div>
                </div>
            </div>
            </div>
        </div>
    );
}

export default Projects;