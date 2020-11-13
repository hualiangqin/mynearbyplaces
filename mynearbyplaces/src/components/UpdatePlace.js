import React from 'react';
import {Redirect} from 'react-router-dom';
import server from '../ServerInterface/server';

class UpdatePlace extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            id: 0,
            name: "",
            type: "",
            state: "",
            city: "",
            reviews: [],
            submitted: false,
        };
    }

    componentDidMount = () =>{
        const location = this.props.location;
        if (location){
            if(location.state){
                if (location.state.place){
                    let place = location.state.place;
                    this.setState({
                        id: place.id,
                        name: place.name,
                        type: place.type,
                        state: place.state,
                        city: place.city,
                        reviews: place.reviews
                    })
                }
            }
        }
    }

    handleChange = (event) =>{
        const value = event.target.value;
        const name = event.target.name;
        this.setState({[name]: value});
    }

    submitPlace = (event) =>{
        this.setState({submitted: true});

        const {id, name, type, city, state, reviews} = this.state;
        let place = {
            name: name,
            type: type,
            city: city,
            state: state,
            reviews: reviews
        }
        server.updatePlace(id, place);
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
                <label>City: </label>
                <input type="text" name="city" value={this.state.city} onChange={this.handleChange}></input>
                <br />
                <label>State: </label>
                <input type="text" name="state" value={this.state.state} onChange={this.handleChange}></input>
                <br />
                <button type="submit">update</button>
            </form>
        );
    }
}

export default UpdatePlace;