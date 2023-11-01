import React from 'react';
import {
  EuiPageTemplate,
  EuiPageHeader,
  EuiPageSidebar,
  EuiPageBody,
  EuiFlexGroup,
  EuiFlexItem,
  EuiPage,
  EuiPageSection,
} from '@elastic/eui';

import Nav from '../Nav/Nav';
import {sidebar} from '../Sidebar/Sidebar';

const PageTemplate = ({ iconType, pageTitle, description, pageContent, panelled, bottomBorder, restrictWidth }) => {
  return (
    <EuiPageTemplate panelled={panelled} bottomBorder={true} restrictWidth="95%">
      <Nav />
      <EuiPage paddingSize="none" style={{ marginTop: "15px" }}>
        <EuiPageSidebar paddingSize="l" sticky>
          {sidebar}
        </EuiPageSidebar>

        <EuiPageBody panelled style={{ marginTop: "0px"}}>
          <EuiPageHeader
            restrictWidth={restrictWidth}
            iconType={iconType}
            pageTitle={pageTitle}
            description={description}
            bottomBorder={true}
            paddingSize='l'
          />

        <EuiFlexGroup gutterSize="l">
          <EuiPageSection
            color="plain"
            grow={false}
            restrictWidth="95%"
            alignment="center"
          >
            {pageContent}
          </EuiPageSection>
        </EuiFlexGroup>
        </EuiPageBody>
      </EuiPage>
    </EuiPageTemplate>
  );
};

export default PageTemplate;
