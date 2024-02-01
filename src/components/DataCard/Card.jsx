
import "./Card.css";
function Card({dayInfo, logoInfo , description , temp,units}){
    // console.log({dayInfo , logoInfo , description , temp});
    function getDayOfWeek(dt) {
        const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
        const date = new Date(dt * 1000); // Convert Unix timestamp to milliseconds
        const dayOfWeek = daysOfWeek[date.getDay()];
        return dayOfWeek;
    }

    return(
        <>
            <div className="card d-flex justify-content-center">
                <div className="day d-flex justify-content-center mt-1">
                    <h4><span>{getDayOfWeek(dayInfo)}</span></h4>
                </div>
                <div className="card-icon d-flex justify-content-center mt-1">
                    <img src={`https://openweathermap.org/img/wn/${logoInfo}.png`} alt="" />
                </div>
                <div className="description d-flex justify-content-center mt-1">
                    <h6 className="d-flex justify-content-center text-center">{description}</h6>
                </div>
                <div className="temp d-flex justify-content-center mt-1">
                    <h5><span>{temp}&deg;{units? "C":"F"}</span></h5>
                </div>    
            </div>
        </>
    )
}
export default Card;    