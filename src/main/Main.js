// import React from 'react'
import Counter from './Counter';
import img from'./img/mojabi.jpg';
import './css/Counter.css';


function Main(){
    return(
        <div>
            <Counter datos={['Angel Emmanuel Cerda Reyna', '20974', '5A']} />
            <img src={img} alt="mojabi.jpg" class='img'/>
            
        </div>
    )
}

export default Main