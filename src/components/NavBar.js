import logo from "./Image/MF-logo.jpg";
import "../App.css"

const NavBar = () => {
  return (
    <header>
      <h1><img src={logo} alt="logo" /> </h1>
      <ul className='BtnCenter'>
          <button> Nosotros</button>
          <button> Productos</button>
          <button> Contacto</button>
      </ul>
      <div className='BtnRight'>
        <button>LOGIN</button>
        
      </div> 
      
        <button>Agregar</button>
        <button>Quitar</button> 
        <button>Envía al Carro</button>
          
    </header>
  );
}

export default NavBar;
