import '../scss/footer.scss';
import { GrFacebookOption, GrInstagram, GrTwitter } from "react-icons/gr";
const Footer = () => {
  return (
    <div className="footer">
        <div className='footer-menu'>
            <div className='footer-column'>
                <ul className="menu">
                    <h4>Resources</h4>
                    <li><a className='option' href="">Download</a></li>
                    <li><a className='option'  href="">Help Center</a></li>
                    <li><a className='option' href="">Guide Book</a></li>
                    <li><a className='option'  href="">App Directory</a></li>
                </ul>
            </div>

            <div className='footer-column'>
                <ul className="menu">
                    <h4>Seboria</h4>
                    <li><a className='option' href="">Why Seboria</a></li>
                    <li><a className='option'  href="">Our Collection Process</a></li>
                    <li><a className='option' href="">Customer Stories</a></li>
                    <li><a className='option'  href="">Instagram Post</a></li>
                </ul>
            </div>

            <div className='footer-column'>
                <ul className="menu">
                    <h4>Company</h4>
                    <li><a className='option' href="">Antiques</a></li>
                    <li><a className='option'  href="">About Seboria</a></li>
                    <li><a className='option' href="">Success</a></li>
                    <li><a className='option'  href="">Information</a></li>
                </ul>
            </div>

            <div className='footer-column'>
                <ul className="menu">
                    <h4>Get in Touch</h4>
                    <li className='option'>Feel free to get in touch with us via email</li>
                    <li id='email'>shakir260@gmail.com</li>
                </ul>
            </div>
        </div>

        <div className='footer-nav'>
            <div className="logo">
                <img src="/siboria.svg" alt="logo" />
            </div>

            <ul className="footer-nav-list">
                <li><a className="nav-li" href="">Home</a></li>
                <li><a className="nav-li"  href="">Collections</a></li>
                <li><a className="nav-li" href="">How We Collect</a></li>
                <li><a className="nav-li" href="">Sell An Antique</a></li>
                <li><a className="nav-li" href="">Blog</a></li>        
            </ul>
        
            <div className="social">
                <a href=""><GrFacebookOption /></a>
                <a href=""><GrInstagram /></a>
                <a href=""><GrTwitter /></a>
            </div>
        </div>
        
        
       
      
    
    </div>
  )
}
export default Footer