import React from 'react';
import ReactMarkdown from 'react-markdown';
import './CaseStudyModal.css';

function CaseStudyModal({ study, onClose }) {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <button className="close-button" onClick={onClose}>
          <i className="fas fa-times"></i>
        </button>
        <div className="case-study-content">
          <h1>{study.title}</h1>
          <ReactMarkdown>{study.content}</ReactMarkdown>
        </div>
      </div>
    </div>
  );
}

export default CaseStudyModal; 