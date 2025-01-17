import { useState } from 'react';
import AIProjectModal from './AIProjectModal';
import './AIProjects.css';

const AIProjects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: "AI-Assisted Portfolio Development",
      image: process.env.PUBLIC_URL + "/AI Projects/Thumbnails/portfolio-homepage.jpg",  
      content: {
        overview: {
          title: "Project Overview",
          text: "I built this website with Cursor, utilizing collaborative coding with Claude 3 Sonnet, an Anthropic LLM. The project demonstrates how AI can be effectively used as a programming partner while maintaining full developer control over architecture and design decisions."
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