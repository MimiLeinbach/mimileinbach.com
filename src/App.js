import './App.css';
import { useState } from 'react';
import CaseStudies from './components/CaseStudies';
import AIProjects from './components/AIProjects';

function App() {
  const [activeTab, setActiveTab] = useState('home');
  const [showResume, setShowResume] = useState(false);

  const openResumeInNewTab = () => {
    window.open('/homeintro/Mimi Leinbach Resume.pdf', '_blank');
  };

  const renderContent = () => {
    switch(activeTab) {
      case 'case-studies':
        return <CaseStudies />;
      case 'ai-projects':
        return <AIProjects />;
      case 'home':
      default:
        return (
          <div className="content-container">
            <div className="video-container">
              <div className="video-wrapper">
                <iframe 
                  src="https://player.vimeo.com/video/1047406900?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
                  frameBorder="0"
                  allow="autoplay; encrypted-media"
                  title="Meet Mimi"
                  style={{position: 'absolute', top: 0, left: 0, width: '100%', height: '100%'}}
                ></iframe>
              </div>
            </div>
            <div className="bio-section">
              <h2>Strategic Product Leader</h2>
              <p>
                I'm a product person. I love taking on big, ambitious challenges (like founding a company in an unknown market!) and connecting the dots to find and solve problems with solutions that delight customers with exceptional functionality and quality. I've built award-winning and record-breaking products in markets ranging from educational games and hardware to apparel to Enterprise SaaS. Recently I've been building AI expertise and can't wait to help realize its potential to transform work and lives.
              </p>
              <div className="social-links">
                <button className="icon-button" onClick={openResumeInNewTab}>
                  <i className="far fa-file-alt"></i>
                </button>
                <a 
                  href="https://linkedin.com/in/mimileinbach/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="icon-button"
                >
                  <i className="fab fa-linkedin"></i>
                </a>
              </div>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <div className="header-container">
          <h1>Mimi Leinbach</h1>
          <nav className="tab-menu">
            <ul>
              <li>
                <button 
                  className={`tab-button ${activeTab === 'home' ? 'active' : ''}`}
                  onClick={() => setActiveTab('home')}
                >
                  Home
                </button>
              </li>
              <li>
                <button 
                  className={`tab-button ${activeTab === 'case-studies' ? 'active' : ''}`}
                  onClick={() => setActiveTab('case-studies')}
                >
                  Case Studies
                </button>
              </li>
              <li>
                <button 
                  className={`tab-button ${activeTab === 'ai-projects' ? 'active' : ''}`}
                  onClick={() => setActiveTab('ai-projects')}
                >
                  AI Projects
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      {renderContent()}

      {showResume && (
        <div className="modal-overlay" onClick={() => setShowResume(false)}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <button className="close-button" onClick={() => setShowResume(false)}>
              <i className="fas fa-times"></i>
            </button>
            <div className="resume-content">
              <iframe
                src="/homeintro/Mimi Leinbach Resume.pdf"
                title="Resume"
                width="100%"
                height="800px"
                style={{ border: 'none' }}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
