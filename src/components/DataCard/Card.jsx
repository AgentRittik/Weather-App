
import "./Card.css";
function Card(){
    return(
        <>
            <div className="card">
                <div className="day d-flex justify-content-center mt-4">
                    <h3><span>Mon</span></h3>
                </div>
                <div className="card-icon d-flex justify-content-center">
                    <img src="https://openweathermap.org/img/wn/10d.png" alt="" />
                </div>
                <div className="description d-flex justify-content-center">
                    <h5><span>Cloudy</span></h5>
                </div>
                <div className="temp d-flex justify-content-center">
                    <h4><span>13&deg;C</span></h4>
                </div>    
            </div>
        </>
    )
}
export default Card;    