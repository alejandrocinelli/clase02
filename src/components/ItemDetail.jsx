import React from "react"
import ItemCount from "./ItemCount"

/*import ItemCount from "./ItemCount"*/
/*import ItemDetailContainer from "./ItemDetailContainer"*/

function ItemDetail ({films}) {
  
  return (
      
<div className="justify-center max-w-xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">

<div className="card card-side bg-base-300 shadow-xl">
  <figure><img className="ml-10" src={films.img} alt="Movie"/></figure>
  <div className="card-body display: inline-block  ">
    <h2 className="card-title justify-center mb-2">{films.titulo}</h2>
    <p>{films.sinapsis}</p>
    <p>Stock disponible {parseInt(films.stock) }</p>
    <p className="Text Size 6" >Precio: ${parseInt(films.price) }</p>
    <div className="card-actions justify-center">
       <ItemCount stock={films.stock} initial={1}/> 
    </div>
  </div>
</div>

</div>

  )
}
export default ItemDetail