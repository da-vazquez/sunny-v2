import React from 'react';
import {
  EuiText,
  EuiImage,
} from '@elastic/eui';

const ArticlePreview = ({ title, content, imageURL }) => {
  return (
    <div style={{outline: "1px solid red", width: "100%"}}>
      <EuiText>
      <h2>{title}</h2>
      {imageURL && <EuiImage src={imageURL} alt="Article Image" size="xl" float="left" margin="l"/>}
      
        {content.split('\n').map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </EuiText>
    </div>
  );
};

export default ArticlePreview;
