import React, { useEffect } from "react";
import { useState } from "react";
import desafio from "../utils/promesa";
import {data} from "../utils/data";


const ItemListContainer = () => {
const [itemP, setItemP] = useState([]);
  // const onAdd = (qty) => {
  //   alert("Seleccionaste " + qty + " items.");
  // }

  // 
  //    
  //       <hr />
  //      <h1>Estás en Mundo Fiesta, Bienvenido!!!!</h1>
  //      <hr/>
  //      <ItemCount stock={5} initial={1} onAdd={onAdd} />
      
      
       <div>
     

      useEffect(() => {
          desafio(data)
          .then(result => setItemP(result))
          .catch(err => console.log(err))
      }, [])

      return(
        <>
        {
          itemP.map(item => (
            <>
                <h4>{item.title}</h4>
                <h4>{item.id}</h4>
                <h4>{item.precio}</h4>
                <img src={item.img} alt="" />
            </>
          ))
        }
        </>
      );
      </div>
      
  }
  
  export default ItemListContainer;