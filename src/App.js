import React from 'react';
import Navbar from './compnents/Navbar';
import News from './compnents/News';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const App = () => {
  const apiKey = process.env.REACT_APP_NEWS_API;

  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<News apiKey={apiKey} category="general" />} />
          <Route path='/technology' element={<News apiKey={apiKey} category="technology" />} />
          <Route path='/sports' element={<News apiKey={apiKey} category="sports" />} />
          <Route path='/business' element={<News apiKey={apiKey} category="business" />} />
          <Route path='/entertainment' element={<News apiKey={apiKey} category="entertainment" />} />
          <Route path='/health' element={<News apiKey={apiKey} category="health" />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
