import React from 'react';
import {
  EuiText,
  EuiPageTemplate,
  EuiPageHeader,
  EuiPageSidebar,
} from '@elastic/eui';

const PageTemplate = ({
  button,
  content,
  sidebar,
  header,
  panelled,
  bottomBorder,
  sidebarSticky,
  offset,
  grow,
}) => {
  return (
    <EuiPageTemplate
      panelled={panelled}
      bottomBorder={bottomBorder}
      grow={grow}
      offset={offset}
    >
      {sidebar && (
        <EuiPageSidebar paddingSize='m'>
          {sidebar}
        </EuiPageSidebar>
      )}
      {header && (
        <EuiPageHeader>
          {header}
        </EuiPageHeader>
      )}
      <EuiPageTemplate.Section>
        {content}
      </EuiPageTemplate.Section>
    </EuiPageTemplate>
  );
}


export default PageTemplate;