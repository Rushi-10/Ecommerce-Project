
import './App.css';
import Footer from './customer/components/Footer/Footer';

import Navigation from './customer/components/Navigation/Navigation';
import Product from './customer/components/Product/Product';
import HomePage from './customer/Pages/HomePage/HomePage';
import {BrowserRouter} from 'react-router-dom';
function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Navigation/>
      <div>
      <HomePage/>
      <Product/>
      </div>
      <Footer/>
    </BrowserRouter>
    </div>
  );
}

export default App;
