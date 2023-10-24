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

import classes from "./News.module.css";

import Articles from '../Pages/Articles/Articles';
import ArticlesNew from '../Pages/Articles/ArticlesNew';
import SideNav from '../Nav/SideNav';


const News = () => {

  return (
    <div className={classes.container}>
      <div style={{width: "75%"}}>
        <Articles />
      </div>

      <div>
        <SideNav />
      </div>
    </div>
  )
}


export default News;