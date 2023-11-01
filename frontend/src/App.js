import { BrowserRouter as Router, Link, Outlet, Route, Routes } from 'react-router-dom';

import NewsFeed from './components/News/News';
import ArticlesNew from './components/Pages/Articles/ArticlesNew';
import Home from './components/Pages/Home';

const App = () => {

  return (
    <Router>
      {/* <Nav /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/newsfeed" element={<NewsFeed />} />
        <Route path="/admin/create_article" element={<ArticlesNew />} />
      </Routes>
    </Router>
  );
};

export default App;


