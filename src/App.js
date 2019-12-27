import React from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.css";
import axios from 'axios'
import Navbar from './Navbar'
import Menu from './Menu'
import Contacts from './Contacts';

class App extends React.Component
{
  state = { allContacts: [{ name: "", phone: "", address: "", pincode: "" }] }

  componentDidMount()
  {
    axios.get("http://localhost:8080/contacts").then(response => {
      this.setState({
        allContacts: response.data
      })
    })
  }

  addContact = (...newContact) => 
  {
    axios.post("http://localhost:8080/contacts",
    {
      name: newContact[0].name, phone: newContact[0].phone, address: newContact[0].address, pincode: newContact[0].pincode 
    }).then(newContact => {
      this.setState({
        allContacts: [...this.state.allContacts, newContact.data]
      })
    }).catch(err => console.log(err))
  }

  handleDelete = (i) => {
    axios.delete("http://localhost:8080/contacts/"+i.id).then(success => {
      console.log('Successfully delted')
      this.setState({
        allContacts: this.state.allContacts.filter(e => e !== i)
    })
    }).catch(err => console.log(err.message))
  }

  render()
  {
    return(
      <div className="container-fluid">
        <Navbar />
        <Menu addContact = {this.addContact} />
        <Contacts handleDelete={this.handleDelete} contactDetails = {this.state.allContacts}/>
      </div>
    )
  }
}

export default App;
