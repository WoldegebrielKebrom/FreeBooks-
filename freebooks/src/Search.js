import React, {useState} from 'react';
import  './style.css';
import AfterSearch from './AfterSearch';




function Search({uploadClicked, setUploadClicked, searchClicked,setSearchClicked}) {
    const [data, setData] = useState([]);
    
    const fetchBooks = async () => {
        try {
            const response = await fetch(`http://localhost:3000/books`);
            const booksData = await response.json();
            console.log('here is the data', booksData);
            console.log(booksData)
            setData(booksData);

        } catch(err) {
            console.log("oh no an error! ", err)
        }
    }
    
    
    
    const handleClick = (event) => {
        if(event.target.name==='searchButton') {
            setSearchClicked( () => {
                return !searchClicked
             })
             fetchBooks();
            
        } else {
            setUploadClicked( () => {
               return !uploadClicked
            })
        }
        
    }
    
    let preSearch = <div className='search--div'>
                <h1 className='logo'>FreeBooks</h1>
                <input className='search--box' type='text'/> <br/>
                <div>
                    <button className='search--button' onClick={handleClick} name='searchButton'>Search Book</button> 
                    <button className='search--button' onClick={handleClick} name='uploadButton'>Upload book</button>
                </div>
    </div>
    
    
    
    
    return (
                <>
               {!searchClicked ? preSearch : <AfterSearch data={data} searchClicked={searchClicked} setSearchClicked={setSearchClicked}/>}
                </>
    );

}

export default Search;

