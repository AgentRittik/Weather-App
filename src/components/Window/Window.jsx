
import "./Window.css";
import sun from "../../assets/sun.png"
function Window ({tempData ,mainData ,city}){
    
    const getBackgroundImage = (weatherMain) => {
        console.log(weatherMain);
        weatherMain = weatherMain.toLowerCase(); // Convert weatherMain to lowercase for case-insensitive comparison
    
        if (weatherMain.includes('hail') || weatherMain.includes('hailstorm')||weatherMain.includes("snow")) {
          return `url("https://img.freepik.com/free-vector/hand-drawn-flat-winter-landscape-illustration_23-2149141517.jpg?size=626&ext=jpg&ga=GA1.1.1672881197.1696448118&semt=ais")`;
        } else if (weatherMain.includes('clear') || weatherMain.includes('sunny')) {
          return 'url("https://img.freepik.com/free-vector/gradient-spring-landscape-concept_23-2148443842.jpg?size=700&ext=jpg&ga=GA1.1.1672881197.1696448118&semt=ais")';
        } else if (weatherMain.includes('rain') || weatherMain.includes('drizzle') || weatherMain.includes('thunderstorm')) {
          return 'url("https://img.freepik.com/free-vector/tsunami-scene-with-thunderstorms_1308-30309.jpg?size=1100&ext=jpg&ga=GA1.1.1672881197.1696448118&semt=ais")';
        } else {
          return 'url("https://img.freepik.com/free-vector/gradient-spring-landscape-concept_23-2148443842.jpg?size=700&ext=jpg&ga=GA1.1.1672881197.1696448118&semt=ais")';
        }
      };
    return (
        <>
        
            <div className="window mt-3 rounded-3"  style={{ 
                // backgroundSize: 'cover',
                // backgroundPosition: 'center',
                backgroundImage: getBackgroundImage(tempData[0].main) // Apply background image dynamically
            }}>
                <div className="d-flex justify-content-between ">
                    <div className="time d-flex flex-column gap glassmorphism ms-5 mt-4">
                        <div className="weather-logo">
                            <img className="log-img" src={sun} alt="" />
                        </div>
                        <div className="temperature d-flex align-items-center">
                            <h1 className="degree">{mainData? Math.floor(mainData.temp) : ""}&deg;C</h1>
                        </div>
                        <div className="place">
                            {city ? city : ""}
                        </div>
                    </div>
                    <div className="sub-content glassmorphism me-5 mt-4">
                        <div className="headlines d-flex justify-content-between">
                            <div className="description ms-5">
                                <h2 className="description-text d-flex justify-content-center">{tempData[0]? tempData[0].description : ""}</h2>
                            </div>
                            <div className="current-time me-4">
                                <h1>12:00 PM</h1>
                                <div>
                                sunset Time , Monday
                                </div>
                            </div>
                        </div>

                        <div className="sub-details d-flex justify-content-between mt-4">
                            <div className="max-temp ms-5">
                                <h3>Max Temp </h3>
                                <h1 className="degree-1">{mainData? Math.floor(mainData.temp_max) : ""}&deg;C</h1>
                            </div>
                            <div className="min-temp me-5">
                                <h3 >Min Temp</h3>
                                <h1 className="degree-1">{mainData? Math.floor(mainData.temp_min): ""}&deg;C</h1>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
            
        </>
    )
}

export default Window;