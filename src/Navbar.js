import React from 'react'
import Logo from './icon.png'

class Navbar extends React.Component
{
    render()
    {
        return(
        <div>
            <nav className ="navbar navbar-light bg-light">
                <a className="navbar-brand" href="./">
                <img src={Logo} width="30" height="30" className="d-inline-block align-top" alt="Phonebook" />&nbsp;
                My Phonebook
                </a>
            </nav>
        </div>
        )
    }
}

export default Navbar;