import { useEffect } from "react";
import Producto from "../utils/data";


const Productos = (props) => {
    useEffect(() => {
        console.log("Estas en Mundo Fiesta!!")
    }, [])

    return (
        <>
        {
            props.items.map(item => (

                <Producto
                key={item.id}
                valor={item.precio}
                titulo={item.title}
                imagen={item.img}
               
                
                
            ))
        }
        
    
        </>

    };


        export default Productos;
        
