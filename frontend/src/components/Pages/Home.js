import PageTemplate from "./PageTemplate";

const iconType="watchesApp"
const pageTitle="Home Dashboard"
const description=""
const width = "95%"

const Content = () => {

  return (
    <div>
      
    </div>
  ) 
}


const Home = () => {
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


export default Home;