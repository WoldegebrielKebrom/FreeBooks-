import React from 'react';
import  './style.css';





function Search () {

    const fetchBooks = async () => {
        try {
            const response = await fetch(`http://localhost:3000/books`);
            const booksData = await response.json();
            console.log('here is the dat', booksData)

        } catch(err) {
            console.log("oh no an error! ", err)
        }
    }


    // useEffect(()=> {
    //     fetchBooks();
    // },[]);

    const handleClick = () => {
        console.log('i am clicked');
        fetchBooks();
    }
    
    return (
        <div className='search--div'>
            <h1 className='logo'>FreeBooks</h1>
            <input className='search--box' type='text'/> <br/>
            <div>
                <button className='search--button' onClick={handleClick}>Search Book</button> 
                <button className='search--button'>Upload book</button>
            </div>
        </div>
    );
}

export default Search;