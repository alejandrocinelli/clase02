import { useEffect, useState } from "react"
import moviesdb from "../data/data"
import ItemList from "./ItemList";

 function getMovies (){
   return new Promise ( (resolve, reject )=> {
   setTimeout(() => {
     resolve(moviesdb)
   }, 500);
 }  );
}

const ItemListContainer = (props) => {

const [movies, setMovies] = useState([])

useEffect ( ()=>{
getMovies().then( respPromise =>{
  setMovies(respPromise);
  console.log(movies)
})

}, [] )


  return (
      <div>
    <div className="text-4xl font-bold" >{props.titulo}</div> 
    <div>{props.autor}</div>
   
    <ItemList  films={movies} />

    </div>
  )
}
export default ItemListContainer