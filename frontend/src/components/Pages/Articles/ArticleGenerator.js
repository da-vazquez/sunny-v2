import React, { useState } from 'react';

// Define your ArticleForm component
const ArticleGenerator = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [imageURL, setImageURL] = useState('');

  const handleImageChange = (e) => {
    setImageURL(e.target.value);
  };

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleContentChange = (e) => {
    setContent(e.target.value);
  };

  return (
    <div>
      <input
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

export default ArticleGenerator;
