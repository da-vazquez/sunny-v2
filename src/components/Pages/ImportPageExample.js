import PageTemplateNew from "./PageTemplateNew";

const iconType="watchesApp"
const pageTitle="My Test Page"
const description="How to make a damn page"

const Content = () => {

  return (
    <h2>Greeting from my page template!</h2>
  )
}


const MySweetPage = () => {
  return <PageTemplateNew
  iconType={iconType}
  pageTitle={pageTitle}
  description={description}
  pageContent=
  {
    <>
      <Content />
    </>
  }
  />;
};


export default MySweetPage;