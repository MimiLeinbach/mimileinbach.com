import React from 'react';
import './CaseStudyModal.css';

function CaseStudyModal({ study, onClose }) {
  const formatContent = (content) => {
    return content.split('\n\n').map((paragraph, index) => {
      const trimmedParagraph = paragraph.trim();
      
      // Handle headers
      if (trimmedParagraph.startsWith('## ')) {
        return <h2 key={index}>{trimmedParagraph.substring(3)}</h2>;
      }
      if (trimmedParagraph.startsWith('### ')) {
        return <h3 key={index}>{trimmedParagraph.substring(4)}</h3>;
      }
      
      // Handle bullet points
      if (paragraph.includes('* ')) {
        const items = paragraph.split('\n').filter(item => item.trim());
        return (
          <ul key={index}>
            {items.map((item, i) => (
              <li key={i}>{item.replace('* ', '')}</li>
            ))}
          </ul>
        );
      }
      
      // Regular paragraphs
      return <p key={index}>{paragraph}</p>;
    });
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <button className="close-button" onClick={onClose}>
          <i className="fas fa-times"></i>
        </button>
        <h2>{study.title}</h2>
        <div className="case-study-content">
          {formatContent(study.content)}
        </div>
      </div>
    </div>
  );
}

export default CaseStudyModal; 