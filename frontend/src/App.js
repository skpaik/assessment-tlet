import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';


const Home = lazy(() => import('./routes/Home'));
const About = lazy(() => import('./routes/About'));
const Detail = lazy(() => import('./routes/Detail'));
const PopularQueries = lazy(() => import('./routes/PopularQueries'));
function App() {
  return (
      <div className="min-h-screen flex flex-wrap content-between bg-gray-400">
          <div className="w-full block">
              <Router>
                  <Suspense fallback={<div>Loading...</div>}>
                      <Routes>
                          <Route path="/" element={<Home />} />
                          <Route path="/detail" element={<Detail />} />
                          <Route path="/about" element={<About />} />
                          <Route path="/popular-queries" element={<PopularQueries />} />
                      </Routes>
                  </Suspense>
              </Router>
          </div>
      </div>
  );
}

export default App;
