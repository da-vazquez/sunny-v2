import React, { useState } from 'react';

const ArticlesForm = ({ updatePreview }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [imageURL, setImageURL] = useState('');

  const handleImageChange = (e) => {
    const url = e.target.value;
    setImageURL(url);
    updatePreview(title, content, url); // Call updatePreview with the latest data
  };

  const handleTitleChange = (e) => {
    const newTitle = e.target.value;
    setTitle(newTitle);
    updatePreview(newTitle, content, imageURL);
  };

  const handleContentChange = (e) => {
    const newContent = e.target.value;
    setContent(newContent);
    updatePreview(title, newContent, imageURL);
  };

  return (
    <div style={{display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "flex-start", height: "auto", width: "100%", outline: "1px solid yellow", gap: "20px"}}>
      <input
        size="l"
        type="text"
        placeholder="Article Title"
        value={title}
        onChange={handleTitleChange}
      />
      <input
        type="text"
        placeholder="Image URL"
        value={imageURL}
        onChange={handleImageChange}
      />
      <textarea
        placeholder="Article Content"
        value={content}
        onChange={handleContentChange}
      />
    </div>
  );
};

export default ArticlesForm;
