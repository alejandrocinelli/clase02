import { useEffect, useState } from "react"
import moviesdb from "../data/data"
import ItemDetail from  "./ItemDetail"
import { useParams } from "react-router-dom";

 function getMovie (id){
   return new Promise ( (resolve, reject )=> {
   setTimeout(() => {
     const movieFound = moviesdb.find( (movie)=> {
       return parseInt(id) === movie.id
     } )
     resolve(movieFound)
   }, 500);
 }  );
}

const ItemDetailContainer = () => {

const [movie, setMovie] = useState()
const { itemid } = useParams()

useEffect ( ()=>{
getMovie(itemid).then( respPromise =>{
  setMovie(respPromise);

})

}, [itemid] )


  return (
      <div>
           
    <ItemDetail  films={movie} />

    </div>
  )
}
export default ItemDetailContainer