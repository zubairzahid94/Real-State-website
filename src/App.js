import './App.css';
import Companies from './Components/Companies';
import Header from './Components/Header';
import Hero from './Components/Hero';
import Residencies from './Components/Residencies';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Hero></Hero>
      
      <div>
      <Companies></Companies>
      <Residencies></Residencies>
      </div>

    </div>


  );
}

export default App;
