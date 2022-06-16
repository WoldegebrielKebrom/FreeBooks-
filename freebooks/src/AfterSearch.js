import React, {useState}  from 'react';
import  './style.css';
import { BiArrowBack } from 'react-icons/bi';

function AfterSearch({data, searchClicked,setSearchClicked}) {
    
    const [singleBookClikced, setSingleBookClicked] = useState(false);
    
    const handleClick = (event) => {
        
        if(event.target.nodeName==='H3' || event.target.nodeName==='DIV' ) {
            setSingleBookClicked( () => {
                return !singleBookClikced
             })
            
             console.log('booklink clicked')
        } else {
            console.log('erkwekwetkwekwekomerkgmkemgkemfg')
            setSearchClicked( () => {
                return !searchClicked
             })
        }

        
            // console.log('a tag clicked');
            // setSearchClicked( () => {
            //     return !searchClicked
            //  })
            
         
    }
     
    
    let arr =    data.map(item => {
             
          return  (
          
          
                <div className='returned-books' onClick={handleClick}>
                    <h3>{item.title}</h3>
                    <h3>{item.firstName}</h3>
                    <h3>{item.lastName}</h3>
                    <h3>{item.category}</h3>
                    <h3>{item.year}</h3>
                    <h3>{item.path}</h3>
                </div> 
                
                
                )
        }) 

        let returnValue =  !singleBookClikced ? arr : <embed src='/Users/kebrom_woldegebriel/Desktop/multiverse/FreeBooks-/freebooks/src/files/History Of Oromo.pdf'  width="50%"
        height="50%" />;
        return (
            <>
                <BiArrowBack className='back--arrow' onClick={handleClick} name='back-arrow' style={{display:!singleBookClikced?'block':'none'}}/>
                <h1 className='afterSearch-logo' style={{display:!singleBookClikced?'block':'none'}}>FreeBooks</h1>
                {returnValue}
            </>

        )
        
        
    


}

export default AfterSearch;
