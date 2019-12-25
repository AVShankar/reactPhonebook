import React from "react";

class Contacts extends React.Component {

  render() 
  {

    return (
      <div>
        <br />
        <div className="row">
        {this.props.contactDetails.map(i => {
          return (
            <div className="card col-sm-3" key={i.name} style={{ width: "18rem" }}>
              <div className="card-body">
                <h5 className="card-title">{i.name}</h5>
                <h6 className="card-subtitle mb-2 text-muted">{i.phone}</h6>
                <p className="card-text">{i.address}</p>
                <p className="card-text">{i.pincode}</p>
                <button id={i.id} className="btn btn-danger" onClick={this.props.handleDelete.bind(this, i)}>Delete</button>
              </div>
            </div>
          );
        })}
        </div>
      </div>
    );
  }
}

export default Contacts;
