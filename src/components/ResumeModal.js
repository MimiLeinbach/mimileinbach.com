import React from 'react';
import './ResumeModal.css';

function ResumeModal({ onClose }) {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <button className="close-button" onClick={onClose}>
          <i className="fas fa-times"></i>
        </button>
        <div className="resume-content">
          <iframe
            src={process.env.PUBLIC_URL + '/Mimi_Leinbach_Resume.pdf'}
            title="Resume"
            width="100%"
            height="800px"
            style={{ border: 'none' }}
          />
        </div>
      </div>
    </div>
  );
}

export default ResumeModal; 