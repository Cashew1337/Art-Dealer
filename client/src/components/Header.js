import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

const style = {
    'font-family': 'Roboto Mono',
    'textDecoration': 'none',
    'padding': '10px',
}

function Header({ currentPage, handlePageChange }) {
    return (
        <header>
function Header({ currentPage, handlePageChange }) {
    return (
        <header>
            <div>
             <Link to="/Home" style={style}>Artly</Link>
             <Link to="/Login" style={style}>Login</Link>   
            </div>

            <link rel="preconnect" href="https://fonts.googleapis.com"/>
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
            <link href="https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@500" rel="stylesheet"></link>

            <div className='header_center'>

                {/* Space Bar */}
            
            </div>

            <div className='header_right'>
                
                {/* Drop Downmenu */}
                {/* avatar */}

            </div>
        
        
        </header>


    )
}

export default Header; 