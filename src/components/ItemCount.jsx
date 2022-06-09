import React from "react"
import {useState} from "react"

function ItemCount({stock , initial, onAdd}) {
   
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
        <button className="btn btn-primary px-5 m-4" onClick={()=>onAdd(count)} >Agregar al Carrito</button> {/* la array funcion dentro de onClick es para no poner onAdd() y no interprete mal.*/}
      </div>
    </div>
  )
}
export default ItemCount