import React from 'react';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import { useTypewriter, Cursor} from "react-simple-typewriter"

function Intro(props) {
    const [text] = useTypewriter({
      words: ["Software Developer","Coder","MERN Developer","Learner",],
      loop: {},
      typeSpeed: 80,
      deleteSpeed: 80
    })

    return (
        <>
        <div id='intro' className="md:flex bg-gray-900 dark:bg-gray-900 text-white rounded-b-[28%]">
        <div className="md:flex-1 p-10">
          <div className="rounded-full overflow-hidden mx-auto w-[40vh] h-[40vh] bg-white border-4 border-green-400">
            <img
              className="w-full h-full object-cover"
              src="assets/img.png"
              alt="Your Image"
            />
          </div>
        </div>
        <div className="md:flex-1 flex flex-col justify-center">
          <div className=" md:text-start text-center">
            <p className="text-lg text-gray-500 md:p-0 pt-4">Welcome, I'm</p>
            <p className="text-3xl font-bold text-gray-300">Muzzammil Hussain</p>
          </div>
          <div className="md:text-start text-center mt-4">
            <span className="text-2xl text-green-500 ">
              {text}
            </span>
            <span className='text-white text-2xl'><Cursor cursorStyle="|"/></span>
          </div>
          <div className='flex mt-4 md:mx-0 mx-auto'>
            <a href='https://www.linkedin.com/in/muzzammil-hussain-35562422b'><LinkedInIcon className='mr-4'/></a>
            <a href='https://github.com/muzzammilHub'><GitHubIcon/></a>
          </div>
        </div>
      </div>
      <div className='md:h-[8rem] h-[10rem] dark:bg-gray-900 bg-green-400 md:-mt-[6.4rem] -mt-[9rem] -z-10 relative'></div>
      </> 
    );
}

export default Intro;