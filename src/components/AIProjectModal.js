const AIProjectModal = ({ project, onClose }) => {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <button className="close-button" onClick={onClose}>
          <i className="fas fa-times"></i>
        </button>
        <div className="project-content">
          <h2>{project.title}</h2>
          
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

          {/* Podcast Content */}
          {project.content.description && (
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
        </div>
      </div>
    </div>
  );
};

export default AIProjectModal; 