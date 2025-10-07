import React, { useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import WeatherAppDemo from './components/search/WeatherAppDemo';
import { Home, About, Skills, Work, Qualification, Projects, Contact } from './components/Content/Content';

function App() {
  const [activeSection, setActiveSection] = useState('home');

  const renderContent = () => {
    switch (activeSection) {
      case 'home':
        return <Home />;
      case 'about':
        return <About />;
      case 'skills':
        return <Skills />;
      case 'work':
        return <Work />;
      case 'qualification':
        return <Qualification />;
      case 'projects':
        return <Projects />;
      case 'contact':
        return <Contact />;
      default:
        return <Home />;
    }
  };

  return (
    <div className="App">
      <Header
        activeSection={activeSection}
        onSectionChange={setActiveSection}
      />
      <main className="main-content">
        {renderContent()}
      </main>
    </div>
  );
}

export default App;



