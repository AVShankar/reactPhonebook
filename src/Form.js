import React from "react";
import ReactDOM from "react-dom";

class Form extends React.Component {
    constructor(props)
    {
        super(props)
        this.state = { name: "", phone: "", address: "", pincode: "" }
    }
  handleChange() 
  {
    this.setState({
      name: this.refs.name.value,
      phone: this.refs.phone.value,
      address: this.refs.address.value,
      pincode: this.refs.pincode.value
  })
  }

  send()
  {
    this.props.addContact(this.state)
    this.setState({
        newContact: [{ name: "", phone: "", address: "", pincode: "" }]
    })
    this.unMount()
  }

  unMount() {
    ReactDOM.unmountComponentAtNode(document.getElementById("form"));
  }

  render() {
    return (
      <div className="table-bordered">
        <br />
        <h3>Add New Contact:</h3>
          <div className="form-group">
            <label>Name</label>
            <input
              type="text"
              ref="name"
              onChange={this.handleChange.bind(this)}
              className="form-control"
              placeholder="Contact name"
              autoFocus
            />
          </div>
          <div className="form-group">
            <label>Phone</label>
            <input
              type="text"
              ref="phone"
              onChange={this.handleChange.bind(this)}
              className="form-control"
              placeholder="Phone number"
            />
          </div>
          <div className="form-group">
            <label>Address</label>
            <input
              type="text"
              ref="address"
              onChange={this.handleChange.bind(this)}
              className="form-control"
              placeholder="Contact address"
            />
          </div>
          <div className="form-group">
            <label>Pincode</label>
            <input
              type="text"
              ref="pincode"
              onChange={this.handleChange.bind(this)}
              className="form-control"
              placeholder="Pincode"
            />
          </div>
          <input
            type="submit"
            value="Create"
            className="btn btn-success"
            style={{ alignContent: "center" }}
            onClick={this.send.bind(this)}
          />
          &nbsp;
          <input
            type="submit"
            value="Cancel"
            className="btn btn-danger"
            style={{ alignContent: "center" }}
            onClick={this.unMount.bind(this)}
          />
        <br />
      </div>
    );
  }
}

export default Form;
