import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './WeatherApp.css';

const WeatherApp = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [city, setCity] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  // You can get a free API key from OpenWeatherMap
  const API_KEY = 'your_api_key_here'; // Replace with your actual API key
  const API_URL = 'https://api.openweathermap.org/data/2.5/weather';

  const fetchWeather = async (cityName) => {
    if (!cityName.trim()) {
      setError('Please enter a city name');
      return;
    }

    setLoading(true);
    setError('');

    try {
      const response = await axios.get(API_URL, {
        params: {
          q: cityName,
          appid: API_KEY,
          units: 'metric'
        }
      });
      setWeatherData(response.data);
    } catch (err) {
      if (err.response && err.response.status === 404) {
        setError('City not found. Please check the spelling and try again.');
      } else if (err.response && err.response.status === 401) {
        setError('Invalid API key. Please check your API configuration.');
      } else {
        setError('Failed to fetch weather data. Please try again later.');
      }
      setWeatherData(null);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchWeather(city);
  };

  const getWeatherIcon = (iconCode) => {
    return `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
  };

  const formatDate = (timestamp) => {
    return new Date(timestamp * 1000).toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  // Load default city weather on component mount
  useEffect(() => {
    fetchWeather('New York');
  }, []);

  return (
    <div className="weather-app">
      <div className="weather-container">
        <h1 className="app-title">Weather App</h1>
        
        <form onSubmit={handleSubmit} className="search-form">
          <div className="search-input-container">
            <input
              type="text"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              placeholder="Enter city name..."
              className="search-input"
            />
            <button type="submit" className="search-button" disabled={loading}>
              {loading ? 'Searching...' : 'Search'}
            </button>
          </div>
        </form>

        {error && <div className="error-message">{error}</div>}

        {weatherData && (
          <div className="weather-card">
            <div className="weather-header">
              <h2 className="city-name">{weatherData.name}, {weatherData.sys.country}</h2>
              <p className="date">{formatDate(weatherData.dt)}</p>
            </div>

            <div className="weather-main">
              <div className="temperature-section">
                <img
                  src={getWeatherIcon(weatherData.weather[0].icon)}
                  alt={weatherData.weather[0].description}
                  className="weather-icon"
                />
                <div className="temperature">
                  <span className="temp-value">{Math.round(weatherData.main.temp)}</span>
                  <span className="temp-unit">°C</span>
                </div>
              </div>
              
              <div className="weather-description">
                <p className="main-desc">{weatherData.weather[0].main}</p>
                <p className="detailed-desc">{weatherData.weather[0].description}</p>
              </div>
            </div>

            <div className="weather-details">
              <div className="detail-item">
                <span className="detail-label">Feels like</span>
                <span className="detail-value">{Math.round(weatherData.main.feels_like)}°C</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">Humidity</span>
                <span className="detail-value">{weatherData.main.humidity}%</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">Wind Speed</span>
                <span className="detail-value">{weatherData.wind.speed} m/s</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">Pressure</span>
                <span className="detail-value">{weatherData.main.pressure} hPa</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">Visibility</span>
                <span className="detail-value">{(weatherData.visibility / 1000).toFixed(1)} km</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">UV Index</span>
                <span className="detail-value">N/A</span>
              </div>
            </div>

            <div className="temp-range">
              <div className="temp-item">
                <span className="temp-label">Min</span>
                <span className="temp-value">{Math.round(weatherData.main.temp_min)}°C</span>
              </div>
              <div className="temp-item">
                <span className="temp-label">Max</span>
                <span className="temp-value">{Math.round(weatherData.main.temp_max)}°C</span>
              </div>
            </div>
          </div>
        )}

        <div className="api-notice">
          <p>Note: To use this app with real data, you need to:</p>
          <ol>
            <li>Get a free API key from <a href="https://openweathermap.org/api" target="_blank" rel="noopener noreferrer">OpenWeatherMap</a></li>
            <li>Replace 'your_api_key_here' in the code with your actual API key</li>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default WeatherApp;