import React from 'react';
import './Content.css';

const Home = () => (
  <div className="content-section">
    <div className="hero-section">
      <div className="hero-content">
        <h1 className="hero-name">Santanu Sutar 👋</h1>
        <h2 className="hero-title">Frontend Developer💻</h2>
        <p className="hero-description">
          Enthusiastic about open-source and development
        </p>
        <div className="hero-buttons">
          <button className="btn-primary">Say Hello</button>
          <button className="btn-secondary">Scroll Me</button>
        </div>
      </div>
      <div className="hero-image">
        <div className="profile-placeholder">👨‍💻</div>
      </div>
    </div>
  </div>
);

const About = () => (
  <div className="content">
    <div className="about-container">
      <h2 className="section-title">About Me</h2>
      <p className="section-subtitle">My Introduction</p>
      
      <div className="about-content">
        <div className="about-image">
          <div className="about-placeholder">👨‍💻</div>
        </div>
        
        <div className="about-info">
          <div className="about-stats">
            <div className="stat-item">
              <h3>Open Source</h3>
              <p>Active Contributions</p>
            </div>
            <div className="stat-item">
              <h3>Completed</h3>
              <p>50 + Projects</p>
            </div>
            <div className="stat-item">
              <h3>Studies</h3>
              <p>Pursuing C.S.</p>
            </div>
          </div>
          
          <div className="about-text">
            <p>
              I am a passionate Frontend Developer specializing in React. With a focus on
              creating intuitive and engaging user experiences, I have 9 months of experience in
              transforming design concepts into functional, responsive, and scalable
              applications. As a lifelong learner, I am constantly exploring the latest trends and
              technologies in the Frontend landscape to enhance my skills and deliver top-notch
              results.
            </p>
            <button className="btn-primary">Resume</button>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const Skills = () => (
  <div className="section">
    <div className="skills-container">
      <h2 className="section-title">Skills</h2>
      <p className="section-subtitle">My Tech Stack</p>
      
      <div className="skills-grid">
        <div className="skill-category">
          <h3>FrontEnd</h3>
          <div className="skill-items">
            <span className="skill-tag">React</span>
            <span className="skill-tag">Next.js</span>
            <span className="skill-tag">TypeScript</span>
            <span className="skill-tag">Tailwind</span>
            <span className="skill-tag">Shadcn</span>
          </div>
        </div>
        
        <div className="skill-category">
          <h3>State Management</h3>
          <div className="skill-items">
            <span className="skill-tag">Redux</span>
          </div>
        </div>
        
        <div className="skill-category">
          <h3>APIs</h3>
          <div className="skill-items">
            <span className="skill-tag">React Query</span>
          </div>
        </div>
        
        <div className="skill-category">
          <h3>BackEnd</h3>
          <div className="skill-items">
            <span className="skill-tag">Node.js</span>
            <span className="skill-tag">Express</span>
          </div>
        </div>
        
        <div className="skill-category">
          <h3>Database</h3>
          <div className="skill-items">
            <span className="skill-tag">Firebase</span>
            <span className="skill-tag">Supabase</span>
            <span className="skill-tag">MySQL</span>
            <span className="skill-tag">MongoDB</span>
          </div>
        </div>
        
        <div className="skill-category">
          <h3>Testing</h3>
          <div className="skill-items">
            <span className="skill-tag">Postman</span>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const Work = () => (
  <div className="content-section">
    <div className="work-container">
      <h2 className="section-title">Work</h2>
      <p className="section-subtitle">My recent work</p>
      
      <div className="work-grid">
        <div className="work-item">
          <div className="work-image">📂</div>
          <h3>Open Source Contributions</h3>
          <button className="btn-link">View More</button>
        </div>
        
        <div className="work-item">
          <div className="work-image">💼</div>
          <h3>Previous Projects</h3>
          <button className="btn-link">View More</button>
        </div>
        
        <div className="work-item">
          <div className="work-image">🚀</div>
          <h3>Current Projects</h3>
          <button className="btn-link">View More</button>
        </div>
      </div>
    </div>
  </div>
);

const Qualification = () => (
  <div className="content-section">
    <div className="qualification-container">
      <h2 className="section-title">Qualification</h2>
      <p className="section-subtitle">My Personal Journey</p>
      
      <div className="qualification-tabs">
        <button className="tab-btn active">Education</button>
        <button className="tab-btn">Experience</button>
      </div>
      
      <div className="qualification-content">
        <div className="qualification-item">
          <div className="qualification-info">
            <h3>BTech in IT</h3>
            <p>PCCOE Pune</p>
            <span className="qualification-date">2021-Present</span>
          </div>
          <div className="qualification-line"></div>
        </div>
        
        <div className="qualification-item">
          <div className="qualification-info">
            <h3>High School</h3>
            <p>97.77 (MHTCET)</p>
            <span className="qualification-date">2019-2021</span>
          </div>
          <div className="qualification-line"></div>
        </div>
        
        <div className="qualification-item">
          <div className="qualification-info">
            <h3>School</h3>
            <p>86% (Boards)</p>
            <span className="qualification-date">2009-2019</span>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const Projects = () => (
  <div className="content-section">
    <div className="projects-container">
      <h2 className="section-title">Projects</h2>
      <p className="section-subtitle">What I've built</p>
      
      <div className="project-filters">
        <button className="filter-btn active">All</button>
        <button className="filter-btn">Full-Stack</button>
        <button className="filter-btn">UI</button>
      </div>
      
      <div className="projects-grid">
        <div className="project-card">
          <div className="project-image">🤖</div>
          <h3>Ranga: AI Mock Interviewer</h3>
          <div className="project-tech">
            <span className="tech-tag">Next.js</span>
            <span className="tech-tag">Tailwind</span>
            <span className="tech-tag">Shadcn</span>
            <span className="tech-tag">NeonDB</span>
          </div>
          <p>Ranga is an AI-powered mock interviewer designed to help job seekers prepare for their interviews.</p>
          <div className="project-links">
            <button className="btn-primary">Live Demo</button>
            <button className="btn-secondary">GitHub</button>
          </div>
        </div>
        
        <div className="project-card">
          <div className="project-image">📱</div>
          <h3>Instagram Clone</h3>
          <div className="project-tech">
            <span className="tech-tag">Next.js</span>
            <span className="tech-tag">TypeScript</span>
            <span className="tech-tag">MongoDB</span>
            <span className="tech-tag">Prisma</span>
          </div>
          <p>Instagram Clone aims to provide an engaging and user-friendly experience, mirroring popular features.</p>
          <div className="project-links">
            <button className="btn-primary">Live Demo</button>
            <button className="btn-secondary">GitHub</button>
          </div>
        </div>
        
        <div className="project-card">
          <div className="project-image">💰</div>
          <h3>Cryptocurrency Tracker</h3>
          <div className="project-tech">
            <span className="tech-tag">React</span>
            <span className="tech-tag">TypeScript</span>
            <span className="tech-tag">Tailwind</span>
          </div>
          <p>Crypto Assassin, destination for navigating the world of cryptocurrencies with latest trends and insights.</p>
          <div className="project-links">
            <button className="btn-primary">Live Demo</button>
            <button className="btn-secondary">GitHub</button>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const Contact = () => (
  <div className="content-section">
    <div className="contact-container">
      <h2 className="section-title">Contact</h2>
      <p className="section-subtitle">Get in Touch</p>
      
      <div className="contact-content">
        <div className="contact-info">
          <h3>Talk to me</h3>
          
          <div className="contact-methods">
            <div className="contact-method">
              <span className="contact-icon">📧</span>
              <div>
                <h4>Gmail</h4>
                <p>shantanusutar17@gmail.com</p>
                <button className="btn-link">Write me</button>
              </div>
            </div>
            
            <div className="contact-method">
              <span className="contact-icon">💼</span>
              <div>
                <h4>LinkedIn</h4>
                <p>shantanu-sutar-425591238</p>
                <button className="btn-link">Write me</button>
              </div>
            </div>
            
            <div className="contact-method">
              <span className="contact-icon">🐦</span>
              <div>
                <h4>Twitter</h4>
                <p>ShantanuSutar17</p>
                <button className="btn-link">Write me</button>
              </div>
            </div>
          </div>
        </div>
        
        <div className="contact-form">
          <h3>Write me a message</h3>
          <form>
            <input type="text" placeholder="Name" className="form-input" />
            <input type="email" placeholder="Email" className="form-input" />
            <textarea placeholder="Message" className="form-textarea"></textarea>
            <button type="submit" className="btn-primary">Send</button>
          </form>
        </div>
      </div>
    </div>
  </div>
);

export { Home, About, Skills, Work, Qualification, Projects, Contact };