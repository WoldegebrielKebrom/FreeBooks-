import React,  {useState} from 'react';
import  './style.css';
import { BiArrowBack } from 'react-icons/bi';



function Upload({uploadClicked, setUploadClicked}) {
    
    const [uploadDeatil, setUploadDeatil] = useState({
        title : '',
        name : '',
        category : '',
        year : '',
        path : '' 
    });

    const [submitted, setSubmitted] =  useState(false);


    console.log(uploadDeatil)

    const handleClick = () => {
       
            setUploadClicked( () => {
               return !uploadClicked
            })
              
    }

    const handleOnChange = (event) => {
        console.log(event.target.value);
        if(event.target.name === 'title') {
            setUploadDeatil(()=> {
                return {
                    ...uploadDeatil,
                    title : event.target.value
                }
            })
        }
        else if(event.target.name === 'name') {
            setUploadDeatil(()=> {
                return {
                    ...uploadDeatil,
                    name : event.target.value
                }
            })
        }
        else if(event.target.name === 'category') {
            setUploadDeatil(()=> {
                return {
                    ...uploadDeatil,
                    category : event.target.value
                }
            })
        }
        else if(event.target.name === 'year') {
            setUploadDeatil(()=> {
                return {
                    ...uploadDeatil,
                    year : event.target.value
                }
            })
        }
        else {
            setUploadDeatil(()=> {
                return {
                    ...uploadDeatil,
                    path : event.target.value
                }
            })

        }   
    }


    const submitBook = async (e) => {
        e.preventDefault();
        const response = await fetch('http://localhost:3000/books', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(uploadDeatil)
        });
        const content = await response.json();
        console.log(content);

        setSubmitted(true);

      }


    let display = submitted ? <h1>Thank you for your Submission</h1> : <>
    <h1 className='logo' style={{marginTop:'0px'}}>FreeBooks</h1>
    <form>
        <div>
        <input type='text'placeholder='title' className='uplod-input' name='title' onChange={handleOnChange}/>
        <input type='text'placeholder='name' className='uplod-input' name='name' onChange={handleOnChange}/>
        <input type='text'placeholder='category' className='uplod-input' name='category' onChange={handleOnChange}/>
        <input type='text'placeholder='year' className='uplod-input' name='year' onChange={handleOnChange}/>
        <input type='text'placeholder='path' className='uplod-input' name='path' onChange={handleOnChange}/>
        <button onClick={submitBook}>Submit Book</button>
        </div>
    </form> 
    </> ;
    
    return (
        <>
        <BiArrowBack className='back--arrow' onClick={handleClick}/>
        <div className='upload--div' >
            {display}
        </div>
        </>
    );

}

export default Upload;
