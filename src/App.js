import './App.css';
import { Routes, Route } from 'react-router-dom';
import { Header } from './app/components/Header/Header';
import { PizzaList } from './app/components/PizzaList/PizzaList';
import { DrinkList } from './app/components/DrinksList/DrinksList';
import { DessertsList } from './app/components/DessertsList/DessertsList';
import { Cart } from './app/components/Cart/Cart';
import { OrderForm } from './app/components/OrderForm/OrderForm';


function App(props) {
  return (
        <div className='App'> 
          <Header />
          <Routes>
            <Route path="/pizza" element={<PizzaList />}  />
            <Route path="/desserts" element={<DessertsList />} />
            <Route path="/drinks" element={<DrinkList />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/order" element={<OrderForm /> } />
          </Routes>
        </div>
  );
}

export default App;
