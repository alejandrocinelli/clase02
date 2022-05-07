import { useEffect, useState } from "react"
import moviesdb from "../data/data"
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";

 function getMovies (categoryid){
   return new Promise ( (resolve, reject )=> {
   setTimeout(() => {
if(categoryid){
  
  const arrayFilter = moviesdb.filter( (movie)=>{
    return movie.genero === categoryid
    
  } )
  resolve(arrayFilter)
  
}
else{
  resolve(moviesdb)
}
   }, 200);
 }  );
}

const ItemListContainer = (props) => {

const [movies, setMovies] = useState([])
const {categoryid} = useParams();

useEffect ( ()=>{
getMovies(categoryid).then( respPromise =>{
  setMovies(respPromise);
  
})

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