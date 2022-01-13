import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Icon from './Components/Navbar/Icon';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Intro from './Components/Home/Intro';
import Portfolio from "./Components/Portfolio/Portfolio"




function App() {
  return (
    <div className="App">


      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/home" element={<Intro />}>



          </Route>
          <Route path="/Portfolio" element={<Portfolio />} />
        </Routes>

      </BrowserRouter>

    </div>
  );
}

export default App;
