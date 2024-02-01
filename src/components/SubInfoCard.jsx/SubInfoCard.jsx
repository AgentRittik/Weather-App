


import React from 'react'

function SubInfoCard({windData , humidityData , pressureData}) {
    function convertWindSpeed(speedMps) {
        return Math.floor(speedMps * 3.6); // 1 m/s = 3.6 km/h
    }
    
    // Function to convert wind direction from degrees to cardinal directions
    function convertWindDirection(degrees) {
        const directions = ['N', 'NE', 'E', 'SE', 'S', 'SW', 'W', 'NW', 'N'];
        const index = Math.round((degrees % 360) / 45);
        return directions[index];
    }
  return (
    <>
        <div className="info card-wrapper d-flex justify-content-between gap-5">
                    <div className="left d-flex flex-column justify-content-between ms-3 mt-4 mb-4 gap-5">
                        <div className="humidity tag d-flex justify-content-between">
                            <div className="humidity-logo icons">
                                <img src="https://cdn-icons-png.flaticon.com/128/7614/7614514.png" alt="" />
                            </div>
                            <div className="humidity-data content-info">
                                <h6>Humidity</h6>
                                <span>{humidityData}%</span>
                            </div>
                        </div>
                        <div className="pressure tag d-flex justify-content-between">
                            <div className="pressure-logo icons">
                                <img src="https://cdn-icons-png.flaticon.com/128/12815/12815751.png" alt="" />
                            </div>
                            <div className="pressure-data content-info">
                                <h6>Pressure</h6>
                                <span>{pressureData}mbar</span>
                            </div>
                        </div>
                        
                    </div>
                    {/* <div className="divider-line">x</div> */}
                    <div className="right d-flex flex-column justify-content-between me-3 mt-4 mb-4 gap-5">
                        <div className="wind-speed tag  d-flex justify-content-between">
                            <div className="wind-speed-logo icons">
                                <img src="https://cdn-icons-png.flaticon.com/128/8691/8691409.png" alt="" />
                            </div>
                            <div className="wind-speed-data content-info">
                                <h6>Wind Speed</h6>
                                <span>{convertWindSpeed(windData.speed)}km/h</span>
                            </div>
                        </div>
                        <div className="wind-direction tag d-flex justify-content-between">
                            <div className="wind-direcction-logo icons">
                                <img src="https://cdn-icons-png.flaticon.com/128/7614/7614483.png" alt="" />
                            </div>
                            <div className="wind-direction-data content-info">
                                <h6>Wind Direction</h6>
                                <span>{convertWindDirection(windData.deg)}</span>
                            </div>
                        </div>
                        
                    </div>
                </div>
    </>
  )
}

export default SubInfoCard