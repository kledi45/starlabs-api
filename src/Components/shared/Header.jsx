import React from 'react'
import './Header.scss'
import {FaSearch} from 'react-icons/fa';
import logo from '../../images/logo.png'

export default function Header() {
    return (
        <div className = "header">
            <div className = "logo">
                <img src={logo} alt="logo" />                
            </div>
            <div className = "starlabs">
                <h1>Starlabs API ASSIGNMENT</h1>
            </div>
        </div>
    )
}


