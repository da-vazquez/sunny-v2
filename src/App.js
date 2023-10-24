import {
  EuiText,
  EuiCard,
  EuiPageTemplate,
  EuiPageHeader,
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
import { BrowserRouter as Router, Link, Outlet, Route, Routes } from 'react-router-dom';

import PageTemplate from './components/Pages/PageTemplate';
import Nav from './components/Nav/Nav';
import News from './components/News/News';
import { sidebar } from './components/Sidebar/Sidebar';
import MySweetPage from './components/Pages/ImportPageExample';

const App = () => {
  let header;

  header = (
    <EuiPageHeader
      paddingSize="l"
      restrictWidth="none"
      bottomBorder={true}
      pageTitle="Pre-season is in the books"
      description="BY: John Doe  |  POSTED: OCT 21, 2023 6:00 AM"
    />
  );

  return (
    <Router>
      <Nav />
      <Routes>
        <Route
          path="/"
          element={
            <PageTemplate
              sidebar={sidebar}
              content={<News />}
              header={header}
            />
          }
        />
        <Route path="/" element={<MySweetPage />} />
      </Routes>
    </Router>
  );
};

export default App;


