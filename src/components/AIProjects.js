import { useState } from 'react';
import AIProjectModal from './AIProjectModal';
import './AIProjects.css';

const AIProjects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: "Vibe Automation: AI News to LinkedIn Post",
      image: process.env.PUBLIC_URL + "/AI Projects/Thumbnails/AINewsAutomation.jpg",
      content: {
        description: {
          text: "The 'Vibe Automation' project focused on streamlining the process of curating and distributing AI-related news through an intelligent automation system. Leveraging tools like Zapier, Claude 3.5, and Google Sheets, the project transformed a manual, multi-step process into an efficient, task and token-optimized workflow capable of gathering, evaluating, summarizing, and distributing daily AI news to a LinkedIn audience."
        },
        objectives: {
          title: "Key Objectives",
          list: [
            "Reliable News Sourcing: Automate the collection of news from curated AI-focused RSS feeds, ensuring the delivery of timely and relevant content.",
            "Human-Centered Scoring: Articles were evaluated based on their industry significance, business relevance, and tech innovation, with a particular focus on human-centered AI topics such as UX, ethics, explainability, and compliance.",
            "Task Efficiency: Minimize the monthly Zapier task usage while ensuring the workflow remained efficient and scalable, with a maximum limit of 750 tasks per month.",
            "LinkedIn Distribution: Automatically summarize top articles in a natural, engaging voice suitable for LinkedIn posts, ready for manual review and publishing."
          ]
        },
        implementation: {
          title: "Implementation Details",
          list: [
            "RSS Feeds & Article Scraping: The automation pulled AI news from a set of selected, curated RSS feeds using Zapier's RSS by Zapier integration. Each morning, the system collected the latest articles, ready for processing.",
            "Scoring & Relevance Filtering: Leveraging Claude 3.5, the system evaluated each article based on predefined relevance criteria, with human-centered factors like UX, ethics, and compliance given higher priority. The content was rated and filtered to ensure quality and relevance.",
            "Summarization: Once filtered, the articles were processed into concise summaries. Claude 3.5 was utilized for natural language generation, ensuring a human-like, engaging tone suitable for LinkedIn.",
            "Google Sheets Integration: Relevant articles, after being evaluated and summarized, were stored in Google Sheets for tracking and future reference. Articles that were duplicates or did not meet the human-centered AI relevance criteria were discarded.",
            "Efficiency Refinement: Over time, we refined the workflow to ensure that tasks were optimized within the constraints of Zapier's task limits. We achieved a balance between functionality and cost efficiency."
          ]
        },
        challenges: {
          title: "Challenges",
          list: [
            "API Integration: A key challenge was managing the API interactions between Zapier and Claude, especially ensuring that article scoring, summarization, and the generation of the LinkedIn post functioned seamlessly across the system.",
            "Content Relevance: Defining relevance criteria for human-centered AI content posed challenges, as the landscape of AI news evolves rapidly. Maintaining a consistent and meaningful relevance scoring system required ongoing fine-tuning.",
            "Task Efficiency: Striking the right balance between task usage in Zapier and the system's complexity was difficult, especially considering the task limit. Optimizing the number of tasks while maintaining a high-quality output required deep knowledge of Zapier's capabilities and limits."
          ]
        },
        learnings: {
          title: "Key Learnings",
          list: [
            "Automation Scalability: One of the key learnings was the importance of designing workflows that can scale efficiently while respecting task limits. The project highlighted how well-designed automations can drastically reduce manual effort without compromising quality.",
            "Formatting Compatibility: The text needed to be reformatted multiple times to be parsed by both Zapier and Claude. The dates also had to be standardized so we could work only with articles published in the last day.",
            "Data-Driven Decision Making: The scoring system, refined through multiple iterations, demonstrated how leveraging data can improve the precision of content selection and enhance the relevance of distributed news.",
            "Human-Centered AI Application: This project underscored the importance of integrating human-centered AI principles into automation systems, ensuring the content not only reflects technical excellence but also resonates with human interests, ethics, and values.",
            "Cross-Disciplinary Collaboration: Effective collaboration across different teams was crucial to ensure that the project addressed both technical and content-related challenges. Engaging content experts, product managers, and AI specialists throughout the process ensured that the end result met both the business goals and the audience's needs."
          ]
        },
        conclusion: {
          text: "The 'Vibe Automation' AI News project exemplifies how AI-driven automation can be harnessed to streamline content curation, scoring, and distribution processes while maintaining human-centered principles. By utilizing a mix of Zapier, Claude, and Google Sheets, the system not only saved valuable time but also provided personalized, relevant content in an efficient manner. This project serves as a prime example of how AI can enhance business operations, promote thought leadership, and optimize workflows across the AI and product development landscapes."
        }
      }
    },
    {
      id: 2,
      title: "AI Itinerary: Collaborative Trip Planning Platform (Hackathon)",
      image: process.env.PUBLIC_URL + "/AI Projects/Thumbnails/BoltHackathon.png",
      content: {
        description: {
          text: "AI Itinerary is a responsive web application designed to streamline collaborative group trip planning. Built during a hackathon with a distributed team of three developers, the platform enables friends to seamlessly coordinate travel plans through real-time collaboration and intuitive design."
        },
        features: {
          title: "Key Features",
          list: [
            "Trip Creation & Management: Users can create trips with customizable dates, destinations, and participant counts",
            "Dynamic Itinerary Generation: Automatically generates day-by-day views based on trip duration",
            "Collaborative Activity Planning: Team members can add, edit, and join activities with location, timing, and cost tracking",
            "Real-time Collaboration: Shareable links enable instant team collaboration without authentication barriers",
            "Cost Management: Automatic calculation of per-participant expenses and trip totals",
            "Responsive Design: Mobile-first approach ensuring seamless experience across all devices"
          ]
        },
        technical: {
          title: "Technical Implementation",
          list: [
            "Frontend: React 18 with TypeScript for type safety and developer experience",
            "State Management: Zustand for lightweight, scalable state management",
            "Routing: React Router for seamless navigation",
            "Styling: Tailwind CSS with custom design system featuring adventure-themed aesthetics",
            "Data Persistence: Local storage with shareable link functionality for MVP deployment",
            "Architecture: Modular component structure designed to minimize merge conflicts in team development"
          ]
        },
        role: {
          title: "My Role",
          text: "Lead developer for trip creation and management features. Architected the core trip data structure and state management, implemented form validation and user experience flows, and designed the foundational component library for team consistency."
        },
        highlights: {
          title: "Technical Highlights",
          list: [
            "Zero-authentication MVP using shareable links and local storage",
            "Real-time state synchronization across multiple browser sessions",
            "Responsive design system with consistent spacing and typography",
            "Performance-optimized with lazy loading and efficient re-renders"
          ]
        },
        impact: {
          title: "Impact",
          text: "Delivered a fully functional MVP within hackathon timeframe, demonstrating ability to rapidly prototype, collaborate effectively in distributed teams, and create user-centered solutions under tight deadlines."
        },
        conclusion: {
          text: "This project showcases my ability to lead technical architecture decisions, collaborate effectively in fast-paced environments, and deliver polished user experiences with modern web technologies."
        }
      }
    },
    {
      id: 3,
      title: "Jobs to be Done Multi-Agent System",
      image: process.env.PUBLIC_URL + "/AI Projects/Thumbnails/JTBD_multi_agent_system.jpg",
      content: {
        description: {
          text: "This prototype multi-agent system is a specialized analytical tool that applies the Jobs to Be Done (JTBD) framework to user research data, helping product teams understand what users are truly trying to accomplish. It solves two main problems:<br><br>1. Customer feedback tends to be scattered across enterprise organizations, with structured and unstructured data collected and maintained by different functions. This tool would bring this data together to inform roadmap planning.<br><br>2. Jobs to be Done is a powerful framework for understanding customer needs to find product-market fit, but applying it requires specialized training and identifying the right level of specificity is challenging. This tool would help teams apply the methodology precisely and consistently."
        },
        components: {
          title: "Key Components",
          list: [
            "<strong>Triage Agent</strong> - Evaluates incoming queries and determines if there's sufficient data to provide a complete analysis. It routes queries based on data completeness.",
            "<strong>JTBD Agent</strong> - The core analytical engine that:<br>- Loads and processes research data related to specific topics<br>- Extracts \"jobs\" (tasks users want to accomplish) from raw data<br>- Classifies jobs into three types: functional, social, and emotional<br>- Clusters related jobs into meaningful themes using TF-IDF vectorization and K-means clustering<br>- Ranks themes by importance based on frequency<br>- Provides reliability assessments for the analysis",
            "<strong>Multi-Agent System Coordinator</strong> - Orchestrates the agents and manages the overall workflow."
          ]
        },
        workflow: {
          title: "How It Works",
          list: [
            "A user submits a query about a specific topic (e.g., \"online grocery shopping\")",
            "The Triage Agent assesses available data and determines if it's complete",
            "The JTBD Agent analyzes the data to identify jobs and themes",
            "Results are categorized into functional, social, and emotional dimensions",
            "The system provides visualizations with appropriate color coding (green for functional, purple for social, blue for emotional)"
          ]
        },
        technical: {
          title: "Technical Features",
          list: [
            "<strong>Natural Language Processing</strong> for extracting and classifying jobs",
            "<strong>Unsupervised machine learning</strong> (K-means and TF-IDF) for theme clustering",
            "<strong>Silhouette scoring</strong> to determine optimal cluster counts",
            "<strong>FastAPI backend</strong> for API services",
            "<strong>React frontend</strong> for visualization and interaction"
          ]
        },
        conclusion: {
          text: "This system helps product teams move beyond feature requests to understand the underlying needs and motivations driving user behavior, enabling more strategic product decisions."
        }
      }
    },
    {
      id: 4,
      title: "AI-Assisted Portfolio Development",
      image: process.env.PUBLIC_URL + "/AI Projects/Thumbnails/portfolio-homepage.jpg",
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
    },
    {
      id: 5,
      title: "Life in 19th Century Hawaii Podcast",
      image: process.env.PUBLIC_URL + "/AI Projects/Thumbnails/HawaiiPodcast.jpg",
      content: {
        description: {
          text: "I produced this podcast using Notebook LM. It's based on <em>The Memoirs of Elizabeth Kinau Wilder</em> by Elizabeth Leslie Wight, published in 1909. As the daughter of a missionary doctor and close advisor to King Kamehameha III, Elizabeth observes the tumultous transition from old time Hawaii in 1831 to the tragic loss of the kingdom in 1893 from an intimate vantage point. It's a fascinating and engaging story."
        },
        episodes: [
          {
            title: "Episode 1: Birth and Earliest Recollections",
            description: "Based on Chapter 1 from <em>The Memoirs of Elizabeth Kinau Wilder</em>, this episode details her childhood in 19th-century Honolulu. Her narrative vividly portrays daily life within a missionary family, including interactions with Hawaiian royalty and culture. The text covers various events, from a near-adoption by a chiefess to a harrowing volcano trip, showcasing the unique environment and challenges of the era.",
            spotifyId: "2DJceJhfUDXWa9mxc2eQto"
          },
          {
            title: "Episode 2: Family Letters",
            description: "This episode covers Chapter 2 from <em>The Memoirs of Elizabeth Kinau Wilder</em>. The chapter is made up of letters discussing the appointment and preparations of Gerrit P. Judd, Elizabeth's father, as a missionary physician. It also features personal accounts from Laura Fish Judd, Elizabeth's mother, about her upbringing and decision to join the mission. Further, the memoirs chronicle the early lives of Elizabeth and her brother Gerrit, including their childhood in Hawaii and reflections on their faith. Finally, correspondence from other individuals associated with the mission provides additional context and perspectives on the era.",
            spotifyId: "4h5FMG65wONq5eeFWQL7Tg"
          },
          {
            title: "Episode 3: Childhood",
            description: "This episode covers Chapter 3 from <em>The Memoirs of Elizabeth Kinau Wilder</em>, offering a glimpse into her childhood in 19th-century Hawaii. The narrative details family life, including a disastrous sea voyage, and vividly portrays the social and political landscape of the era. The memoirs highlight the role of her father, Dr. Gerrit P. Judd, a significant figure in Hawaiian politics, during a period of British occupation. Personal anecdotes are interwoven with observations on missionary life, social customs, and political events, such as the British attempt to annex the islands.",
            spotifyId: "1OOgDLxj44tPxRO3Ug9wE6"
          },
          {
            title: "Episode 4: Sweet Home",
            description: "Chapter 4 of <em>The Memoirs of Elizabeth Kinau Wilder</em> details her family's construction of their home, \"Sweet Home,\" and their vibrant social life. The narrative interweaves personal anecdotes—such as humorous mishaps with a donkey and a near-drowning—with accounts of significant political events, including a French occupation and her father's diplomatic mission to Europe and the United States. The excerpts also include letters from her father and Prince Alexander Liholiho, offering further insights into their experiences abroad. The writing showcases the family's interactions with Hawaiian royalty and prominent figures while highlighting both the joys and challenges of their daily lives.",
            spotifyId: "2vK5f2adunb6pCyGBe9JOa"
          },
          {
            title: "Episode 5: Trip East",
            description: "This episode covers Chapter 5 from <em>The Memoirs of Elizabeth Kinau Wilder</em>, detailing her family's life in 19th-century Honolulu. The narrative covers a variety of events, including a disastrous steamship trip, a sailor's riot endangering her family, and the devastating smallpox epidemic. It also recounts her family's travels to the United States, their experiences there, and Wilder's eventual engagement. The memoir offers a vivid portrait of life in 19th-century Hawaii, alongside observations of American society, all from a personal perspective. Wilder's writing style is engaging and detailed, rich in sensory descriptions and emotional reflections.",
            spotifyId: "2w2GX3tBG3G1mz1087O3nz"
          },
          {
            title: "Episode 6: Jarves Island",
            description: "Chapter 6 of <em>The Memoirs of Elizabeth Kinau Wilder</em> details her husband Samuel Gardner Wilder's adventurous life, from impoverished beginnings in Massachusetts to striking it rich in California's gold rush. The narrative focuses on their time spent on Jarves Island, where Wilder oversaw guano mining, and includes excerpts from letters written by Wilder, his wife, and her sister Laura, describing the island's harsh conditions, wildlife, and the challenges of living there. The accounts offer a vivid portrayal of life on a remote Pacific island in the mid-19th century, including descriptions of daily life, social interactions, and the eventual move to a sugar plantation in Hawaii. The memoir concludes with the birth of their son Willie and the family's subsequent relocation.",
            spotifyId: "6ErpXiOKWUXFwUGeKJDo5d"
          },
          {
            title: "Episode 7: Kualoa",
            description: "Chapter 7 from <em>The Memoirs of Elizabeth Kinau Wilder</em> details her family's experiences establishing a sugar plantation at Kualoa, Oahu, in the 1860s. The narrative chronicles the daily life on the plantation, including challenges with labor, weather, and the environment, as well as heartwarming and tragic events involving family members and employees. It provides intimate glimpses into the Wilder family's joys and sorrows, from daily routines and social gatherings to the devastating loss of their son, Willie. The journal entries offer a parallel perspective on plantation operations, highlighting the difficulties of running the business and the health issues among the workers. The overall tone conveys both the beauty of the Hawaiian landscape and the harsh realities of pioneering life in 19th-century Hawaii.",
            spotifyId: "1Ce5xiJZYavqQpZ6XJSdrB"
          },
          {
            title: "Episode 8: Honolulu",
            description: "Chapter 8 from <em>The Memoirs of Elizabeth Kinau Wilder</em> recounts significant events, including the visit of the Duke of Edinburgh, her husband's business ventures, and their social life among Hawaiian royalty and American dignitaries. The memoirs also document family tragedies, such as the deaths of her parents and a near-fatal shipwreck, and showcase Wilder's charitable work, particularly with lepers.",
            spotifyId: "7t4dtJgx00e8wVQAOrUSt5"
          },
          {
            title: "Episode 9: Eskbank",
            description: "Chapter 9 from <em>The Memoirs of Elizabeth Kinau Wilder</em> details her family's move to Boston and subsequent humorous domestic mishaps. It further recounts her husband Samuel G. Wilder's prominent career in Hawaii, including his business ventures, political achievements (such as being elected President of the Legislature), and ultimately, his death in 1888. The excerpts also cover the family's experiences in New England and interactions with notable figures such as General Grant and King Kalakaua. The narrative concludes with reflections on Wilder's legacy and widespread mourning following his passing. The sources highlight both the personal anecdotes and the public impact of the Wilders in Hawaii.",
            spotifyId: "1fGIUuJpg2smehZt5DZGz6"
          },
          {
            title: "Episode 10: Conclusion",
            description: "This concluding chapter from <em>The Memoirs of Elizabeth Kinau Wilder</em> reflects on the author's life, contrasting the past glories of Hawaii under Kamehameha with the present \"ugly commercial ideals.\" The author expresses contentment in her family and peaceful later years, while acknowledging regrets and a longing to join loved ones who have passed. She uses poetry to emphasize themes of aging, acceptance, and the passage of time. The chapter serves as a personal memoir and a lament for a bygone era.",
            spotifyId: "1C9MXrN85TfR9IozMNgRui"
          }
        ]
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