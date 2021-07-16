import React, { Component } from 'react';

class DisplayList extends Component {
    render() { 
        return (
            <React.Fragment>
            <h3 style = {{display: "inline"}}>{this.props.lists.value}</h3>
            <button type="button" className="btn btn-danger" onClick = {() => this.props.onDelete(this.props.lists.id)}>Delete</button>
            <br></br>
            </React.Fragment>
            );
    }
}
 
export default DisplayList;