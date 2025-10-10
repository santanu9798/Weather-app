import React from 'react';
import './Content.css';

const Home = () => (
  <div className="content-section">
    <div className="hero-section">
      <h1 className="hero-title">Welcome to WeatherApp</h1>
      <p className="hero-subtitle">
        Get accurate weather information for any city around the world
      </p>
      <div className="hero-features">
        <div className="feature-card">
          <span className="feature-icon">🌡️</span>
          <h3>Real-time Temperature</h3>
          <p>Current temperature with feels-like data</p>
        </div>
        <div className="feature-card">
          <span className="feature-icon">💨</span>
          <h3>Wind & Humidity</h3>
          <p>Detailed atmospheric conditions</p>
        </div>
        <div className="feature-card">
          <span className="feature-icon">🌍</span>
          <h3>Global Coverage</h3>
          <p>Weather data for cities worldwide</p>
        </div>
      </div>
    </div>
  </div>
);

const About = () => (
  <div className="content-section">
    <div className="about-container">
      <h2 className="section-title">About WeatherApp</h2>
      <div className="about-content">
        <div className="about-text">
          <p>
            WeatherApp is a modern, responsive web application built with React that provides
            real-time weather information for cities around the globe. Our mission is to deliver
            accurate, up-to-date weather data in a beautiful and user-friendly interface.
          </p>
          <h3>Key Features:</h3>
          <ul className="features-list">
            <li>🎨 Beautiful, responsive design</li>
            <li>🔍 Smart city search functionality</li>
            <li>📊 Comprehensive weather data</li>
            <li>📱 Mobile-friendly interface</li>
            <li>⚡ Fast and reliable</li>
            <li>🌐 Global weather coverage</li>
          </ul>
        
        </div>
      </div>
    </div>
  </div>
);

const Help = () => (
  <div className="content-section">
    <div className="help-container">
      <h2 className="section-title">Help & FAQ</h2>
      <div className="faq-section">
        <div className="faq-item">
          <h3 className="faq-question">How do I search for weather?</h3>
          <p className="faq-answer">
            Simply type the name of any city in the search box and press Enter or click the Search button.
            The app will display current weather conditions for that location.
          </p>
        </div>
        
        <div className="faq-item">
          <h3 className="faq-question">Which cities are supported?</h3>
          <p className="faq-answer">
            In demo mode, we support: New York, London, Tokyo, Paris, and Sydney.
            With a real API key, you can search for any city worldwide.
          </p>
        </div>
        
        <div className="faq-item">
          <h3 className="faq-question">How do I get real weather data?</h3>
          <p className="faq-answer">
            To enable real weather data:
            <br />1. Visit OpenWeatherMap.org and sign up for a free account
            <br />2. Get your API key from the dashboard
            <br />3. Replace the demo API key in the code with your real key
          </p>
        </div>
        
        <div className="faq-item">
          <h3 className="faq-question">What weather information is displayed?</h3>
          <p className="faq-answer">
            The app shows current temperature, feels-like temperature, humidity, wind speed,
            atmospheric pressure, visibility, and min/max temperatures for the day.
          </p>
        </div>
        
        <div className="faq-item">
          <h3 className="faq-question">Is the app mobile-friendly?</h3>
          <p className="faq-answer">
            Yes! The app is fully responsive and works great on desktop computers,
            tablets, and mobile phones.
          </p>
        </div>
        
        <div className="faq-item">
          <h3 className="faq-question">Having issues?</h3>
          <p className="faq-answer">
            If you encounter any problems:
            <br />• Check your internet connection
            <br />• Verify the city name spelling
            <br />• Refresh the page and try again
            <br />• Make sure JavaScript is enabled
          </p>
        </div>
      </div>
      
      <div className="contact-info">
        <h3>Need More Help?</h3>
        <p>If you need additional assistance, please check the README file for detailed documentation.</p>
        <button class="button">Click</button>
      </div>
    </div>
  </div>
);

export { Home, About, Help };