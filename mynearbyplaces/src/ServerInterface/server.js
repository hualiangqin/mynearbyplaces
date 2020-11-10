// import { rejects } from "assert";
// import { resolve } from "path";
import places from './places';

let server = {
    
    // fetchPlacesWrap: () => {
    //     //later on, connect to server
    //     const fs = require("fs");
    //     fs.readFile("./places.json", (err, data)=>{
    //         if (err){
    //             rejects(err)
    //         }
    //         const places = JSON.parse(data);
    //         resolve(places);
    //     });
    // }

    fetchPlaces: () => {
        return places;
    }
};

export default server;