import React, { useState, useEffect } from "react";

import DataCard from "./DataCard/DataCard";
import Nabbar from "./Nabbar/Nabbar";
import getWeatherData from "../Api/getWeaterData";
import getForcastingData from "../Api/getForcastingData";
import getLatAndLon from "../Api/getLatAndLon";
import Window from "./Window/Window";


function Home(){
    const [coords, setCoords] = useState({});
    const [weatherData, setWeatherData] = useState("");
    const [forCastingData , setForCastingData] = useState("");
    const [units,setUnits] = useState(true);
    useEffect(() => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function(position) {
                const latitude = position.coords.latitude;
                const longitude = position.coords.longitude;
                // console.log('Latitude:', latitude);
                // console.log('Longitude:', longitude);
                setCoords({ latitude :latitude, longitude:longitude});
            }, function(error) {
                console.log('Error getting geolocation:', error.message);
            });
        } else {
            console.log('Geolocation is not supported by this browser.');
        }
    }, []);

    useEffect(() => {
        console.log("inside");
        if(coords.latitude && coords.longitude){
            getWeatherData(coords.latitude, coords.longitude , units)
                .then(
                    (data) =>{
                        // console.log("hello" ,data);
                        setWeatherData(data);
                    }    
                );
            getForcastingData(coords.latitude, coords.longitude, units)
                .then(
                    (data) =>{
                        // console.log("hello" ,data);
                        setForCastingData(data);
                    }    
                );    
        }
    }, [coords,units]);

    useEffect(()=>{
        console.log("log",weatherData , weatherData.main ,weatherData.wind);

    },[weatherData])

    function handleSearch(name){
        getLatAndLon(name)
            .then(
                (data) =>{
                    console.log("hello" ,data);
                    const {lat,lon} = data;
                    console.log(lat,lon);
                    setCoords({latitude:lat , longitude:lon});
                }    
            );
    }
    
    return(
        <>
        { weatherData && forCastingData &&
        (
            <>
            <Nabbar handleSearch={(name)=>handleSearch(name)} units={units} setUnits={setUnits}/>
            <div className="container">
                <Window tempData={weatherData.weather} mainData={weatherData.main} city={weatherData.name} units={units}/>
                <DataCard forCastingData ={forCastingData} currentWeatherData={weatherData} units={units}/>
            </div>
            </>
        )}
        </>
     )
}

export default Home;