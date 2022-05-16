import React from "react"
import useCartContext from "../store/CartContext";


const CartWidget = () => {

    const { CantInCart, } = useCartContext();
    
    return (<div> {CantInCart()} </div>
       )
  
}
export default CartWidget