import React, { useState } from 'react'
import './Header.css'

const Header = ({toggleMode, mode}) => {

    return (
        <div className='header-container' style = {{backgroundColor: mode?'white':'#121212'}}>
            <div className = {mode?"logolight":"logodark"}></div>

            {mode?<div className="nightmode" onClick = {toggleMode}></div>:
            <div className="daymode" onClick = {toggleMode}></div>}
            
            
        </div>
    )
}

export default Header
