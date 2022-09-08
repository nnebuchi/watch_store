import {Link} from 'react-router-dom';

export default function Footer(){
    return(
        <>
             <footer>
                <div className="footer-area footer-padding">
                    <div className="container">
                        <div className="row d-flex justify-content-between">
                            <div className="col-xl-3 col-lg-3 col-md-5 col-sm-6">
                                <div className="single-footer-caption mb-50">
                                    <div className="single-footer-caption mb-30">
                                        
                                        <div className="footer-logo">
                                            <Link to="index.html"><img src="assets/img/logo/logo2_footer.png" alt="" /></Link>
                                        </div>
                                        <div className="footer-tittle">
                                            <div className="footer-pera">
                                                <p>Asorem ipsum adipolor sdit amet, consectetur adipisicing elitcf sed do eiusmod tem.</p>
                                        </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-2 col-lg-3 col-md-3 col-sm-5">
                                <div className="single-footer-caption mb-50">
                                    <div className="footer-tittle">
                                        <h4>Quick Links</h4>
                                        <ul>
                                            <li><Link to="#">About</Link></li>
                                            <li><Link to="#"> Offers & Discounts</Link></li>
                                            <li><Link to="#"> Get Coupon</Link></li>
                                            <li><Link to="#">  Contact Us</Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-3 col-md-4 col-sm-7">
                                <div className="single-footer-caption mb-50">
                                    <div className="footer-tittle">
                                        <h4>New Products</h4>
                                        <ul>
                                            <li><Link to="#">Woman Cloth</Link></li>
                                            <li><Link to="#">Fashion Accessories</Link></li>
                                            <li><Link to="#"> Man Accessories</Link></li>
                                            <li><Link to="#"> Rubber made Toys</Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-3 col-md-5 col-sm-7">
                                <div className="single-footer-caption mb-50">
                                    <div className="footer-tittle">
                                        <h4>Support</h4>
                                        <ul>
                                            <li><Link to="#">Frequently Asked Questions</Link></li>
                                            <li><Link to="#">Terms & Conditions</Link></li>
                                            <li><Link to="#">Privacy Policy</Link></li>
                                            <li><Link to="#">Report a Payment Issue</Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div className="row align-items-center">
                            <div className="col-xl-7 col-lg-8 col-md-7">
                                <div className="footer-copy-right">
                                    <p>
                                        Copyright &copy;<script>document.write(new Date().getFullYear());</script> All rights reserved | This template is made with <i className="fa fa-heart" aria-hidden="true"></i> by <Link to="https://colorlib.com" target="_blank">Colorlib</Link>
                                    </p>                  
                                </div>
                            </div>
                            <div className="col-xl-5 col-lg-4 col-md-5">
                                <div className="footer-copy-right f-right">
                                    <div className="footer-social">
                                        <Link to="#"><i className="fab fa-twitter"></i></Link>
                                        <Link to="https://www.facebook.com/sai4ull"><i className="fab fa-facebook-f"></i></Link>
                                        <Link to="#"><i className="fab fa-behance"></i></Link>
                                        <Link to="#"><i className="fas fa-globe"></i></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
            <div className="search-model-box">
                <div className="h-100 d-flex align-items-center justify-content-center">
                    <div className="search-close-btn">+</div>
                    <form className="search-model-form">
                        <input type="text" id="search-input" placeholder="Searching key....." />
                    </form>
                </div>
            </div>
        </>
    
    );
}