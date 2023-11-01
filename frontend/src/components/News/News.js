import PageTemplate from "../Pages/PageTemplate";
import classes from "./News.module.css";
import Articles from '../Pages/Articles/Articles';
import ArticlesNew from '../Pages/Articles/ArticlesNew';
import SideNav from '../Nav/SideNav';

const iconType="article"
const pageTitle="NewsFeed"
const description=""
const width = "95%"



const Content = () => {

  return (
    <div className={classes.container}>
      <div style={{width: "100%"}}>
        <Articles />
      </div>

      {/* <div style={{width: "30%"}}>
        <SideNav />
      </div> */}
    </div>
  ) 
}


const NewsFeed = () => {
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


export default NewsFeed;