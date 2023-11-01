import {
  EuiPage,
  EuiPageContent,
  EuiPageContentBody,
  EuiPageHeader,
  EuiPageSidebar,
  EuiPageBody
} from "@elastic/eui";

// import main nav
// import Header Nav

const PageTemplateNew = ({iconType, pageTitle, description, pageContent}) => {
  return (
    <>
      HeaderNav
      <EuiPage paddingSize="none" style={{marginTop: "40px"}}>
        <EuiPageSidebar paddingSize="l" sticky>
          {<MainNavigation />}
        </EuiPageSidebar>

        <EuiPageBody panelled style={{marginTop: "0px"}}>
          <EuiPageHeader
            restrictWidth={"95%"}
            iconType={iconType}
            pageTitle={pageTitle}
            description={description}
          />

          <EuiPageContent
            hasBorder={false}
            hasShadow={false}
            paddingSize="none"
            color="transparent"
            borderRadius="none"
          >
            <EuiPageContentBody restrictWidth={"95%"}>
              {pageContent}
            </EuiPageContentBody>
          </EuiPageContent>
        </EuiPageBody>
      </EuiPage>
    </>
  )
}

export default PageTemplateNew;