import Button from 'react-bootstrap/Button';
import React, { useState } from 'react';
import  './css/Counter.css'

function Counter({datos}){
    console.log(datos);
    const [contador, setContador] = useState(0);

    const incrementarContador = () => { 
        setContador(contador + 1);
    };

    const DecrementarContador = () => { 
        setContador(contador - 1);
    };

    return (
        <div>
            
            {datos.map((datos, index)=> {
                return(
                    <div key= {index}>
                       <h1>{datos}</h1>
                    </div>

                );
            })}
            <Button variant="dark" className="btn-margin" onClick={incrementarContador}> increment </Button>
            <Button variant="dark" className="btn-margin" onClick={DecrementarContador}> decrement </Button>

            
            <h2>Contador: {contador}</h2>
        </div>
    )
}

export default Counter;