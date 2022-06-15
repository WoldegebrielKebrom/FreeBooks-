import React from 'react';
import  './style.css';
import { BiArrowBack } from 'react-icons/bi';



function Upload({uploadClicked, setUploadClicked}) {
    
    const handleClick = () => {
       
            setUploadClicked( () => {
               return !uploadClicked
            })
              
    }
    
    
    return (
        <>
        <BiArrowBack className='back--arrow' onClick={handleClick}/>
        <div className='upload--div'>
            <h1 className='logo'>FreeBooks</h1>
            <form>
                <input type='file'/>
                <input type='submit'/>
            </form>
        </div>
        </>
    );

}

export default Upload;
