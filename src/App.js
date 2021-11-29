import MCUShows from "./mcu-shows/MCUShows";

import {useState} from 'react'

const realeasDates = {
  wandaVision: 'Jan 2021',
  falconWinter: 'Mar 2021',
  loki: 'June 2021',
  whatIf: 'August 2021',
  hawkeye: 'November 2021'
}
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
  const [index, setIndex]=useState(0);
  const [num, setNum] = useState(0);

  useEffect(() => {
    alert('The next MCU character has been displayed')
      }, [num]);

  return (
    <div>
      <h1>"FINAL REACT EXERCISE"</h1>
      <MCUShows dates={realeasDates}randomMCUCharacter={randomMCUCharacter}
     />
     <h1>Random MCU Character: {mcuCharacters[index]}</h1>
    </div>
  );
}

export default App;
