import './App.css';
import Navbar from './components/navbar/Navbar';
import { Main, Zoo, Atracao } from "./container";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Main />
      <Zoo />
      <Atracao />
    </div>
  );
}

export default App;
