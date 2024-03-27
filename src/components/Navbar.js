import '../scss/navbar.scss';
import { AiOutlineMenu } from "react-icons/ai";
const Navbar = () => {
  return (
    <div className="navbar">
        <input type="checkbox" id="check"/>
        <label for="check" className="check-btn">
            <AiOutlineMenu/>
        </label>

       <div className="logo">
        <img src="/siboria.svg" alt="logo" />
        </div>

        <ul className="nav-list">
          <li><a className="nav-li" href="">Home</a></li>
          <li><a className="nav-li"  href="">Collections</a></li>
          <li><a className="nav-li" href="">How We Collect</a></li>
          <li><a className="nav-li" href="">Sell An Antique</a></li>
          <li><a className="nav-li" href="">Blog</a></li>        
        </ul>
        
        <div className="navBtn">
            <button className="nav-btn">Our Collection</button>
        </div>
      
    
    </div>
  )
}
export default Navbar