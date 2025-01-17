const AIProjectModal = ({ project, onClose }) => {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <button className="close-button" onClick={onClose}>
          <i className="fas fa-times"></i>
        </button>
        <div className="project-content">
          <h2>{project.title}</h2>
          {Object.entries(project.content).map(([key, section]) => (
            <div key={key} className="project-section">
              <h3>{section.title}</h3>
              <p>{section.text}</p>
              {section.list && (
                <ul>
                  {section.list.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AIProjectModal; 