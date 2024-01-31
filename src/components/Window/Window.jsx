
import "./Window.css";
import sun from "../../assets/sun.png"
function Window (){
    return (
        <>
        
            <div className="window mt-5 rounded-3">
                <div className="d-flex justify-content-between f">
                    <div className="time d-flex flex-column gap glassmorphism ms-5 mt-5">
                        <div className="weather-logo">
                            <img className="log-img" src={sun} alt="" />
                        </div>
                        <div className="temperature d-flex align-items-center">
                            <h1 className="degree">13&deg;C</h1>
                        </div>
                        <div className="place">
                            Hamirpur, Himachal Pradesh
                        </div>
                    </div>
                    <div className="sub-content glassmorphism me-5 mt-5">
                        <div className="headlines d-flex justify-content-between">
                            <div className="description ms-5">
                                <h1 className="description-text">Rainy</h1>
                            </div>
                            <div className="current-time me-4">
                                <h1>12:00 PM</h1>
                                <div>
                                sunset Time , Monday
                                </div>
                            </div>
                        </div>

                        <div className="sub-details d-flex justify-content-between mt-5">
                            <div className="max-temp ms-5">
                                <h3>Max Temp </h3>
                                <h1 className="degree-1">13&deg;C</h1>
                            </div>
                            <div className="min-temp me-5">
                                <h3 >Min Temp</h3>
                                <h1 className="degree-1">13&deg;C</h1>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
            
        </>
    )
}

export default Window;