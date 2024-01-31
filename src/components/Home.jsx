import React, { useState, useEffect } from "react";

import DataCard from "./DataCard/DataCard";
import Nabbar from "./Nabbar/Nabbar";

import Window from "./Window/Window";

function Home(){
    const [coords, setCoords] = useState({ latitude: 0, longitude: 0 });
    useEffect(() => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function(position) {
                const latitude = position.coords.latitude;
                const longitude = position.coords.longitude;
                console.log('Latitude:', latitude);
                console.log('Longitude:', longitude);
                setCoords({ latitude, longitude });
            }, function(error) {
                console.log('Error getting geolocation:', error.message);
            });
        } else {
            console.log('Geolocation is not supported by this browser.');
        }
    }, [])
    // useEffect(() => {
    //     alert(`Latitude: ${coords.latitude}, Longitude: ${coords.longitude}`);
    // }, [coords]);
    
    return(
        <>
            <Nabbar/>
            <div className="container">
            <Window/>
            <DataCard/>
            </div>
            
        </>
     )
}

export default Home;