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


import PageTemplate from './components/Pages/PageTemplate';
import Nav from './components/Nav/Nav';
import News from './components/News/News';
import {sidebar} from './components/Sidebar/Sidebar';

const App = () =>  {
  let header;
  
  header = (
    <EuiPageHeader
      paddingSize="l"
      restrictWidth="none"
      bottomBorder={true}
      panelled="left"
      pageTitle="NewsFeed"
      iconType={"article"}
      description=""
    />
  )
  

  return (
    <>
      <Nav />
      <PageTemplate 
        sidebar={sidebar} 
        content={<News/>}
        header={header}  
      />
    </>
  )
}


export default App;

