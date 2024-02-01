
import axios from "axios";


async function getForcastingData(latitude, longitude,units) {
    try {
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&units=${units?"metric": "imperial"}&cnt=40&appid=${import.meta.env.VITE_WEATHER_API_KEY}`);
        const forecastData = response.data.list;

        // Filter out duplicate data points for different consecutive days
        const uniqueForecastData = [];
        let previousDay = -1;
        let uniqueDays = 0;
        forecastData.forEach(dataPoint => {
            const currentDay = new Date(dataPoint.dt * 1000).getDay();
            if (currentDay !== previousDay && uniqueDays < 5) {
                uniqueForecastData.push(dataPoint);
                previousDay = currentDay;
                uniqueDays++;
            }
        });

        // console.log('Unique Forecast Data:', uniqueForecastData);
        return uniqueForecastData;
    } catch (error) {
        console.error('Error:', error);
        throw error;
    }
}

export default getForcastingData;