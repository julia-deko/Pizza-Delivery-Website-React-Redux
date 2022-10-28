import './App.css';
import { PizzaList } from './app/components/PizzaList/PizzaList';

function App(props) {
  return (
    <div className="App">
      <PizzaList pizzas={props.state} dispatch={props.dispatch} />
    </div>
  );
}

export default App;
