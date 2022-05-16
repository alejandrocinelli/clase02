import { createContext, useState } from "react";
import { useContext } from "react";

const CartContext = createContext(); 

const useCartContext = () => useContext(CartContext);

export function CartContextProvider ({children}){

    const [cart, setCart] = useState([])
   
    const addtoCart = (item, cant) =>{

        const IsInCart = cart.find(p => p.id === item.id)

        if(IsInCart){
            const newCart = cart.map (
                cartItem => {
                    if (cartItem.id === item.id ){
                        const copyItem = {...cartItem}
                        copyItem.cant += cant; 
                        return copyItem
                    }
                    else return cartItem
                }
            
            )
            setCart(newCart);
        }

        else {
            const newItem = {...item,cant}
        setCart([...cart,newItem])
    }
    }

    const removeFromCart = (id) =>{

        const newCart = [...cart]
        const cartFilter = newCart.filter(
            item => { return (item.id !== id)}
        )
        setCart(cartFilter);
    }
    const contexFuntion = ()=>{
        console.log("Contexto Listo")
    }

    const DeleteCart = () =>{setCart([]) } 

    const CantInCart = () =>{
        let total =0
        if (cart.length == 0){
            return total
        }
        else {
        
       cart.forEach(item => total += item.cant)}
    
       return  (total)
    }
          
    return(
        <CartContext.Provider value={{contexFuntion, cart, addtoCart,removeFromCart,DeleteCart,CantInCart}} >
            {children}
        </CartContext.Provider>
    )
}

export default useCartContext 