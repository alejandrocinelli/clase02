import DaisyCart from "./DaisyCart"
import { Link } from "react-router-dom"
import { useContext } from "react"
import CartContext from "../store/CartContext"
import useCartContext from "../store/CartContext"

const DaisyNavBar = () => {

  const {contexFuntion} = useCartContext();
  contexFuntion();

  return (
    <div className="navbar bg-base-100">
  <div className="flex-1">
    <Link to="/" className="btn btn-ghost normal-case text-xl">
    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
          Tienda de VHS</Link>
  </div>
 
  <div className="flex-none">
    <ul className="menu menu-horizontal p-0">
      <li><Link to="/category/Comedy">Comedy</Link></li> 
      <li><Link to="/category/Drama">Drama</Link></li> 
      <li><Link to="/category/Terror">Terror</Link></li> 
      <li><Link to="/category/Action" >Action</Link></li>
      <li><Link to="/cart" ><DaisyCart></DaisyCart></Link></li>
          </ul>
  </div>
</div>
  )
}
export default DaisyNavBar