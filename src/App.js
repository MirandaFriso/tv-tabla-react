import './App.css';
import TvPrograms from './TvPrograms';
import Sidebar from './components/Sidebar';
import Burger from './components/Burger';

function App() {
  return (
    <div className="App">
      <TvPrograms />
      <Sidebar />
      <Burger/>
    </div>
  );
}

export default App;
