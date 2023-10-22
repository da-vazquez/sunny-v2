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


import { faker } from '@faker-js/faker';


const News = () => {

  return (
    <>
      <EuiText>
        <EuiImage
          size="xl"
          float="left"
          margin="l"
          hasShadow
          caption="New Big 3 in the Valley"
          allowFullScreen
          alt="booker durant & beal"
          src="https://gray-kpho-prod.cdn.arcpublishing.com/resizer/t3fqNnYmxR7w0M_9N5cS7qHHjD0=/1200x675/smart/filters:quality(85)/cloudfront-us-east-1.images.arcpublishing.com/gray/Z5OOUDTLUBAS7MXFHFKKDXSTRE.jpg"
        />
        <p>{faker.lorem.paragraphs()}</p>
        <p>{faker.lorem.paragraphs()}</p>
        <p>{faker.lorem.paragraphs()}</p>
        <EuiImage
          size="l"
          float="right"
          margin="l"
          hasShadow
          allowFullScreen
          caption="Best Duo in the League?"
          alt="durant and booker"
          src="https://cronkitenews.azpbs.org/wp-content/uploads/2023/10/GettyImages-1484014004.jpg"
        />
        <p>{faker.lorem.paragraphs()}</p>
        <p>{faker.lorem.paragraphs()}</p>
      </EuiText>
    </>
  )
}


export default News;