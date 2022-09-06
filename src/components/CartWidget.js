import carrito from "./Image/carrito.png";

const CartWidget = () => {
    return (
      <header className="carrito">
        <img src={carrito} alt="carrito" />
        <p> 3</p>
      </header>
    );
  }
  
  export default CartWidget;
  