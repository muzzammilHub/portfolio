import React, {useRef} from 'react';
import ConnectWithoutContactIcon from '@mui/icons-material/ConnectWithoutContact';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



function Contact(props) {

  const formContent = useRef()

  const handleSubmit = (e) => {
    e.preventDefault()

    emailjs.sendForm('service_sbk61lo', 'template_p27dn8q', formContent.current, 'D9t6Wu6Cmkhcdo5LZ')
      .then((result) => {
        e.target.reset()
        toast.success('Email sent successfully!');
          console.log(result.text);
      }, (error) => {
        toast.error('Failed to send email. Please try again.');
          console.log(error.text);
      });

  }

    return (
            
        <div id='contact' className='bg-gradient-to-r bg-gray-900  text-white  shadow-lg'>
        <div className='flex flex-col items-center justify-center'>
          <p className='text-3xl font-bold pt-6 pb-4'>Get in touch <ConnectWithoutContactIcon className='inline-block w-6 h-6 ml-2 text-green-500' /></p>
          <p className='text-lg pb-8 p-3 text-center'>Feel free to reach out to me for any questions and opportunities</p>
        </div>
      
        <div className='flex items-center justify-center pb-6 p-6'>
        <form 
        ref={formContent}
        onSubmit={handleSubmit}
        className='w-[30rem] mx-auto bg-white p-8 rounded-lg shadow-lg'>
      <div className='mb-4'>
        <input
          className='text-black  w-full px-3 py-2 border-b-2 border-gray-300 focus:outline-none focus:border-green-500 transition duration-300'
          type='text'
          placeholder='Name'
          name='name'
          required
        />
      </div>

      <div className='mb-4'>
        <input
          className='text-black  w-full px-3 py-2 border-b-2 border-gray-300 focus:outline-none focus:border-green-500 transition duration-300'
          type='email'
          placeholder='Email'
          name='email'
          required
        />
      </div>

      <div className='mb-4'>
        <input
          className='text-black  w-full px-3 py-2 border-b-2 border-gray-300 focus:outline-none focus:border-green-500 transition duration-300'
          type='text'
          placeholder='Subject'
          name='subject'
          required
        />
      </div>

      <div className='mb-4'>
        <textarea
         className='text-black dark:text-white w-full px-3 py-2 border-b-2 border-gray-300 focus:outline-none focus:border-green-500 transition duration-300'
          name="message"
          placeholder='Message'
          rows={4}
          required
        ></textarea>
      </div>

      <div>
        <button
          className='w-full bg-green-500 text-white px-4 py-2 rounded-full transform hover:scale-105 transition duration-300'
        >
          Send
        </button>
      </div>
    </form>
        </div>
        <ToastContainer />
      </div>
    );
}

export default Contact;