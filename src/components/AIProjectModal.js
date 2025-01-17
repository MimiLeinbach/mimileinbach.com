const AIProjectModal = ({ project, onClose }) => {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <button className="close-button" onClick={onClose}>
          <i className="fas fa-times"></i>
        </button>
        <div className="project-content">
          <h2>{project.title}</h2>
          <div className="project-section">
            {project.content.description && (
              <p dangerouslySetInnerHTML={{ __html: project.content.description.text }}></p>
            )}
          </div>
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
                      allowtransparency="true"
                      allow="encrypted-media"
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