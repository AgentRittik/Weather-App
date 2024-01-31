
import "./Window.css";
import sun from "../../assets/sun.png"
function Window (){
    return (
        <>
        <div className="container">
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
                    <div className="glassmorphism me-5 mt-5">
                        <div className="current-time">
                            12:00 AM
                        </div>
                        <div>
                            sunset Time , Monday
                        </div>
                    </div>
                </div>
            </div>
        </div>
            
        </>
    )
}

export default Window;