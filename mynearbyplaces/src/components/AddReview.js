import React from 'react';
import {Redirect} from 'react-router-dom';

class AddReview extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            stars: "",
            comment: "",
            submitted: false,
        };
    }

    handleChange = (event) =>{
        const value = event.target.value;
        const name = event.target.name;
        this.setState({[name]: value});
    }

    submitReview = (event) =>{
        this.setState({submitted: true});

        //more to go on
        const {stars, comment} = this.state;
        console.log("stars: " + stars);
        console.log("comment: " + comment);
        event.preventDefault();
    }

    render(){
        let dest = {pathname: '/mynearbyplaces', state: {
            stars: this.state.stars, 
            comment: this.state.comment,
            place: {}
        }};
        
        const location = this.props.location;
        if (location){
            if(location.state){
                if (location.state.place){
                    dest.state.place = location.state.place;
                }
            }
        }
        
        if (this.state.submitted){
            return(
                <Redirect to={dest}/>
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