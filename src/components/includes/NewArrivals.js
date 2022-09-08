export default function NewArrivals(props){
    
    return(
       
        <section className="new-product-area section-padding30">
            <div className="container">
              
                <div className="row">
                    <div className="col-xl-12">
                        <div className="section-tittle mb-70">
                            <h2>New Arrivals</h2>
                        </div>
                    </div>
                </div>
                <div className="row">
                    {props.products.map((product, index)=>(
                        <div key={product.id} className="col-xl-4 col-lg-4 col-md-6 col-sm-6">
                            <div className="single-new-pro mb-30 text-center">
                                <div className="product-img">
                                    <img src={product.cover_photo} alt="Product" />
                                </div>
                                <div className="product-caption">
                                    <h3><a href="product_details.html">{product.name}</a></h3>
                                    <span>${product.price}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                    
                    
                </div>
            </div>
        </section>
    );
}