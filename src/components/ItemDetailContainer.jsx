import { useEffect, useState } from "react"
import ItemDetail from  "./ItemDetail"
import { useParams } from "react-router-dom";
import {getItem as getMovie} from "../data/index"

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