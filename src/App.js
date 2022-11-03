import './App.css';
import { Header } from './app/components/Header/Header';
import { PizzaList } from './app/components/PizzaList/PizzaList';
import { DrinkList } from './app/components/DrinksList/DrinksList';
import { DessertsList } from './app/components/DessertsList/DessertsList';

function App(props) {
  return (
    <div className="App">
      <Header />
      <PizzaList />
      <DessertsList />
      <DrinkList />
    </div>
  );
}

export default App;
