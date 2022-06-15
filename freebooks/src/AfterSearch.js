import React, {useState} from 'react';
import  './style.css';

function AfterSearch({data}) {
    return (
    
         data.map(item => {
             
          return  (<div>
                    <h3><embed>{item.title}</embed></h3>
                    <h3>{item.firstName}</h3>
                    <h3>{item.lastName}</h3>
                    <h3>{item.category}</h3>
                    <h3>{item.year}</h3>
                    <h3>{item.path}</h3>
                </div>)
        }) 
        
        
    )


}

export default AfterSearch;
