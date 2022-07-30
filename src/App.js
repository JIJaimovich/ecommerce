


import ItemCount from './components/ItemCount/ItemCount';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Navbar from './components/Navbar/Navbar';



function App() {
  const onAdd = (count) => {
    console.log( `${count} products added` );
  }
  return (
    <div className="App">
      <Navbar />
      <ItemListContainer greeting='Hello friend!'/>
      <ItemCount initial={1} stock={7} onAdd={onAdd} />
    </div>
  );
}

export default App;
