import { useState } from 'react';
import './App.css';
import MenuIcon from '@mui/icons-material/Menu';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import About from './Routes/About/About';
import Login from './Routes/Login/Login';
import Home from './Routes/Home/Home';

function App() {

  let [visible, setVisible] = useState(false);

  function menuButton() {
    setVisible(!visible)
  }

  return (
    <div className="App">
      <BrowserRouter>
        <div className='desktopNavbar'>
          <div className='title'>BudgetTracker</div>
          <Link to="/" className='listButton'>Home</Link>
          <Link to="/about" className='listButton'>About</Link>
          <Link to="/login" className='listButton'>Login</Link>
        </div>


        <div className='phoneNavbar'>
          <div className='title'>BudgetTracker</div>
          <div className='button' onClick={menuButton}>
            <MenuIcon sx={{ fontSize: 25 }}/>
          </div>
          <div className='listButton' style={{display:visible?'block':'none'}}>
            <Link to="/" className='listButton' onClick={menuButton}>Home</Link>
          </div>
          <div className='listButton' style={{display:visible?'block':'none'}}>
            <Link to="/about" className='listButton' onClick={menuButton}>About</Link>
          </div>
          <div className='listButton' style={{display:visible?'block':'none'}}>
            <Link to="/login" className='listButton' onClick={menuButton}>Login</Link>
          </div>
        </div>

        <br/>

        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
        </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;
