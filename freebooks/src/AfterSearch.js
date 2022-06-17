import React, {useState}  from 'react';
import  './style.css';
import { BiArrowBack } from 'react-icons/bi';

function AfterSearch({data, searchClicked,setSearchClicked}) {
    
    const [singleBookClikced, setSingleBookClicked] = useState(false);
     const [path, setPath] = useState('');
    
    const handleClick = (event) => {
        if( event.target.nodeName==='DIV' ) {
            const pdfpath =   event.target.className.split(' ')[1];
            setSingleBookClicked( () => {
                return !singleBookClikced
             })
             setPath(pdfpath);
            
             console.log('booklink clicked')
        } 
        if(event.target.nodeName==='svg') {
            console.log(event.target.nodeName)
            setSearchClicked( () => {
                return !searchClicked
             })
        }

        
    }
     
    
    let arr =    data.map(item => {
             
          return  (
          
          
                <div className={`returned-books ${item.path}`} onClick={handleClick} >
                    <h3>{item.title}</h3>
                    <h3>{item.name}</h3>
                    <h3>{item.category}</h3>
                    <h3>{item.year}</h3>
                </div> 
                
                
                )
        }) 

        let returnValue =  !singleBookClikced ? arr : <embed src={path}  width="100%"
        height="100%" />;
        return (
            <>
                <BiArrowBack className='back--arrow' onClick={handleClick} name='back-arrow' style={{display:!singleBookClikced?'block':'none'}}/>
                <h1 className='afterSearch-logo' style={{display:!singleBookClikced?'block':'none'}}>FreeBooks</h1>
                {returnValue}
            </>

        )
        
        
    


}

export default AfterSearch;
