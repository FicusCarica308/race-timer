import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Configuration from './components/Configuration';
import Timer from './components/Timer';
import Race from './components/Race';
import { useState, useEffect } from 'react';
import Background from './components/Background';

function App() {
  let initialTime = 60;
  const [timerStatus, setTimerStatus] = useState(false);
  const [currentTime, setCurrentTime] = useState(initialTime);
  const [length, setLength] = useState(0);
  const [numPlayers, setNumPlayers] = useState(0);


  useEffect(() => {
    //if (timerStatus === true) {
      const interval = setInterval(() => {
        setCurrentTime(currentTime - 1);
      }, 1000);
      return () => clearInterval(interval);
    //}
  });

  return (
    <>
      <Router>
        <Link to="/config">Config Screen</Link> |{' '}
        <Link to="/game">Game Screen</Link>
        <Routes>
          <Route path="/config" element={<Configuration length={length} numPlayers={numPlayers} setLength={setLength} setNumPlayers={setNumPlayers}/>} />
          <Route
            path="/game"
            element={
              <Background>
                <Timer currentTime={currentTime} />
                <Race currentTime={currentTime} />
              </Background>
            }
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
