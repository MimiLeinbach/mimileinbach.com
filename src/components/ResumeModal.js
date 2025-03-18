import React from 'react';
import '../App.css';

const ResumeModal = ({ onClose }) => {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content resume-modal" onClick={e => e.stopPropagation()}>
        <button className="close-button" onClick={onClose}>
          <i className="fas fa-times"></i>
        </button>
        <div className="resume-content">
          <iframe
            src={`${process.env.PUBLIC_URL}/Mimi Leinbach Resume.pdf`}
            title="Mimi Leinbach Resume"
            width="100%"
            height="800px"
            style={{ border: 'none' }}
          />
        </div>
      </div>
    </div>
  );
};

export default ResumeModal; 