import React from 'react';
import Review from './Review';
import './Place.css';
import {
    Link
  } from "react-router-dom";

class Place extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            showReview: false,
            reviews: []
        };
    }

    fillReviews = (r) => {
        this.setState({reviews: r});
    }

    showOrCollapseReviews = () =>{
        if (this.state.showReview){
            this.setState({showReview: false});
        }else{
            this.setState({showReview: true});
        }
        
    }

    render(){
        console.log("in place");
        const { place } = this.props;
        return(
            <div class="places-container">
                <p>Hello world</p>
                <div>
                    <div>Name: {place.name}</div>
                    <div>Address: {place.address}</div>
                    <div>Type: {place.type}</div>
                </div>
                {this.state.showReview ?
                <p onClick={this.showOrCollapseReviews}>reviews: <i class="down"></i></p>
                :
                <p onClick={this.showOrCollapseReviews}>reviews: <i class="right"></i></p>
                }
                <br />
                <div>
                {this.state.showReview ? 
                place.reviews.map(r => <Review review={r}/>)
                : ''}
                </div>
                <Link to='/addreview'>
                    <button>Add Review</button>
                </Link>
            </div>
        );
    }
}
export default Place;