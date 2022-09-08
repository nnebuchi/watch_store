import { useState } from "react";
import { useCookies } from 'react-cookie';
import Footer from "../includes/Footer";
import Navbar from "../includes/Navbar";
import {newProducts, products} from "../../utils/Database";
import NewArrivals from "../includes/NewArrivals";
import PopularProducts from "../includes/PopularProducts";

export default function Home(){
    //  document.cookie = "cart=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;"; 
    const [newests, setNewests] = useState(newProducts);
    const [popular, setPopular] = useState(products);
    const [cookies, setCookies] = useCookies(['cart']);
    let [cart, setCart] = useState(cookies.cart);
    

    function handleCookies(event){
        let productId = event.target.getAttribute('product-id');
        
        // let productInstance = props.products.filter(matchingProduct);
        let productInstance = popular.filter(function(currentValue, index){
            return currentValue.id == productId;
        });
        // console.log(productInstance[0])
        // return;
        // loopr through cart array to check if any of the cart items matches the productinstance
        
        if( typeof cart != 'undefined'){
            let itemMatched = false
            cart.forEach(function(currentValue, index){
                if(currentValue.id == productInstance[0].id){
                    itemMatched = true
                    currentValue.count = currentValue.count + 1;
                }
            })
            if(itemMatched==false){
                productInstance[0].count = 1;
                cart.push(productInstance[0]);
            }
        }else{
            productInstance[0].count = 1;
            setCart(productInstance)
        }
        
        // typeof cart != 'undefined' ? cart.push(productInstance[0]) : setCart(productInstance);
       
        setCookies("cart", cart, {
            path: "/",
            maxAge: 2592000
        });
    }

    return(
        <>
            <Navbar cart={cart}/>
            <main>
                <div className="slider-area ">
                    <div className="slider-active">
                        
                        <div className="single-slider slider-height d-flex align-items-center slide-bg">
                            <div className="container">
                                <div className="row justify-content-between align-items-center">
                                    <div className="col-xl-8 col-lg-8 col-md-8 col-sm-8">
                                        <div className="hero__caption" style={{ marginTop:"50px" }}>
                                            <h1 data-animation="fadeInLeft" data-delay=".4s" data-duration="2000ms">Select Your New Perfect Style</h1>
                                            <p data-animation="fadeInLeft" data-delay=".7s" data-duration="2000ms">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat is aute irure.</p>
                                            
                                            <div className="hero__btn" data-animation="fadeInLeft" data-delay=".8s" data-duration="2000ms">
                                                <a href="industries.html" className="btn hero-btn">Shop Now</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-3 col-lg-3 col-md-4 col-sm-4 d-none d-sm-block">
                                        <div className="hero__img" data-animation="bounceIn" data-delay=".4s">
                                            <img src="assets/img/hero/watch.png" alt="" className=" heartbeat" height="500" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    
                        
                    </div>
                </div>
                <NewArrivals products={newests}/>
                <div className="popular-items section-padding30">

                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-xl-7 col-lg-8 col-md-10">
                                <div className="section-tittle mb-70 text-center">
                                    <h2>Popular Items</h2>
                                    <p>Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.</p>
                                </div>
                            </div>
                        </div>

                        <PopularProducts products={popular} handleCookies={handleCookies}/>

                        <div className="row justify-content-center">
                            <div className="room-btn pt-70">
                                <a href="catagori.html" className="btn view-btn1">View More Products</a>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </>
        
    );
}