import axios from 'axios';

const API_KEY = '49425c91792f05b8f90d618dd8e39ee0';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {

    const url = `${ROOT_URL}&q=${city},us`;
    const request = axios.get(url);

    // console.log('====================================');
    // console.log('Request:', request);
    // console.log('====================================');

    return {
        type : FETCH_WEATHER,
        payload : request   
    };
}
