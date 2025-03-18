import React, { useState } from 'react';
import './App.css';
import CaseStudies from './components/CaseStudies';
import AIProjects from './components/AIProjects';
import Contact from './components/Contact';
import AIProjectModal from './components/AIProjectModal';

function App() {
  const [activeTab, setActiveTab] = useState('home');
  const [showAIPortfolioModal, setShowAIPortfolioModal] = useState(false);
  
  const aiPortfolioProject = {
    id: 1,
    title: "AI-Assisted Portfolio Development",
    content: {
      overview: {
        title: "Project Overview",
        text: "I built this website with Cursor, utilizing collaborative coding with Claude 3.5 Sonnet, an Anthropic LLM. The project demonstrates how AI can be effectively used as a programming partner while maintaining full developer control over architecture and design decisions."
      },
      technical: {
        title: "Technical Implementation",
        text: "Built with React and modern CSS, the site features responsive design, component-based architecture, and clean, maintainable code. Key features include:",
        list: [
          "Dynamic content rendering with React components",
          "Markdown-based case study system",
          "Modal windows for detailed content",
          "Responsive video embedding",
          "CSS Grid and Flexbox layouts"
        ]
      },
      process: {
        title: "AI Collaboration Process",
        text: "Claude served as a programming partner throughout development, helping with:",
        list: [
          "Code implementation and debugging",
          "CSS styling and layout solutions",
          "Component structure recommendations",
          "Best practice suggestions",
          "Real-time code reviews and improvements"
        ]
      },
      learnings: {
        title: "Key Learnings",
        text: "This project demonstrated how AI can enhance the development process while maintaining high code quality:",
        list: [
          "AI excels at suggesting implementation details while humans drive overall architecture",
          "Iterative AI collaboration enables rapid prototyping and refinement",
          "Clear communication with AI leads to better code solutions",
          "AI can help maintain consistency across a codebase",
          "Human oversight remains crucial for final design and implementation decisions"
        ]
      }
    }
  };

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const toggleAIPortfolioModal = () => {
    setShowAIPortfolioModal(!showAIPortfolioModal);
  };

  const renderContent = () => {
    switch(activeTab) {
      case 'case-studies':
        return <CaseStudies />;
      case 'ai-projects':
        return <AIProjects />;
      case 'contact':
        return <Contact />;
      case 'home':
      default:
        return (
          <div className="home-content-wrapper">
            <div className="home-content">
              <div className="right-content">
                <div className="video-container">
                  <iframe 
                    src="https://player.vimeo.com/video/1066360982"
                    width="640" 
                    height="360" 
                    frameBorder="0" 
                    allow="autoplay; fullscreen; picture-in-picture" 
                    allowFullScreen
                    title="Mimi Portfolio Video"
                  ></iframe>
                </div>
              </div>
              <div className="left-content">
                <h2>Entrepreneurial Product Leader</h2>
                <p>I transform complex technical challenges into intuitive solutions that drive measurable business growth and delight millions of users. I bring a unique perspective that balances innovation with practical execution. I connect the dots between emerging technologies, business objectives, and human needs to create products that make a meaningful impact.</p>
                <p>I built this site with Cursor using Claude as a coding assistant. <span className="learn-more" onClick={toggleAIPortfolioModal}>Learn More</span></p>
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
                  onClick={() => handleTabChange('home')}
                >
                  Home
                </button>
              </li>
              <li>
                <button 
                  className={`tab-button ${activeTab === 'ai-projects' ? 'active' : ''}`}
                  onClick={() => handleTabChange('ai-projects')}
                >
                  AI Projects
                </button>
              </li>
              <li>
                <button 
                  className={`tab-button ${activeTab === 'case-studies' ? 'active' : ''}`}
                  onClick={() => handleTabChange('case-studies')}
                >
                  Case Studies
                </button>
              </li>
              <li>
                <button 
                  className={`tab-button ${activeTab === 'contact' ? 'active' : ''}`}
                  onClick={() => handleTabChange('contact')}
                >
                  Contact
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      
      <main>
        {renderContent()}
      </main>
      
      {showAIPortfolioModal && (
        <AIProjectModal 
          project={aiPortfolioProject}
          onClose={toggleAIPortfolioModal}
        />
      )}
    </div>
  );
}

export default App;
