import React, {useState } from 'react';

const CopyToClipboard = ({ textToCopy }) => {
  const [isCopied, setIsCopied] = useState(false);


  const handleCopyClick = async() => {
        
        try {
            await window.navigator.clipboard.writeText(textToCopy)
    
            setIsCopied(true)
    
            setTimeout(()=>{
                setIsCopied(false)
              },1000)
        } catch (error) {
            console.log(error?.message)
        }
        
  };

  return (
    <div className='flex'>
      <textarea
        value={textToCopy}
        readOnly
        className={`${isCopied ? ' bg-blue-600' : ' bg-inherit'} text-gray-300 h-6 w-[11rem] resize-none outline-none`}
      />
      <button onClick={handleCopyClick}
      className=' hover:bg-gray-500 ml-1 text-gray-300 bg-inherit'>Copy Text</button>
    </div>
  );
};

export default CopyToClipboard;
