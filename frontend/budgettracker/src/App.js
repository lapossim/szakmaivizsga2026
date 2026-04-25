import { useState } from 'react';
import './App.css';
import MenuIcon from '@mui/icons-material/Menu';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import About from './Routes/About/About';
import Login from './Routes/Login/Login';
import Home from './Routes/Home/Home';
import Dashboard from './Routes/Dashboard/Dashboard';

function App() {

  let [visible, setVisible] = useState(false);
  let [isLoggedIn, setIsLoggedIn] = useState(false);

  function menuButton() {
    setVisible(!visible)
  }

  return (
    <div className="App">
      <title>BudgetTracker</title>
      <BrowserRouter>
        <div className='desktopNavbar'>
          <div className='title'>BudgetTracker</div>
          <Link to="/" className='listButton'>Főoldal</Link>
          <Link to="/about" className='listButton'>About</Link>
          {isLoggedIn ? <Link to="/dashboard" className='listButton'>Fiókom</Link> : <Link to="/login" className='listButton'>Bejelentkezés</Link>}
        </div>


        <div className='phoneNavbar'>
          <div className='title'>BudgetTracker</div>
          <div className='button' onClick={menuButton}>
            <MenuIcon sx={{ fontSize: 25 }}/>
          </div>
          <div className='listButton' style={{display:visible?'block':'none'}}>
            <Link to="/" className='listButton' onClick={menuButton}>Főoldal</Link>
          </div>
          <div className='listButton' style={{display:visible?'block':'none'}}>
            <Link to="/about" className='listButton' onClick={menuButton}>About</Link>
          </div>
          <div className='listButton' style={{display:visible?'block':'none'}}>
            {isLoggedIn ? <Link to="/account" className='listButton'>Fiókom</Link> : <Link to="/login" className='listButton'>Bejelentkezés</Link>}
          </div>
        </div>

        <br/>

        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;
