import React, { useState } from 'react'
import './Header.css'

const Header = () => {

    const [mode, setMode] = useState(true);

    return (
        <div className='header-container'>
            <div className = "logo"></div>
            <div className="myname"></div>
            {/* <div
                className='mode-button'
                style={{ justifyContent: mode ? 'flex-start' : 'flex-end' }}
                onClick={() => setMode(!mode)}
            >
                <div className='mode-button-switch' />
            </div> */}
        </div>
    )
}

export default Header
