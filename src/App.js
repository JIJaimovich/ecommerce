import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Navbar from './components/Navbar/Navbar';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CartContextProvider } from './context/CartContext';
import { NotificationProvider } from './notification/notification';


function App() {

  return (
    <div className="App">
      <NotificationProvider>
        <CartContextProvider>
          <BrowserRouter>
            <Navbar />
            <Routes>
              <Route path='/' element={<ItemListContainer />} />
              <Route path='/category/:categoryId' element={<ItemListContainer />} />
              <Route path='/detail/:productId' element={<ItemDetailContainer />} />
              <Route path='*' element={<h1>404 NOT FOUND</h1>} />
            </Routes>
          </BrowserRouter>
        </CartContextProvider>
      </NotificationProvider>
    </div>
  );
}

export default App;
