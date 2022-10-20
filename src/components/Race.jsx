import { useState, useEffect } from 'react';
import Contestant from './Contestant.jsx';
import { contestantStyles } from '../styles';
import { contestantData } from '../assets/data';

function Race(props) {
  const [contestants, setContestants] = useState(contestantData);

    // Sets the contestants x position for every iteration of currentTime
  useEffect(() => {
    if (props.timerStatus === true && props.currentTime !== 0) {
      let newContestantPos = contestants.map((contestant, i) => {
        // IF CONTESTANT X POS IS LESS THAN 10 DONT RUN || ( IF CONTESTAN X POS IS GREATER THAN 10 )
        if (contestant.xpos < 500) {
          return {
            ...contestant,
            xpos: contestant.xpos + Math.floor(Math.random() * 30),
          }
        } else {
        //console.log(contestant.xpos + Math.floor(Math.random() * 10) * (Math.random() * 5 < 2 ? -1 : 1))
          return {
            ...contestant,
            xpos: contestant.xpos + Math.floor(Math.random() * 13) * (Math.random() < 0.5 ? -1 : 1),
          }
        }
      });
      setContestants(newContestantPos);
    }
  }, [props.currentTime]);

    // Will only render the amount of contestants set by the state
  return (
    <div style={contestantStyles.contestantList}>
      {contestants.map((contestant, i) => (
        i < props.numPlayers ?
        <Contestant
          key={contestant.id}
          name={contestant.name}
          xpos={contestant.xpos}
        /> : undefined
      ))}
    </div>
  );
}
export default Race;
