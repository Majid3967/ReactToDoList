import React, { Component } from 'react';
import DisplayList from './displayList';

class InputField extends Component {

    constructor(props) {
        super(props);
       
        this.state = {
          list: []
        };
       
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    handleDelete = listId => {
        const list = this.state.list.filter(c => c.id !== listId);
        this.setState({list});
    };
    
    handleSubmit(e) {
        let index = this.state.list.length;
        index++;
        if (this._inputElement.value !== "") {
          var newItem = {
            id: index,
            value: this._inputElement.value
          };
       
          this.setState((prevState) => {
            return { 
              list: prevState.list.concat(newItem) 
            };
          });
         
          this._inputElement.value = "";
        }
        e.preventDefault();
      }

    render() { 
        return (
            <React.Fragment>
            <div className="input-group mb-3">
                <form onSubmit = {this.handleSubmit}>
                <input className="form-control" type="text" ref={(a) => this._inputElement = a}/>
                <button className="btn btn-success" type= "submit">Add</button>
                </form>
            </div>
            {this.state.list.map(lists => (<DisplayList key = {lists.id} lists = {lists} onDelete = {this.handleDelete}/>))}
            </React.Fragment>
        );
    }
};
export default InputField;