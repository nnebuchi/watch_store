import { useState } from "react";
import { useCookies } from "react-cookie";


export default function PopularProducts(props){
    // document.cookie = "cart=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";    
    const [cookies, setCookies] = useCookies(['cart']);
    let [cart, setCart] = useState(cookies.cart);
    const handleCookies = props.handleCookies
    

    // function handleCookies(event){
    //     let productId = event.target.getAttribute('product-id');
        
    //     // let productInstance = props.products.filter(matchingProduct);
    //     let productInstance = props.products.filter(function(currentValue, index){
    //         return currentValue.id == productId;
    //     });
    //     // console.log(productInstance[0])
    //     // return;
    //     typeof cart != 'undefined' ? cart.push(productInstance[0]) : setCart(productInstance);
    //     console.log(cart)
       
       
    //     setCookies("cart", cart, {
    //         path: "/",
    //         maxAge: 86400
    //     });

    //     console.log(cookies.cart);
    // }
    return(
        <div className="row">
            {props.products.map((product, index)=>(
                <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6" key={product.id}>
                    <div className="single-popular-items mb-50 text-center">
                        <div className="popular-img">
                            <img src={product.cover_photo} alt="Product" />
                            <div className="img-cap">
                                <span onClick={handleCookies} product-id={product.id}>Add to cart</span>
                            </div>
                            <div className="favorit-items">
                                <span className="flaticon-heart"></span>
                            </div>
                        </div>
                        <div className="popular-caption">
                            <h3><a href="product_details.html">{product.name}</a></h3>
                            <span>${product.price}</span>
                        </div>
                    </div>
                </div>
            ))}
            
            
        </div>
    );
    
}