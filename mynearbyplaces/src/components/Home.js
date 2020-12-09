import React from 'react';
import {
    Link
  } from "react-router-dom";
import './Home.css';
import Place from './Place';

class Home extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            places: [],
            keywords: "",
            city: "",
            results: []
        };
    }

    componentDidMount() {
        if (this.state.places.length === 0){
            let api = 'https://hualiangqin-nearbyplaces-api.herokuapp.com/places';
            fetch(api).then(x => x.json()).then(places => {
                this.setState({places: places});
                console.log(places);
            }).catch(e => console.log(e));
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
        console.log(this.state.city);
        const {keywords, city} = this.state;
        
        let api = 'https://hualiangqin-nearbyplaces-api.herokuapp.com/search/' + keywords + '/' +  city;
        fetch(api).then(x => x.json()).then(places => {
            this.setState({results: places});
            console.log(places);
        }).catch(e => console.log(e));
    }

    showAllPlace = () =>{
        let places = this.state.places;
        this.setState({results: places});
    }

    body = () => {
        const {results} = this.state;
        return (
            <div className="results-container">
                {results.length>0 ? 
                results.map(p => <Place key={p.id} place={p}/>)
                :
                "no results"}
            </div>
        )
    }

    render() {

        return (
            <div>
                <div className="main">
                    <h1 className="homepage-title">MyNearbyPlaces</h1>
                    <div className="search-field">
                        <div className="input-wrapper">
                            <span>Find</span>
                            <div className="inputboxes">
                                <input className="input" maxLength="64" placeholder="keyword" name="keywords" value={this.state.keywords} onChange={this.handleChange}></input>
                                <input className="input" maxLength="64" placeholder="city" name="city" value={this.state.city} onChange={this.handleChange}></input>
                            </div>
                            <button onClick={this.clickSearch}>Search</button>
                       
                            <Link to='/addplace'>
                                <button>Add Place</button>
                            </Link>
                            <button onClick={this.showAllPlace}>All Place</button>
                        </div>
                    </div>
                </div>
                {this.body()}
            </div>
        )
    }
}
export default Home;