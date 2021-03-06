import React from 'react';
import Review from './Review';
import './Place.css';
import {
    Link
  } from "react-router-dom";
import server from '../ServerInterface/server';

class Place extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            showReview: false,
            id: 0,
            reviews: []
        };
    }

    componentDidMount() {
        const { place } = this.props;
        let id = place.id;
        let api = 'https://hualiangqin-nearbyplaces-api.herokuapp.com/reviews/' + id;
        fetch(api).then(x => x.json()).then(reviews => {
            this.setState({reviews: reviews});
            console.log(reviews);
        }).catch(e => console.log(e));
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

    deletePlace = (id) => {
        server.removePlace(id);
    }

    render(){
        const {reviews} = this.state;
        const { place } = this.props;
        let id = place.id;
        let dest = {pathname: "/addreview", state: {id: id}}
        // let update = {
        //     pathname: "/updateplace",
        //     state: {
        //         place: place
        //     }
        // }
        return(
            <div className="places-container">
                <div>
                    <div>Name: {place.place_name}</div>
                    <div>Type: {place.place_type}</div>
                    <div>City: {place.city}</div>
                    <div>State: {place.state}</div>
                </div>
                {this.state.showReview ?
                <p onClick={this.showOrCollapseReviews}>reviews: <i className="down"></i></p>
                :
                <p onClick={this.showOrCollapseReviews}>reviews: <i className="right"></i></p>
                }
                <br />
                <div>
                {this.state.showReview ? 
                reviews.map(r => <Review review={r}/>)
                : ''}
                </div>
                <div className="modify-container">
                    <Link to={dest}>
                        <button>Add Review</button>
                    </Link>
                    {/* <button onClick={() => this.deletePlace(id)}>Delete</button>
                    <Link to={update}>
                        <button>Update</button>
                    </Link> */}
                </div>
            </div>
        );
    }
}
export default Place;