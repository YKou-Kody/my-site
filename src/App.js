import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Icon from './Components/Navbar/Icon';
import { BrowserRouter, Routes, Route } from 'react-router-dom'



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/home" element={<p>test</p>}>

          </Route>
        </Routes>

      </BrowserRouter>

    </div>
  );
}

export default App;
