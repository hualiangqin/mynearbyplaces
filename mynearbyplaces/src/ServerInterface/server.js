// import { rejects } from "assert";
// import { resolve } from "path";
import places from './places';

let add = (n, t, a) =>{
    let place = {
        name: n,
        type: t,
        address: a,
        review: []
    }
    console.log(place);
    places.push(place);
    console.log(places);
}


let server = {
    
    fetchPlaces: () => {
        return places;
    },

    addPlace: (name, type, address) => {
        add(name, type, address)
    }
};

export default server;