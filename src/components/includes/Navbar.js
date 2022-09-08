import { useState, useEffect } from 'react';
import { useCookies } from 'react-cookie';
import {Link} from 'react-router-dom'

export default function Navbar(props){

    const [cookies, setCookies] = useCookies(['cart', 'user']);
    const [cart, setCart] = useState(props.cart);
    useEffect(()=>{
        
        if(props.cart){
            setCart(props.cart);
        }
        
    }, []);
    return(
            <header>
                <div className="header-area">
                    <div className="main-header header-sticky">
                        <div className="container-fluid">
                            <div className="menu-wrapper">
                                
                                <div className="logo">
                                    <Link to="/"><img src="assets/img/logo/logo.png" alt="" /></Link>
                                </div>
                                
                                <div className="main-menu d-none d-lg-block">
                                    <nav>                                                
                                        <ul id="navigation">  
                                            <li><Link to="/">Home</Link></li>
                                            <li><Link to="shop.html">shop</Link></li>
                                            <li><Link to="about.html">about</Link></li>
                                            <li className="hot"><Link to="#">Latest</Link>
                                                <ul className="submenu">
                                                    <li><Link to="shop.html"> Product list</Link></li>
                                                    <li><Link to="product_details.html"> Product Details</Link></li>
                                                </ul>
                                            </li>
                                            <li><Link to="blog.html">Blog</Link>
                                                <ul className="submenu">
                                                    <li><Link to="blog.html">Blog</Link></li>
                                                    <li><Link to="blog-details.html">Blog Details</Link></li>
                                                </ul>
                                            </li>
                                            <li><Link to="#">Pages</Link>
                                                <ul className="submenu">
                                                    <li><Link to="login.html">Login</Link></li>
                                                    <li><Link to="/cart">Cart</Link></li>
                                                    <li><Link to="elements.html">Element</Link></li>
                                                    <li><Link to="confirmation.html">Confirmation</Link></li>
                                                    <li><Link to="checkout.html">Product Checkout</Link></li>
                                                </ul>
                                            </li>
                                            {cookies.user.token == 'undefined' && 
                                            
                                            <li><Link to="/login" style={{ backgroundColor:"rgb(255, 0, 60)" }}>Login</Link></li>}
                                            
                                        </ul>
                                    </nav>
                                </div>
                            
                                <div className="header-right">
                                    <ul>
                                        <li>
                                            <div className="nav-search search-switch">
                                                <span className="flaticon-search"></span>
                                            </div>
                                        </li>
                                        <li> <Link to="login.html"><span className="flaticon-user"></span></Link></li>
                                        <li><Link to="/cart"><span className="flaticon-shopping-cart">{cart ? cart.length :'0'}</span></Link> </li>
                                    </ul>
                                </div>
                            </div>
                            
                            <div className="col-12">
                                <div className="mobile_menu d-block d-lg-none"></div>
                            </div>
                        </div>
                    </div>
                </div>
       
            </header>
    );
}