import React from 'react';
import './AIProjectModal.css';

const AIProjectModal = ({ project, onClose }) => {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <button className="close-button" onClick={onClose}>
          <i className="fas fa-times"></i>
        </button>
        <div className="project-content">
          <h2>{project.title}</h2>
          
          {/* Jobs to be Done Video */}
          {project.id === 3 && (
            <div className="project-video-container">
              <iframe
                src="https://player.vimeo.com/video/1065343045"
                width="100%"
                height="400"
                frameBorder="0"
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
                title="Jobs to be Done Multi-Agent System Demo"
              ></iframe>
            </div>
          )}
          
          {/* Portfolio Project Content */}
          {project.content.overview && (
            <>
              <div className="project-section">
                <h3>{project.content.overview.title}</h3>
                <p>{project.content.overview.text}</p>
              </div>
              
              <div className="project-section">
                <h3>{project.content.technical.title}</h3>
                <p>{project.content.technical.text}</p>
                <ul>
                  {project.content.technical.list.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>

              <div className="project-section">
                <h3>{project.content.process.title}</h3>
                <p>{project.content.process.text}</p>
                <ul>
                  {project.content.process.list.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>

              <div className="project-section">
                <h3>{project.content.learnings.title}</h3>
                <p>{project.content.learnings.text}</p>
                <ul>
                  {project.content.learnings.list.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            </>
          )}

          {/* JTBD Project Content */}
          {project.content.components && (
            <>
              <div className="project-section">
                <p dangerouslySetInnerHTML={{ __html: project.content.description.text }}></p>
              </div>
              
              <div className="project-section">
                <h3>{project.content.components.title}</h3>
                <ol>
                  {project.content.components.list.map((item, index) => (
                    <li key={index} dangerouslySetInnerHTML={{ __html: item }}></li>
                  ))}
                </ol>
              </div>

              <div className="project-section">
                <h3>{project.content.workflow.title}</h3>
                <ol>
                  {project.content.workflow.list.map((item, index) => (
                    <li key={index} dangerouslySetInnerHTML={{ __html: item }}></li>
                  ))}
                </ol>
              </div>

              <div className="project-section">
                <h3>{project.content.technical.title}</h3>
                <ul>
                  {project.content.technical.list.map((item, index) => (
                    <li key={index} dangerouslySetInnerHTML={{ __html: item }}></li>
                  ))}
                </ul>
              </div>

              <div className="project-section">
                <p dangerouslySetInnerHTML={{ __html: project.content.conclusion.text }}></p>
              </div>
            </>
          )}

          {/* Vibe Automation Project Content */}
          {project.content.objectives && (
            <>
              <div className="project-section">
                <p>{project.content.description.text}</p>
              </div>
              
              <div className="project-section">
                <h3>{project.content.objectives.title}</h3>
                <ul>
                  {project.content.objectives.list.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>

              <div className="project-section">
                <h3>{project.content.implementation.title}</h3>
                <ul>
                  {project.content.implementation.list.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>

              <div className="project-section">
                <h3>{project.content.challenges.title}</h3>
                <ul>
                  {project.content.challenges.list.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>

              <div className="project-section">
                <h3>{project.content.learnings.title}</h3>
                <ul>
                  {project.content.learnings.list.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>

              <div className="project-section">
                <p>{project.content.conclusion.text}</p>
              </div>
            </>
          )}

          {/* Podcast Content */}
          {project.content.description && project.content.episodes && (
            <div className="project-section">
              <p dangerouslySetInnerHTML={{ __html: project.content.description.text }}></p>
            </div>
          )}
          
          {project.content.episodes && (
            <div className="episodes-section">
              {project.content.episodes.map((episode, index) => (
                <div key={index} className="episode">
                  <h3>{episode.title}</h3>
                  <p dangerouslySetInnerHTML={{ __html: episode.description }}></p>
                  <div className="spotify-embed">
                    <iframe
                      src={`https://open.spotify.com/embed/episode/${episode.spotifyId}`}
                      width="100%"
                      height="152"
                      frameBorder="0"
                      allowFullScreen=""
                      allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                      title={`Spotify player - ${episode.title}`}
                    ></iframe>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* AI Itinerary (Bolt Hackathon) Project Content */}
          {project.title === "AI Itinerary: Collaborative Trip Planning Platform (Hackathon)" && (
            <>
              <div className="project-section">
                <h3>Project Overview</h3>
                <p>This project is a collaboration among three people working remotely. I managed the Github repository and deployment and built the home page, trip creation, responsive web features.</p>
                <p>Junto is a modern web application that enables groups to collaboratively plan trips together. Built as a comprehensive solution for shared travel planning, it allows multiple users to create itineraries, add activities, and coordinate group adventures in real-time.</p>
                <p><strong>Live Demo:</strong> <a href="https://steady-torte-9514f8.netlify.app" target="_blank" rel="noopener noreferrer">https://steady-torte-9514f8.netlify.app</a></p>
              </div>
              
              <div className="project-section">
                <h3>Key Features</h3>
                <ul>
                  <li>Trip Creation & Management: Users can create detailed trips with dates, participant counts, and custom names</li>
                  <li>Real-time Collaboration: Multiple travelers can join trips via shareable links and contribute simultaneously</li>
                  <li>Interactive Itinerary Builder: Day-by-day activity planning with drag-and-drop functionality</li>
                  <li>Activity Management: Add, edit, and delete activities with details like location, time, cost, and notes</li>
                  <li>Participant Tracking: See who's joining each activity with visual participant indicators</li>
                </ul>
              </div>
              
              <div className="project-section">
                <h3>Technical Highlights</h3>
                <ul>
                  <li>Frontend Stack: React 18 with TypeScript for component-based architecture</li>
                  <li>Type Safety: Full TypeScript implementation for robust development</li>
                  <li>Responsive Design: Mobile-first approach ensuring seamless experience across all devices</li>
                  <li>Modern UI/UX: Clean, intuitive interface with smooth animations and micro-interactions</li>
                  <li>State Management: Implemented with Zustand for efficient, scalable state handling</li>
                  <li>Real-time Sharing: localStorage-based sharing system for instant collaboration</li>
                  <li>Vite for fast development and optimized builds</li>
                  <li>Tailwind CSS for utility-first styling and responsive design</li>
                  <li>React Router for client-side navigation</li>
                  <li>Date-fns for date manipulation and formatting</li>
                </ul>
              </div>
              
              <div className="project-section">
                <h3>Key Technical Decisions</h3>
                <ol>
                  <li><em>Zustand over Redux: Chosen for its simplicity and minimal boilerplate while maintaining powerful state management capabilities</em></li>
                  <li><em>localStorage Persistence: Implemented for offline-first functionality and seamless data sharing</em></li>
                  <li><em>Component Modularity: Organized into feature-based modules (trip creation, itinerary management, collaboration)</em></li>
                  <li><em>Mobile-First Design: Responsive breakpoints ensure optimal experience on all screen sizes</em></li>
                </ol>
              </div>
              
              <div className="project-section">
                <h3>Development Process</h3>
                <ol>
                  <li><em>Created comprehensive Product Requirements Document (PRD)</em></li>
                  <li><em>Foundation: Set up project structure, routing, and basic components</em></li>
                  <li><em>Trip Management: Implemented trip creation, editing, and persistence</em></li>
                  <li><em>Itinerary System: Built day-based activity planning with CRUD operations</em></li>
                  <li><em>Collaboration Features: Added user management, sharing, and real-time updates</em></li>
                  <li><em>Polish & Optimization: Enhanced UX with animations, error handling, and mobile optimization</em></li>
                </ol>
              </div>
              
              <div className="project-section">
                <h3>Challenges Solved</h3>
                <ul>
                  <li><em>State Synchronization: Developed robust system for sharing trip data between users</em></li>
                  <li><em>Mobile Responsiveness: Ensured all interactions work seamlessly on touch devices</em></li>
                  <li><em>Data Persistence: Implemented reliable localStorage system with migration support</em></li>
                  <li><em>User Experience: Created intuitive flows for joining trips and managing activities</em></li>
                  <li><em>Onboarding Flow: Streamlined trip creation with validation and preview</em></li>
                  <li><em>Collaboration: Seamless invite system with shareable links</em></li>
                  <li><em>Activity Management: Intuitive interface for planning daily activities</em></li>
                  <li><em>Cost Tracking: Automatic calculation of trip expenses per participant</em></li>
                  <li><em>Performance: Optimized bundle size and loading times</em></li>
                  <li><em>Accessibility: Proper semantic HTML and keyboard navigation</em></li>
                  <li><em>Error Handling: Graceful fallbacks and user-friendly error messages</em></li>
                  <li><em>Code Quality: Clean, maintainable code with TypeScript safety</em></li>
                </ul>
              </div>
              
              <div className="project-section">
                <h3>Results & Impact</h3>
                <ul>
                  <li><em>Deployment: Successfully deployed to Netlify with automated CI/CD</em></li>
                  <li><em>Performance: Achieved fast loading times with optimized Vite build</em></li>
                  <li><em>User Experience: Created intuitive, collaborative planning experience</em></li>
                  <li><em>Scalability: Built foundation for future features like real-time sync and backend integration</em></li>
                </ul>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default AIProjectModal; 