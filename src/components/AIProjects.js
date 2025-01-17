import { useState } from 'react';
import AIProjectModal from './AIProjectModal';
import './AIProjects.css';

const AIProjects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: "AI-Assisted Portfolio Development",
      image: "/AI Projects/Thumbnails/portfolio-homepage.jpg",  
      content: {
        overview: {
          title: "Project Overview",
          text: "This portfolio site was developed through collaborative coding with Claude 3 Sonnet, an Anthropic LLM. The project demonstrates how AI can be effectively used as a programming partner while maintaining full developer control over architecture and design decisions."
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
    },
    {
      id: 2,
      title: "Life in 19th Century Hawaii Podcast",
      image: "/AI Projects/Thumbnails/HawaiiPodcast.jpg",
      content: {
        overview: {
          title: "Project Overview",
          text: "Content for Hawaii Podcast project..."
        }
      }
    }
  ];

  return (
    <div className="ai-projects">
      <div className="projects-grid">
        {projects.map(project => (
          <div 
            key={project.id}
            className="project-thumbnail"
            onClick={() => setSelectedProject(project)}
          >
            <img src={project.image} alt={project.title} />
            <h3>{project.title}</h3>
          </div>
        ))}
      </div>

      {selectedProject && (
        <AIProjectModal 
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </div>
  );
};

export default AIProjects; 