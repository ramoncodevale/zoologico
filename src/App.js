import './App.css';
import Navbar from './components/navbar/Navbar';
import { Main, Zoo, Atracao, Museu } from "./container";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Main />
      <Zoo />
      <Atracao />
      <Museu />
    </div>
  );
}

export default App;
