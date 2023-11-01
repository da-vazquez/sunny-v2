import {useState} from "react";
import PageTemplate from "../PageTemplate";
import ArticlesForm from './ArticlesForm';
import ArticlePreview from './ArticlePreview'; // Import the ArticlePreview component

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

const iconType="gear"
const pageTitle="Create New Article"
const description=""
const width = "95%"



const Content = () => {

  const [previewData, setPreviewData] = useState({
    title: '',
    content: '',
    imageURL: 'https://gray-kpho-prod.cdn.arcpublishing.com/resizer/t3fqNnYmxR7w0M_9N5cS7qHHjD0=/1200x675/smart/filters:quality(85)/cloudfront-us-east-1.images.arcpublishing.com/gray/Z5OOUDTLUBAS7MXFHFKKDXSTRE.jpg',
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
}


const ArticlesNew = () => {
  return <PageTemplate
  iconType={iconType}
  pageTitle={pageTitle}
  description={description}
  restrictWidth={width}
  pageContent=
  {
    <>
      <Content />
    </>
  }
  />;
};


export default ArticlesNew;