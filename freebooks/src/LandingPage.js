import React, {useState} from 'react';
import  './style.css';
import Search from './Search.js';
import Upload from './Upload';




function LandingPage () {

    const [uploadClicked, setUploadClicked] = useState(false);
    const [searchClicked, setSearchClicked] = useState(false);
    console.log(searchClicked);

    let result;
    {!uploadClicked? result=<Search uploadClicked={uploadClicked} setUploadClicked={setUploadClicked}  
    searchClicked={searchClicked} setSearchClicked={setSearchClicked}/>: 
    result=<Upload uploadClicked={uploadClicked} setUploadClicked={setUploadClicked}/>}
    return result;
}

export default LandingPage;