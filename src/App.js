import './App.css';
import Navbar from './components/navbar/Navbar';
import { Main, Zoo } from "./container";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Main />
      <Zoo />
    </div>
  );
}

export default App;
