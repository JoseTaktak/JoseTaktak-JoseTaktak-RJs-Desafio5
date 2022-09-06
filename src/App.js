import CartWidget from "./components/CartWidget";
import ItemCount from "./components/ItemCount";
import ItemListContainer from "./components/ItemListContainer";
import NavBar from "./components/NavBar";




const App = () => {
  return (
    <div>
    <NavBar />
    <CartWidget />
    <ItemListContainer />
    <ItemCount />
    
    
  </div>
  );
    
}

export default App;