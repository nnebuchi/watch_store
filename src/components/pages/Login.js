import { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import { useCookies } from 'react-cookie';

export default function Login(){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [cookies, setCookies] = useCookies(['user']);
    const navigate = useNavigate();

    const updateEmail = (event)=>{
        setEmail(event.target.value)
    }
    const updatePassword = (event)=>{
        setPassword(event.target.value)
    }

    const base_url = "http://academy-api.stormcelltech.com";
    
    const loginUser = async ()=>{
        const signIn =  await fetch(base_url+'/api/login',
            {
                method:"POST",
                body:JSON.stringify({
                    email: email,
                    password: password
                }),
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${process.env.REACT_APP_GENERIC_TOKEN}`
                
                }
            }
        )

        const response = await signIn.json()
        
        
        if('status' in response){
            if(response.status === 'fail'){
                alert(response.error)
            }

            if(response.status === 'success'){
                console.log(response);

                setCookies('user',
                    {
                        token: response.token, 
                        data: response.user
                    }
                );

                navigate('/');
                
            }
        }else{
            alert('something went wrong')
        }
        // console.log(signIn.json())
    }


   return(
    <>
         <main>
        <div className="slider-area ">
            <div className="single-slider slider-height2 d-flex align-items-center">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-12">
                            <div className="hero-cap text-center">
                                <h2>Login</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <section className="login_part section_padding ">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6 col-md-6">
                        <div className="login_part_text text-center">
                            <div className="login_part_text_iner">
                                <h2>New to our Shop?</h2>
                                <p>There are advances being made in science and technology
                                    everyday, and a good example of this is the</p>
                                <a href="#" className="btn_3">Create an Account</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                        <div className="login_part_form">
                            <div className="login_part_form_iner">
                                <h3>Welcome Back ! <br />
                                    Please Sign in now</h3>
                                <form className="row contact_form" action="#" method="post" noValidate="novalidate">
                                    <div className="col-md-12 form-group p_star">
                                        <input type="email" className="form-control" id="email" defaultValue={email}
                                            placeholder="Username" onChange={updateEmail} />
                                    </div>
                                    <div className="col-md-12 form-group p_star">
                                        <input type="password" className="form-control" id="password"  defaultValue={password}
                                            placeholder="Password" onChange={updatePassword} />
                                    </div>
                                    <div className="col-md-12 form-group">
                                        <div className="creat_account d-flex align-items-center">
                                            <input type="checkbox" id="f-option" name="selector" />
                                            <label htmlFor="f-option">Remember me</label>
                                        </div>
                                        <button type="button"  className="btn_3" onClick={loginUser}>
                                            Login
                                        </button>
                                        <Link className="lost_pass" to="#">forgot password?</Link>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </main>
    </>

   ); 
}