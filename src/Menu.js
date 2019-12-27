import React from 'react'
import ReactDOM from 'react-dom'
import Form from './Form'

class Menu extends React.Component
{

    getForm()
    {
        ReactDOM.render(<Form addContact={this.props.addContact} />, document.getElementById('form'))
    }

    render()
    {
        return(
            <div>
                <br></br><br></br>
                <nav className="navbar navbar-light">
                    <p className="navbar-brand">My Contacts</p>
                    <button onClick={this.getForm.bind(this)} className="btn btn-outline-success my-2 my-sm-0" type="submit">Add Contact</button>
                </nav>
                <div id="form"></div>
            </div>
        )
    }
}

export default Menu;
