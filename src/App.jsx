import { useNavigate  } from 'react-router-dom'; // Transfer to nav
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Configuration from './components/Configuration';
import Timer from './components/Timer';
import Race from './components/Race';
import { useState, useEffect } from 'react';
import Background from './components/Background';

function App() {
  const [currentTime, setCurrentTime] = useState(60);
  const [timerStatus, setTimerStatus] = useState(false);
  const [length, setLength] = useState(0);
  const [numPlayers, setNumPlayers] = useState(0);

 useEffect(() => {
    setCurrentTime(length);
  }, [length]);


  useEffect(() => {
    if (timerStatus === true) {
      const interval = setInterval(() => {
        setCurrentTime(currentTime - 1);
      }, 1000);
      return () => clearInterval(interval);
    }
  });

  return (
    <>
      <Router>
        <Link to="/config">Config Screen</Link> |{' '}
        <Link to="/game">Game Screen</Link>
        <Routes>
          <Route path="/config" element={<Configuration length={length} numPlayers={numPlayers} setNumPlayers={setNumPlayers} setLength={setLength} setTimerStatus={setTimerStatus}/>} />
          <Route
            path="/game"
            element={
              <Background>
                <Timer currentTime={currentTime} setTimerStatus={setTimerStatus}/>
                <Race currentTime={currentTime} numPlayers={numPlayers} timerStatus={timerStatus}/>
              </Background>
            }
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
