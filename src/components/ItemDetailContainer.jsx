import { useEffect, useState } from "react"
import moviesdb from "../data/data"
import ItemDetail from  "./ItemDetail"

 function getMovie (){
   return new Promise ( (resolve, reject )=> {
   setTimeout(() => {
     resolve(moviesdb)
   }, 1500);
 }  );
}

const ItemDetailContainer = () => {

const [movie, setMovie] = useState([])

useEffect ( ()=>{
getMovie().then( respPromise =>{
  setMovie(respPromise[0]);

})

}, [] )


  return (
      <div>
        
    <div className="text-2xl font-bold" >DETALLE DEL PRODUCTO</div> 
    <div>Mas informacion</div>
   
    <ItemDetail films={movie} />

    </div>
  )
}
export default ItemDetailContainer