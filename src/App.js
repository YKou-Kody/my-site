import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Icon from './Components/Navbar/Icon';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import Intro from './Components/Home/Intro';
import Portfolio from "./Components/Portfolio/Portfolio"
import Education from './Components/Education/Education';
import { AnimatePresence } from 'framer-motion';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <AnimatePresence exitBeforeEnter>
          <div className="bg-gray-700">
            <Routes>
              <Route path="/my-site" element={<Intro />}>
              </Route>
              <Route path="/Portfolio" element={<Portfolio />} />
              <Route path="/Education" element={<Education />} />
            </Routes>
          </div>
        </AnimatePresence>


      </BrowserRouter>

    </div>
  );
}

export default App;
