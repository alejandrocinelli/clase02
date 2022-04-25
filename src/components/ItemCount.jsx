import React from "react"
import {useState} from "react"
// stock de 10 unidades

function ItemCount(props) {
  
  const [stock, setStock] = useState(props.stock)
  const [initial, setInitial] = useState(props.initial)
  
  const [count, setCount] = useState(1)

  const addHandler = () => {
   if (count <stock) {setCount(count+1)
     
   }
    
   }
const subtractHandler = () => { 
  
  if (count > initial ){ setCount(count-1)

  }
  
 }


  return (
    <div className="container px-5 py-8 mx-auto">

      
      <div>
          <button className="btn  btn-xs" onClick={subtractHandler} >-</button>
          <button className="px-5">{count}</button>
          <button className="btn  btn-xs" onClick={addHandler}>+</button>
      </div>
      <div> 
        <button className="btn btn-s px-5 m-3" >Agregar al Carrito</button>
      </div>
    </div>
  )
}
export default ItemCount