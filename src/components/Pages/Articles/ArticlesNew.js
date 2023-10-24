import React, { useState } from 'react';
import {
  EuiText,
  EuiCard,
  EuiPageTemplate,
  EuiPageHeader,
  EuiPageSidebar,
  EuiListGroup,
  EuiListGroupItem,
  EuiIcon,
  EuiPanel,
  EuiCollapsibleNavGroup,
  EuiSpacer,
  EuiImage,
  EuiBetaBadge,
  EuiFlexGroup,
  EuiFlexItem,
} from '@elastic/eui';

import ArticlesForm from './ArticlesForm';
import ArticlePreview from './ArticlePreview'; // Import the ArticlePreview component

const ArticlesNew = () => {
  const [previewData, setPreviewData] = useState({
    title: '',
    content: '',
    imageURL: '',
  });

  const updatePreview = (title, content, imageURL) => {
    setPreviewData({ title, content, imageURL });
  };

  return (
    <div>
      <div>
        <h1>Article Generator</h1>
        <ArticlesForm updatePreview={updatePreview} /> {/* Pass updatePreview as a prop */}
      </div>
      <EuiSpacer size="xl"/>
      <div>
        <h2>Preview:</h2>
        <EuiSpacer size="l"/>
        <ArticlePreview {...previewData} /> {/* Pass previewData as props to ArticlePreview */}
      </div>
    </div>
  );
};

export default ArticlesNew;
