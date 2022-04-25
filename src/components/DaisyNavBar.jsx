import DaisyCart from "./DaisyCart"

const DaisyNavBar = () => {
  return (
    <div className="navbar bg-base-100">
  <div className="flex-1">
    <a href="safasf" className="btn btn-ghost normal-case text-xl">Tienda de VHS</a>
  </div>
 
  <div className="flex-none">
    <ul className="menu menu-horizontal p-0">
      <li><a href="login">Login</a></li> 
      <li><a href="contacto">Contacto</a></li> 
      <li><a href="cart"> <DaisyCart></DaisyCart></a></li>
    </ul>
  </div>
</div>
  )
}
export default DaisyNavBar