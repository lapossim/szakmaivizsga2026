import { useState } from 'react';
import './App.css';
import MenuIcon from '@mui/icons-material/Menu';

function App() {

  let [visible, setVisible] = useState(false);

  function menuButton() {
    setVisible(!visible)
  }

  return (
    <div className="App">
      <div className='desktopNavbar'>
        <div className='title'>BudgetTracker</div>
        <div className='listButton'>Egy</div>
        <div className='listButton'>Ketto</div>
        <div className='listButton'>Harom</div>
      </div>

      <div className='phoneNavbar'>
        <div className='title'>BudgetTracker</div>
        <div className='button' onClick={menuButton}>
          <MenuIcon sx={{ fontSize: 25 }}/>
        </div>
        <div className='listButton' style={{display:visible?'block':'none'}}>Egy</div>
        <div className='listButton' style={{display:visible?'block':'none'}}>Ketto</div>
        <div className='listButton' style={{display:visible?'block':'none'}}>Harom</div>
      </div>
    </div>
  );
}

export default App;
