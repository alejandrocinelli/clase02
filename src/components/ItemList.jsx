import React from "react"
import Item from "./Item"

function ItemList({films}) {
  return (
    <>
        {films.map( thismovie => {
            return(
            <>
          <div className="display: inline-block ">
            <Item  itemMovies={thismovie} key={thismovie.id} ></Item>
            </div> 
            </>) 
            
        } )

        }

    </>
  )
}
export default ItemList