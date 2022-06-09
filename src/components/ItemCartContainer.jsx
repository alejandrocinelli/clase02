import React from "react"
import swal from 'sweetalert';
import useCartContext from "../store/CartContext"
import { Link } from "react-router-dom"
import {createBuyOrder} from "../data/index"

function ItemCartContainer (prop){

    const {cart, DeleteCart, removeFromCart,getTotalPrice} = useCartContext();
 
    
    const handlerBuy = () =>{

      const buyOrderFilter = cart.map((item) => ({
        titulo: item.titulo,
        price: item.price,
        cant: item.cant,
        id: item.id,
      }) )

      const buyOrder = {
        buyer: {
          name: "Alejandro",
          phono: 1554505545,
          email: "Comision36@coderhouse.com"
        },
        items: [...buyOrderFilter],
        total: getTotalPrice()
      }
      createBuyOrder(buyOrder)
      DeleteCart()
      
    }

    if(cart.length == 0 ){ 
        return (
        <> 
        <div className="container px-5 py-8 mx-auto">CARRITO VACIO</div>
        <Link to="/" className="btn btn-primary normal-case text-xl">
            VOLVER A LA TIENDA</Link>
       </> )
         
    }
    else {

    return <div className="container mx-auto"> 
        <div className="overflow-x-auto w-full mb-5 py-5">
         <table className="table w-full">
        <thead>
      <tr>
      <th><h2 className="text-xl">Peliculas en Carrito </h2></th>
      </tr>
  </thead> </table>
  <div/>
         </div>
  
  {cart.map ( itemCart => {
        return    (
          
            <>

<div class="grid grid-cols-5 gap-4 mt-5 bg-[#1e293b] mt-2 px-3 py-1 rounded" key={itemCart.id}>
  <div className="avatar" ><div className=" mask mask-squircle w-12 h-12"> <img src={itemCart.img} alt="" /></div></div>
  <div>{itemCart.titulo}</div>
  <div>Cantidad: {itemCart.cant}</div>
  <div>Total $ {itemCart.price* itemCart.cant}</div>
  <button class="btn btn-ghost btn-xs" onClick={ ()=> removeFromCart(itemCart.id)}>eliminar</button>
</div>  
 
    </>
    )})
    }
    <div className="container mx-auto mt-5">
    <button className="btn btn-accent normal-case text-xl pl-5 pr-5 mr-5 " onClick={()=> DeleteCart()}>Vaciar Carrito </button>
    <button className="btn btn-primary normal-case text-xl pl-5 pr-5" onClick={handlerBuy} >Finalizar Compra </button>
    </div>
    </div>
      
}
}
 export default ItemCartContainer
