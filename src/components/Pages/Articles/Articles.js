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


const Articles = () => {

  const Image = ({size, float, margin, hasShadow, caption, allowFullScreen, alt, src}) => {
    return (
      <EuiImage 
        size={size}
        float={float}
        margin={margin}
        hasShadow={hasShadow}
        caption={caption}
        allowFullScreen={allowFullScreen}
        alt={alt}
        src={src}
      />
    )
  }


  return (
    <EuiText>
      <h2 style={{fontSize: "36px", color: "orangered"}}>Pre-season is in the books</h2>
      <h5>BY: John Doe  |  POSTED: OCT 21, 2023 6:00 AM</h5>
      <EuiSpacer />
      <Image
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
      <h2 style={{fontSize: "48px", lineHeight: 1.2, fontWeight: 800, borderTop: "1px solid white", borderBottom: "1px solid white", padding: 20, display: "flex", flexWrap: "wrap", width: "100%"}}>"This could be the greatest Suns team ever assembled"</h2>
      <EuiSpacer size="l" />
      <p>{faker.lorem.paragraphs()}</p>
      <Image
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
  )
}


export default Articles;