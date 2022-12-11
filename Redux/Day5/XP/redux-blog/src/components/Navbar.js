import {Link, NavLink, BrowserRouter as Router} from "react-router-dom";

const Navbar = () => {
    return(
    <>
        <nav>
            <div className="nav-wrapper">
            <a href="#" className="brand-logo left">My Blog</a>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
                <li><Link to="/"><img src="blog.png"/></Link></li>
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/about">About</NavLink></li>
                <li><NavLink to="/contact">Contact</NavLink></li>
            </ul>
            </div>
        </nav>    
    </>
    )
}
export default Navbar