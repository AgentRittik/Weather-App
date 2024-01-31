

import "./DataCard.css"
import Card from "./Card"
function DataCard(){
    return(
        <div className="data-cards mt-5">
            <div className="main-container d-flex justify-content-between gap-2">
                <div className="info card-wrapper d-flex justify-content-between gap-5">
                    <div className="left d-flex flex-column justify-content-between ms-3 mt-4 mb-4 gap-5">
                        <div className="humidity d-flex justify-content-between">
                            <div className="humidity-logo">
                                <img src="https://cdn-icons-png.flaticon.com/128/5664/5664979.png" alt="" />
                            </div>
                            <div className="humidity-data">
                                <h4>Humidity</h4>
                                <span>39%</span>
                            </div>
                        </div>
                        <div className="pressure d-flex justify-content-between">
                            <div className="pressure-logo">
                                <img src="https://cdn-icons-png.flaticon.com/128/5664/5664979.png" alt="" />
                            </div>
                            <div className="pressure-data">
                                <h5>Pressure</h5>
                                <span>1017mbar</span>
                            </div>
                        </div>
                        
                    </div>
                    {/* <div className="divider-line">x</div> */}
                    <div className="right d-flex flex-column justify-content-between me-3 mt-4 mb-4 gap-5">
                        <div className="wind-speed d-flex justify-content-between">
                            <div className="wind-speed-logo">
                                <img src="https://cdn-icons-png.flaticon.com/128/5664/5664979.png" alt="" />
                            </div>
                            <div className="wind-speed-data">
                                <h5>Wind Speed</h5>
                                <span>39%</span>
                            </div>
                        </div>
                        <div className="wind-direction d-flex justify-content-between">
                            <div className="wind-direcction-logo">
                                <img src="https://cdn-icons-png.flaticon.com/128/5664/5664979.png" alt="" />
                            </div>
                            <div className="wind-direction-data">
                                <h5>Wind Direction</h5>
                                <span>East</span>
                            </div>
                        </div>
                        
                    </div>
                </div>
                <div className="forcast card-wrapper">
                    <div className="heading d-flex justify-content-center">
                            <h2>5-day-forcast</h2>
                    </div>
                    <div className="forcast-card d-flex justify-content-around mt-4">
                        <Card/>
                        <Card/>
                        <Card/>
                        <Card/>
                        <Card/>
                        
                        {/* <h1>data</h1>
                        <img src="https://openweathermap.org/img/wn/10d.png" alt="" />
                        <h1>data</h1>
                        <h1>data</h1>
                        <h1>data</h1>
                        <h1>data</h1> */}
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default DataCard;