

import axios from "axios";


async function getLatAndLon(cityName) {
    try {
        const response = await axios.get(`http://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit=1&appid=${import.meta.env.VITE_WEATHER_API_KEY}`);
        console.log(response);
        return response.data[0];
    } catch (error) {
        return error;
    }
}

export default getLatAndLon;