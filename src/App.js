import './App.css';
import TvPrograms from './TvPrograms';
import Sidebar from './components/Sidebar';
import Burger from './components/Burger';
import { useState } from 'react';

function App() {
  const [channel, setChannel] = useState("SVT 1");

  return (
    <div className="App">
      <TvPrograms channelName={channel}/>
      <Sidebar updateChannel={setChannel} />
      <Burger/>
    </div>
  );
}

export default App;
