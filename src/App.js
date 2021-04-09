import './App.css';
import TvPrograms from './TvPrograms';
import Sidebar from './components/Sidebar';
import Burger from './components/Burger';
import { useState } from 'react';

function App() {

  let kanal = "SVT 1";

  const [channel, setChannel] = useState(kanal);


  return (
    <div className="App">
      <TvPrograms channelName={channel}/>
      <Sidebar updateChannel={(newChannel) => setChannel(newChannel)}/>
      <Burger/>
    </div>
  );
}

export default App;
