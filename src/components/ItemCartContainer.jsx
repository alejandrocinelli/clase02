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
        <Link to="/" className="btn btn-ghost normal-case text-xl">
            VOLVER A LA TIENDA</Link>
       </> )
         
    }
    else {

    return <div className="container mx-auto"> 
        <div className="overflow-x-auto w-full mb-5">
         <table className="table w-full">
        <thead>
      <tr>
      <th>Peliculas en Carrito</th>
      </tr>
  </thead> </table>
  <div/>
         </div>
  
  {cart.map ( itemCart => {
        return    (
            <>
   <div className="container mx-auto mb-3" key={itemCart.id}>
   <div className="overflow-x-auto w-full">
   <table className="table w-full">
   <thead>
   <tr>
        <td>
          <div class="flex items-center space-x-3">
            <div class="avatar">
              <div class="mask mask-squircle w-12 h-12">
                <img src={itemCart.img} alt="" />
              </div>
            </div> 
            </div>
        </td>
        <td>{itemCart.titulo}</td>
        <td>Precio ${itemCart.price}</td>
        <td>Cantidad  {itemCart.cant}</td>
        <td>Total ${itemCart.price* itemCart.cant}</td>
        <td>
          <button class="btn btn-ghost btn-xs" onClick={ ()=> removeFromCart(itemCart.id)}>eliminar</button>
        </td>
      </tr>
      </thead> 
      </table>
   </div>
   </div>
 
    </>
    )})
    }
    <button className="btn btn-ghost normal-case text-xl pl-5 pr-5 mr-5" onClick={()=> DeleteCart()}>Vaciar Carrito </button>
    <button className="btn btn-ghost normal-case text-xl pl-5 pr-5" onClick={handlerBuy} >Finalizar Compra </button>

    </div>
    
    
}
}
 export default ItemCartContainer
