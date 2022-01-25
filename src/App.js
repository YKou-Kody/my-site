import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Icon from './Components/Navbar/Icon';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import Intro from './Components/Home/Intro';
import Portfolio from "./Components/Portfolio/Portfolio"
import Education from './Components/Education/Education';
import { AnimatePresence } from 'framer-motion';
import Contact from './Components/Contact/Contact';


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
              <Route path="/portfolio" element={<Portfolio />} />
              <Route path="/education" element={<Education />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </div>
        </AnimatePresence>


      </BrowserRouter>

    </div>
  );
}

export default App;
