import React from 'react';
import {Redirect} from 'react-router-dom';
import server from '../ServerInterface/server';

class AddPlace extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            name: "",
            type: "",
            state: "",
            city: "",
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

        const {name, type, city, state} = this.state;
        console.log("name: " + name);
        console.log("type: " + type);
        console.log("city: " + city);
        console.log("state:" + state);
        fetch('https://hualiangqin-nearbyplaces-api.herokuapp.com/place', 
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    place_name : name,
                    city: city,
                    state: state,
                    place_type: type
                })
            }).then(x => console.log(x)).catch(e => console.log(e));
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
                <label>City: </label>
                <input type="text" name="city" value={this.state.city} onChange={this.handleChange}></input>
                <br />
                <label>State: </label>
                <input type="text" name="state" value={this.state.state} onChange={this.handleChange}></input>
                <br />
                <button type="submit">submit</button>
            </form>
        );
    }
}

export default AddPlace;