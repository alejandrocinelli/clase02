import React from "react"
import useCartContext from "../store/CartContext"
import { Link } from "react-router-dom"

function ItemCartContainer (prop){

    const {cart, DeleteCart, removeFromCart} = useCartContext();
    
    if(cart.length == 0 ){ 
        return (
        <> 
        <div className="container px-5 py-8 mx-auto">CARRITO VACIO</div>
        <Link to="/" className="btn btn-ghost normal-case text-xl">
            VOLVER A LA TIENDA</Link>
       </> )
         
    }
    else {

    return <div> <h2>aca hay que armar una tabla decente</h2> {cart.map ( itemCart => {
        return    (
            <>
    <div className="container px-5 py-8 mx-auto">{prop.titulo}</div>
    <div key={itemCart.id} >
        <h2>{itemCart.titulo}</h2>
        <h2>Precio Unitario {itemCart.price}</h2>
        <h2>Cantidad de Items {itemCart.cant}</h2>
        <h2>Precio Total {itemCart.price* itemCart.cant}</h2>
        <button onClick={ ()=> removeFromCart(itemCart.id)} style={{color:"red"}} >x</button>
    </div>
    </>
    )})
    }
    <button className="btn btn-ghost normal-case text-xl" onClick={()=> DeleteCart()}>Vaciar Carrito </button>
    </div>
    
}
}
 export default ItemCartContainer
