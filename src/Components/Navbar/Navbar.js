import React from 'react'
import WebLogo from '../Images/WebLogo.png'
import './Navbar.css'

function Navbar() {
    return (
        <div className="Navplate">
            <div className="NavBox">
                <div className="NavLogo">
                    <img src={WebLogo} alt='WebLogo' className='NavLogoImg' />
                </div>
                <div className="NavLogin">
                    <button type='submit' className='NavLoginBtn' >Login</button>
                </div>
            </div>
        </div>
    )
}

export default Navbar