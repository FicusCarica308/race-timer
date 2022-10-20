import { useNavigate  } from 'react-router-dom'; // Transfer to nav
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Configuration from './components/Configuration';
import Timer from './components/Timer';
import Race from './components/Race';
import { useState, useEffect } from 'react';
import Background from './components/Background';

function App() {
  const [currentTime, setCurrentTime] = useState(60); // The current state of the timer
  const [timerStatus, setTimerStatus] = useState(false); // The current state of the timer (on/off)
  const [length, setLength] = useState(0); // The length of the timer
  const [numPlayers, setNumPlayers] = useState(0); // The total number of players

  // sets the currentTimer whenever the length is set in the config component
 useEffect(() => {
    setCurrentTime(length);
  }, [length]);


  // sets a interval to mimick a timer using the currentTime and timerStatus state
  useEffect(() => {
    if (timerStatus === true && currentTime !== 0) { // checks if timer should be active using timerStatus & whether or not the timer is at 0
      const interval = setInterval(() => {
        setCurrentTime(currentTime - 1);
      }, 1000);
      return () => clearInterval(interval);
    }
  });

    /* stops the timer before 0 */
  useEffect(() => {
    if (currentTime === 0)
      setTimerStatus(false);
  }, [currentTime]);

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
