import React from 'react';
import {Redirect} from 'react-router-dom';
import server from '../ServerInterface/server';

class AddReview extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            stars: "",
            comment: "",
            id: 0,
            submitted: false,
        };
    }

    componentDidMount = () =>{
        const location = this.props.location;
        let id = 0;
        if (location){
            if(location.state){
                id = location.state.id ? location.state.id : '';
                console.log(id);
                this.setState({id: id});
            }
        }
    }

    handleChange = (event) =>{
        const value = event.target.value;
        const name = event.target.name;
        this.setState({[name]: value});
    }

    submitReview = (event) =>{
        this.setState({submitted: true});
        const id = this.state.id;

        //more to go on
        const {stars, comment} = this.state;
        console.log("stars: " + stars);
        console.log("comment: " + comment);
        let review = {
            stars: stars,
            comment: comment
        }
        server.addReview(id, review);
        event.preventDefault();
    }

    render(){

        if (this.state.submitted){
            return(
                <Redirect to='/mynearbyplaces'/>
            );
        }

        return(
            <form onSubmit={this.submitReview}>
                <label>Stars: </label>
                <input type="text" name="stars" value={this.state.stars} onChange={this.handleChange}></input>
                <br />
                <label>Comment: </label>
                <input type="text" name="comment" value={this.state.comment} onChange={this.handleChange}></input>
                <button type="submit">submit</button>
            </form>
        );
    }
}

export default AddReview;