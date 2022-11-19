import React from 'react';
import './search-box.styles.css'

export const SearchBox = ({placeholder,handlChange }) =>{
    return(
            <input className='search' type="search" placeholder={placeholder} onChange={handlChange}/>      
    );
}