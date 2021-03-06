import React from "react"
import ItemCount from "./ItemCount"
import { Link } from "react-router-dom"


function Item({itemMovies}) {
  
  return (
      
<div className="justify-center max-w-xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">

<div className="card w-96 bg-base-200 shadow-xl justify-center">
  <figure><img src={itemMovies.img} alt="movie" /></figure>
  <div className="card-body">
    <h2 className="card-title justify-center">{itemMovies.titulo}</h2>
    <p>Genero: {itemMovies.genero}</p>
    <p>Year: {itemMovies.year}</p>
    <p>Price: ${itemMovies.price}</p>
    <div className="card-actions justify-center">
    {/*<ItemCount stock="10" initial="1"/>*/}
    <Link to={`/movie/${itemMovies.id}`} > <button className="btn btn-primary m-3">Ver mas</button></Link>
    </div>
  </div>
</div>

</div>

  )
}
export default Item