import React from 'react'
import './searchbar.scss'

const SearchBox = (props) => {
    return(
        <input type = 'search' 
            className = "search"
            placeholder = {props.placeholder}
            onChange = {props.handleChange}
        />
    )
}


export default SearchBox;