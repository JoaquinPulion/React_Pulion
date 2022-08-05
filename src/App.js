import './App.css';
import NavBar from './components/NavBar';
import Card from './components/Card/Card';
import Button from './components/Button/Button';
import ItemListContainer from './components/ItemListContainer';
import ItemCount from './components/ItemCount/ItemCount';

function App() {


  const ItemList = {
    texto: "Lista de productos"
  }

  const dataProducts = [
  {
    name: "Teclado Gamer",
    price: 3000,
    imgurl: "https://picsum.photos/280/260",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam"
  },
  {
    name: "Mouse Gamer",
    price: 5000,
    imgurl: "https://picsum.photos/280/260",
    description: "Lorem ipsum dolor sit adipisicing elit. Quisquam"
  },
  ]
  return (
    <div className="App">
      <NavBar/>
      <Button type="info" text="click me"/>
      <ItemListContainer greeting={ItemList}/>
      <Card data={dataProducts[0]}/>
      <Card data={dataProducts[1]}/>
      <ItemCount initial={1} stock={4}/>
    </div>
  );
}

export default App;
