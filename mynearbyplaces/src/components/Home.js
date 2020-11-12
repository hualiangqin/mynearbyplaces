import React from 'react';
import {
    Link
  } from "react-router-dom";
import './Home.css';
import server from '../ServerInterface/server';
// import places from '../ServerInterface/places';
import Place from './Place';

class Home extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            places: [],
            keywords: "",
            results: []
        };
    }

    componentDidMount() {
        if (this.state.places.length === 0){
            const places = server.fetchPlaces();
            this.setState({places: places})
            console.log(places);
        }
    }

    handleChange = (event) =>{
        const value = event.target.value;
        const name = event.target.name;
        this.setState({[name]: value});
    }

    clickSearch = () => {
        console.log("click");
        console.log(this.state.keywords);
        const _ = require('lodash'); 
        const {keywords, places} = this.state;
        let keywordsArray = keywords.split(" ");
        let placeResults = [];
        for (let i=0; i<keywords.length; i++){
            let kW = keywordsArray[i];
            for (let j=0; j<places.length; j++){
                let place = places[j];
                let name = place.name;
                let address = place.address;
                let type = place.type;

                if (name.includes(kW) || address.includes(kW) || type.includes(kW)){
                    if (placeResults.some(item => _.isEqual(item, place)) === false){
                        placeResults.push(place);
                    }
                }
            }
        }
        console.log(placeResults);
        this.setState({results: placeResults})
    }

    body = () => {
        const {results} = this.state;
        return (
            <div class="results-container">
                {results.length>0 ? 
                results.map(p => <Place place={p}/>)
                :
                "no results"}
            </div>
        )
    }

    updatePlaces = () => {
        const location = this.props.location;
        if (location){
            if(location.state){
                let newplaces = this.state.places;
                if (location.stars){
                    let r = {
                        stars: location.stars,
                        comment: location.comment
                    }
                    for (let i=0; i<this.state.places.length; i++){
                        let place = this.state.places[i];
                        const _ = require('lodash');
                        if (_.isEqual(place, location.state.place)){
                            newplaces.splice(i, 1);
                            place.reviews.push(r);
                            newplaces.push(place);
                        }
                        this.setState({places: newplaces})
                    }
                }else{
                    newplaces.push(location.state.place);
                    this.setState({places: newplaces})
                }
            }
        }
    }

    render() {
        const location = this.props.location;

        return (
            <div class="main">
                {location? this.updatePlaces : ''}
                <h1 class="homepage-title">MyNearbyPlaces</h1>
                <div class="search-field">
                    <div class="input-wrapper">
                        <span>Find</span>
                        <input class="input" maxLength="64" placeholder="find my nearby places" name="keywords" value={this.state.keywords} onChange={this.handleChange}></input>
                        <button onClick={this.clickSearch}>Search</button>
                    </div>
                    <Link to='/addplace'>
                        <button>Add Place</button>
                    </Link>
                </div>
                {this.body()}
            </div>
        )
    }
}
export default Home;