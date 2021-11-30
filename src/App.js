// 2a
import MCUShows from "./mcu-shows/MCUShows";

// BONUS 6a & 8a
import { useState, useEffect } from 'react';

// 5a
const releaseDates = {
  wandaVision: 'January 2021',
  falconWinter: 'March 2021',
  loki: 'June 2021',
  whatIf: 'August 2021',
  hawkeye: 'November 2021'
};

// BONUS 6b
const mcuCharacters = [
  'Scarlet Witch',
  'Vision',
  'Falcon',
  'Winter Soldier',
  'Loki',
  'The Watcher',
  'Hawkeye'
];

function App() {
  // BONUS 6c
  const [index, setIndex] = useState(0);

  // BONUS 7a
  const [num, setNum] = useState(0);

  // BONUS 8a
  // 
  useEffect(() => {
    alert("The Next MCU Character has been displayed");
  }, [num]);

  // BONUS 6f
  function newIndex() {
    const randomIndex = Math.floor(Math.random() * mcuCharacters.length);
    setIndex(randomIndex);
  }

  // BONUS 7d
  function newNum() {
    if (num < mcuCharacters.length - 1) {
      setNum(num + 1);
    } else {
      setNum(0);
    }
  }

  return (
    <div>
      {/* 2b */}
      <h1>FINAL REACT EXERCISE</h1>
      {/* 2c & 5b & BONUS 6f & 7d */}
      <MCUShows
        dates={releaseDates}
        indexTwo={newIndex}
        numTwo={newNum}
      />
      {/* BONUS 6d & 6f */}
      <h1>Random MCU Character: {mcuCharacters[index]}</h1>
      {/* BONUS 7b & 7d */}
      <h1>Next MCU Character: {mcuCharacters[num]}</h1>
    </div>
  );
}

export default App;
