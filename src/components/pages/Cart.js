import React, { useState, useEffect, useRef } from "react";
import { useCookies } from 'react-cookie';
import Footer from "../includes/Footer";
import Navbar from "../includes/Navbar";

export default function Cart(){
    const [cookies, setCookies] = useCookies(['cart']);
    let [cart, setCart] = useState(cookies.cart);
    let [total, setTotal] = useState(0);

    let catInputRefs = useRef([React.createRef(), React.createRef()]);

    const increaseCartItem = (event)=>{
       let newCart = cart;
        // get the index of the cart item via the target attribute
        const itemIndex = event.target.getAttribute('target');
        // retrieve the item from cart
        const item = newCart[itemIndex];
        // add 1 to the item count property
        item.count = item.count + 1;
        
        let inputs = catInputRefs.current[itemIndex];

        inputs.current.value = item.count
        // document.querySelector(`#input-${itemIndex}`).value = item.count

        
        // update the cart in state
        setCookies("cart", newCart, {
            path: "/",
            maxAge: 2592000
        });

        sumCartPrice();
       
    }

    const decreaseCartItem = (event)=>{
        let newCart = cart;
        // get the index of the cart item via the target attribute
        const itemIndex = event.target.getAttribute('target');
        // retrieve the item from cart
        const item = newCart[itemIndex];
        // add 1 to the item count property
        if(item.count != 0){
            item.count = item.count - 1;
        }else{
            alert('Cannot go below zero')
        }
        
        let inputs = catInputRefs.current[itemIndex];

        inputs.current.value = item.count
        
       
        // update the cart in state
        setCookies("cart", newCart, {
            path: "/",
            maxAge: 2592000
        });

        sumCartPrice();
    }

    function sumCartPrice(){
        let sum = 0;
        cart.forEach(function(currentValue, index){
            sum = sum + (parseFloat(currentValue.price)  * currentValue.count);
        })
        setTotal(sum)
        return sum;
    }

    function deleteItemFromCart(event){
       
        let index = event.target.getAttribute('target');

        // const iteMToDelete  = cart.filter(function(cartItem){
        //     return cartItem.id == id
        // });
        cart.splice(index, 1)

        // let updatedCart = cart.filter(function(cartItem){
        //     return cartItem.id != id
        // });

        console.log(cart);

        // setCart(cart);

      
     
        setCookies("cart", cart, {
            path: "/",
            maxAge: 2592000
        });

        
    }
    useEffect(()=>{
        setCart(cookies.cart);
        sumCartPrice();
        
        catInputRefs.current[0].current.focus();
    }, [])

    return(
       <>
        <Navbar cart={cart} />
        
        <main>
            
            <div className="slider-area ">
                <div className="single-slider slider-height2 d-flex align-items-center">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-12">
                                <div className="hero-cap text-center">
                                    <h2>Cart List</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <section className="cart_area section_padding">
                <div className="container">
                    <div className="cart_inner">
                        <div className="table-responsive">
                        <table className="table">
                            <thead>
                            <tr>
                                <th scope="col">Product</th>
                                <th scope="col">Price</th>
                                <th scope="col">Quantity</th>
                                <th scope="col">Total</th>
                                <th scope="col">Action</th>
                            </tr>
                            </thead>
                            <tbody>
                            {cart && cart.map((item, index)=>(
                                <tr key={index}>
                                    <td>
                                        <div className="media">
                                            <div className="d-flex">
                                                <img src={item.cover_photo} alt="Product Image" />
                                            </div>

                                            <div className="media-body">
                                                <p>{item.name}</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                    <h5>$ {item.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</h5>
                                    </td>
                                    <td>
                                    <div className="product_count">
                                        <span className="input-number-increment"> <a> <i className="fa fa-plus" onClick={increaseCartItem} target={index}></i></a></span>

                                        <input className="input-number" type="text" id={`input-${index}`} ref={catInputRefs.current[index]}  defaultValue={item.count} min="0" />
                                        
                                        <span className="input-number-decrement"> <a> <i className="fa fa-minus" onClick={decreaseCartItem} target={index}></i></a></span>
                                    </div>
                                    </td>
                                    <td>
                                    <h5>$ {(item.price * item.count).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</h5>
                                    </td>
                                    <td>
                                    <i className="fa fa-trash text-danger" target={index} onClick={deleteItemFromCart}></i>
                                    </td>
                                </tr>
                            ))}   
                           
                            
                            <tr className="bottom_button">
                                <td>
                                <a className="btn_1" href="#">Update Cart</a>
                                </td>
                                <td></td>
                                <td></td>
                                <td>
                                <div className="cupon_text float-right">
                                    <a className="btn_1" href="#">Close Coupon</a>
                                </div>
                                </td>
                            </tr>
                            <tr>
                                <td></td>
                                <td></td>
                                <td>
                                <h5>Subtotal</h5>
                                </td>
                                <td>
                                <h5>$ {total}</h5>
                                </td>
                            </tr>
                            <tr className="shipping_area">
                                <td></td>
                                <td></td>
                                <td>
                                <h5>Shipping</h5>
                                </td>
                                <td>
                                <div className="shipping_box">
                                    <ul className="list">
                                    <li>
                                        Flat Rate: $5.00
                                        <input type="radio" aria-label="Radio button for following text input" />
                                    </li>
                                    <li>
                                        Free Shipping
                                        <input type="radio" aria-label="Radio button for following text input" />
                                    </li>
                                    <li>
                                        Flat Rate: $10.00
                                        <input type="radio" aria-label="Radio button for following text input" />
                                    </li>
                                    <li className="active">
                                        Local Delivery: $2.00
                                        <input type="radio" aria-label="Radio button for following text input" />
                                    </li>
                                    </ul>
                                    <h6>
                                    Calculate Shipping
                                    <i className="fa fa-caret-down" aria-hidden="true"></i>
                                    </h6>
                                    <select className="shipping_select">
                                    <option defaultValue="1">Bangladesh</option>
                                    <option defaultValue="2">India</option>
                                    <option defaultValue="4">Pakistan</option>
                                    </select>
                                    <select className="shipping_select section_bg">
                                    <option defaultValue="1">Select a State</option>
                                    <option defaultValue="2">Select a State</option>
                                    <option defaultValue="4">Select a State</option>
                                    </select>
                                    <input className="post_code" type="text" placeholder="Postcode/Zipcode" />
                                    <a className="btn_1" href="#">Update Details</a>
                                </div>
                                </td>
                            </tr>
                            </tbody>
                        </table>
                        <div className="checkout_btn_inner float-right">
                            <a className="btn_1" href="#">Continue Shopping</a>
                            <a className="btn_1 checkout_btn_1" href="#">Proceed to checkout</a>
                        </div>
                        </div>
                    </div>
                </div>
            </section>
            
        </main>
        <Footer />

       </>
    );
}