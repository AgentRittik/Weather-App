
import axios from "axios";


async function getWeatherData(latitude ,longitude,units) {
    try {
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${import.meta.env.VITE_WEATHER_API_KEY}&units=${units?"metric": "imperial"}`);
        console.log(response);
        return response.data;
    } catch (error) {
        return error;
    }
}

export default getWeatherData;