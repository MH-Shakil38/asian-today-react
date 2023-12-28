// WeatherComponent.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Weather = () => {
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    // Replace 'YOUR_API_KEY' with your actual WeatherAPI.com API key
    const apiKey = '0a4b18dd3732468789675921232412';
    const apiUrl = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=bangladesh&aqi=yes`;

    axios.get(apiUrl)
      .then(response => {
        // Set the entire weather data object in the state
        setWeatherData(response.data);
      })
      .catch(error => {
        console.error('Error fetching weather data:', error);
      });
  }, []);
console.log(weatherData)
  return (
    <div>
      {weatherData !== null ? (
        <div>
            <div className="temp_icon">
                        <img src="assets/img/icon/temp.png" alt />
                      </div>
                      <h3 className="temp_count">{weatherData.current.temp_c}</h3>
                      
          <p>Location: {weatherData.location.name}</p>
          {/* Add more details as needed */}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Weather;
