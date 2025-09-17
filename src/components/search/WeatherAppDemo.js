import React, { useState, useEffect } from 'react';
import './WeatherApp.css';

const WeatherAppDemo = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [city, setCity] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [isDemo] = useState(true);

  // Mock weather data for demo purposes
  const mockWeatherData = {
    'new york': {
      name: 'New York',
      sys: { country: 'US' },
      dt: Math.floor(Date.now() / 1000),
      weather: [
        {
          main: 'Clear',
          description: 'clear sky',
          icon: '01d'
        }
      ],
      main: {
        temp: 22,
        feels_like: 25,
        temp_min: 18,
        temp_max: 26,
        humidity: 65,
        pressure: 1013
      },
      wind: {
        speed: 3.5
      },
      visibility: 10000
    },
    'london': {
      name: 'London',
      sys: { country: 'GB' },
      dt: Math.floor(Date.now() / 1000),
      weather: [
        {
          main: 'Clouds',
          description: 'overcast clouds',
          icon: '04d'
        }
      ],
      main: {
        temp: 15,
        feels_like: 13,
        temp_min: 12,
        temp_max: 18,
        humidity: 78,
        pressure: 1008
      },
      wind: {
        speed: 4.2
      },
      visibility: 8000
    },
    'tokyo': {
      name: 'Tokyo',
      sys: { country: 'JP' },
      dt: Math.floor(Date.now() / 1000),
      weather: [
        {
          main: 'Rain',
          description: 'light rain',
          icon: '10d'
        }
      ],
      main: {
        temp: 20,
        feels_like: 22,
        temp_min: 17,
        temp_max: 23,
        humidity: 85,
        pressure: 1005
      },
      wind: {
        speed: 2.8
      },
      visibility: 6000
    },
    'paris': {
      name: 'Paris',
      sys: { country: 'FR' },
      dt: Math.floor(Date.now() / 1000),
      weather: [
        {
          main: 'Partly Cloudy',
          description: 'few clouds',
          icon: '02d'
        }
      ],
      main: {
        temp: 18,
        feels_like: 19,
        temp_min: 14,
        temp_max: 21,
        humidity: 70,
        pressure: 1015
      },
      wind: {
        speed: 3.1
      },
      visibility: 9500
    },
    'sydney': {
      name: 'Sydney',
      sys: { country: 'AU' },
      dt: Math.floor(Date.now() / 1000),
      weather: [
        {
          main: 'Sunny',
          description: 'clear sky',
          icon: '01d'
        }
      ],
      main: {
        temp: 25,
        feels_like: 27,
        temp_min: 21,
        temp_max: 28,
        humidity: 60,
        pressure: 1018
      },
      wind: {
        speed: 4.5
      },
      visibility: 10000
    }
  };

  const fetchWeather = async (cityName) => {
    if (!cityName.trim()) {
      setError('Please enter a city name');
      return;
    }

    setLoading(true);
    setError('');

    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 1000));

    const normalizedCity = cityName.toLowerCase().trim();
    const mockData = mockWeatherData[normalizedCity];

    if (mockData) {
      setWeatherData(mockData);
    } else {
      setError(`Weather data for "${cityName}" not available in demo. Try: New York, London, Tokyo, Paris, or Sydney`);
      setWeatherData(null);
    }

    setLoading(false);
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
    const loadDefaultWeather = async () => {
      await fetchWeather('New York');
    };
    loadDefaultWeather();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="weather-app">
      <div className="weather-container">
        <h1 className="app-title">Weather App</h1>
        
        {isDemo && (
          <div className="demo-notice">
            <p>🌟 Demo Mode - Try searching for: New York, London, Tokyo, Paris, or Sydney</p>
          </div>
        )}
        
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
                <span className="detail-label">Country</span>
                <span className="detail-value">{weatherData.sys.country}</span>
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
          <p>📡 For Real Weather Data:</p>
          <ol>
            <li>Get a free API key from <a href="https://openweathermap.org/api" target="_blank" rel="noopener noreferrer">OpenWeatherMap</a></li>
            <li>Replace the demo component with the full API version</li>
            <li>Add your API key to enable live weather data</li>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default WeatherAppDemo;
