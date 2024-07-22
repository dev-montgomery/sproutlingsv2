import React from 'react';

const Content = ({ updateContent, content }) => {
  return (
    <div className={content === null ? "hidden" : "content-container"}>
      <div className="close-window" onClick={() => updateContent(null)}>X</div>
      {content}
    </div>
  );
};

export default Content;