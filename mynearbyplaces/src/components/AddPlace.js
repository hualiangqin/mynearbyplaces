import React from 'react';
import {Redirect} from 'react-router-dom';
import server from '../ServerInterface/server';

class AddPlace extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            name: "",
            type: "",
            address: "",
            submitted: false,
        };
    }

    handleChange = (event) =>{
        const value = event.target.value;
        const name = event.target.name;
        this.setState({[name]: value});
    }

    submitPlace = (event) =>{
        this.setState({submitted: true});

        const {name, type, address} = this.state;
        console.log("name: " + name);
        console.log("type: " + type);
        console.log("address: " + address);
        server.addPlace(name, type, address);
        //more to go on
        event.preventDefault();
    }

    render(){
        if (this.state.submitted){
            return(
                <Redirect to='/mynearbyplaces'/>
            );
        }

        return(
            <form onSubmit={this.submitPlace}>
                <label>Name: </label>
                <input type="text" name="name" value={this.state.name} onChange={this.handleChange}></input>
                <br />
                <label>Type: </label>
                <input type="text" name="type" value={this.state.type} onChange={this.handleChange}></input>
                <br />
                <label>Address: </label>
                <input type="text" name="address" value={this.state.address} onChange={this.handleChange}></input>
                <button type="submit">submit</button>
            </form>
        );
    }
}

export default AddPlace;