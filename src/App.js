import './App.css';
import { Header } from './app/components/Header/Header';
import { PizzaList } from './app/components/PizzaList/PizzaList';

function App(props) {
  return (
    <div className="App">
      <Header />
      <PizzaList />
    </div>
  );
}

export default App;
