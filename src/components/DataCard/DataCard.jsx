

import "./DataCard.css"
import Card from "./Card"
import { useEffect } from "react";
import SubInfoCard from "../SubInfoCard.jsx/SubInfoCard";
function DataCard({forCastingData ,currentWeatherData, units}){
    // console.log("vishal",forCastingData);
    // useEffect(()=>{
    //     forCastingData.map((data)=>console.log("rr",data));
    //     // console.log("vishal",currentWeatherData , currentWeatherData.main , currentWeatherData.wind);

    // },[currentWeatherData])
    return(
        <div className="data-cards mt-3">
            <div className="main-container d-flex justify-content-between gap-2">
                <SubInfoCard 
                    windData={currentWeatherData.wind}
                    humidityData={currentWeatherData.main.humidity}
                    pressureData={currentWeatherData.main.pressure}
                />
                <div className="forcast card-wrapper">
                    <div className="heading d-flex justify-content-center mt-2">
                            <h2>5-day-forcast</h2>
                    </div>
                    <div className="forcast-card d-flex justify-content-around mt-4">
                        {forCastingData && (
                            forCastingData.map((item)=>{
                                return(
                                    <div>
                                        <Card 
                                            dayInfo={item.dt}
                                            logoInfo={item.weather[0].icon}
                                            description={item.weather[0].description}
                                            temp={item.main.temp}
                                            units={units}
                                        />
                                    </div>
                                )
                                
                            })
                        )}
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default DataCard;