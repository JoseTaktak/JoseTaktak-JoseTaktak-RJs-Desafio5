import {useEffect, useState} from "react";


const ItemCount = ({ stock, initial, onAdd }) => {
    const [count, setCount] = useState(0);

    useEffect (() => {
        setCount(initial);
    },[]);

    const increment = () => {
        if (count < stock) {
            setCount(count + 1);
        }
        
    }

    const decrement = () => {
        if (count > initial) {
            setCount(count - 1);
        }
    }
    return (
        <>
            <button onClick={increment}><Agregar /></button>
            {count}
            <button onClick={decrement}><Quitar /></button>
        
            {
            stock
            ? <button onClick={() => onAdd(count)}>Envía al Carro</button>
            : <button>Envía al Carro</button>
        }
        </>
            
    );
}

export default ItemCount;