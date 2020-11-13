// import { rejects } from "assert";
// import { resolve } from "path";
import places from './places';
let start = 5;

let add = (n, c, s, t) =>{
    start++;
    let i = start;
    let place = {
        id: i,
        name: n,
        city: c,
        state: s,
        type: t,
        reviews: []
    }
    console.log(place);
    places.push(place);
    console.log(places);
}

let remove = (i) =>{
    console.log("remove: "+i);
    let place = places.find(e => e.id === i);
    let index = places.indexOf(place);
    places.splice(index, 1);
}

let update = (i, p) =>{
    let place = places.find(e => e.id === i);
    if (p.name !== ''){
        place.name = p.name;
    }
    if (p.city !== ''){
        place.city = p.city;
    }
    if (p.state !== ''){
        place.state = p.state;
    }
    if (p.type !== ''){
        place.type = p.type;
    }
}

let addreview = (i, r) =>{
    let place = places.find(e => e.id === i);
    console.log(place);
    console.log(r);
    place.reviews.push(r);
}

let server = {

    fetchPlaces: () => {
        return places;
    },

    addPlace: (name, city, state, type) => {
        add(name, city, state, type);
    },

    removePlace: (i) => {
        remove(i);
    },

    updatePlace: (i, p) => {
        update(i, p);
    },

    addReview: (i, r) => {
        addreview(i, r);
    }
};

export default server;