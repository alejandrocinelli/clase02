import { useEffect, useState } from "react"
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import {getAllItems as getMovies, getItemByCategory } from "../data/index"

 
const ItemListContainer = (props) => {

const [movies, setMovies] = useState([])
const {categoryid} = useParams();

useEffect ( ()=>{
  if (categoryid === undefined){
getMovies().then( respPromise =>{
  setMovies(respPromise);
  
})
}
else {
  getItemByCategory(categoryid).then((respPromise) => {
    setMovies(respPromise)
   
  })
}

}, [categoryid] )

  return (
      <div>
    <div className="text-4xl font-bold" >{props.titulo}</div> 
    <div>{props.autor}</div>
   
    <ItemList  films={movies} />

    </div>
  )
}
export default ItemListContainer