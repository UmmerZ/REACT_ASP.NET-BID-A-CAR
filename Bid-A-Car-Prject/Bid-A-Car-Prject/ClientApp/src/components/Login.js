import React, { useState} from "react";
import { Link, Redirect } from "react-router-dom";
import axios from "axios";
import { useAuth } from "../context/Auth.js";
import { NavMenuLogin } from "./PageLayout/NavMenuLogin.js";
import { Footer } from "./PageLayout/Footer";


/**********************************************************************************************************
 * Code Borrowed from=ttps://medium.com/better-programming/building-basic-react-authentication-e20a574d5e71
 * ********************************************************************************************************/

function Login(props) {
    const [isLoggedIn, setLoggedIn] = useState(false);
    const [isError, setIsError] = useState(false);
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    
    const { setAuthTokens } = useAuth();

    function handleChange(event) {
        switch (event.target.id) {
            case "userName":
                setUserName(event.target.value);
                break;
            case "password":
                setPassword(event.target.value);
                break;
           
        }
    }
  

   function postLogin(e)  {
       e.preventDefault();
    
       axios
           (
               {
               method: 'post',
               url: 'User/login',
                params: {
                    userName: userName,
                    password: password,
                }
               
            })
            .then(result => {
                console.log(result);
                if (result.status === 200) {
                    setAuthTokens(result.data);
                    console.log(result.data)
                    setLoggedIn(true);
                } else {
                    setIsError(true);
                }
            })
            .catch(err => {
                setIsError(true);
                
            });
    }
    let referer;
    if (props.location.state !== undefined) {
        referer = props.location.state.referer;
    } else {
        referer = "/";
    }

    if (isLoggedIn) {
        return <Redirect to={referer} />;
    }

    return (
        <>
            <NavMenuLogin />  
            <h1 className="shadow p-3 mb-5 bg-dark rounded text-white text-center" >Welcome to Bid-A-Car</h1>
            <section id="cover" className="min-vh-100">
            <div id="cover-caption">
                <div className="container">
                    <div className="row text-white">
                        <div className="col-xl-5 col-lg-6 col-md-8 col-sm-10 mx-auto text-center form p-4">
                            <h1 className="display-4 py-2 text-truncate">Sign In.</h1>
                            <div className="px-2">
                                    <form className="justify-content-center" onSubmit={postLogin}>
                                    <div className="form-group">
                                        <label className="sr-only">User Name</label>
                                            <input className="form-control"
                    type="text"
                    id = "userName"
                    onChange={handleChange}
                    placeholder="User Name"
                />
                                    </div>
                                    <div className="form-group">
                                        <label className="sr-only">Password</label>
                                            <input className="form-control"
                    type="password"
                    id="password"
                    onChange={handleChange}
                    placeholder="Password"
                                        />
                                    </div>
                                        <input className = "btn btn-info btn-block my-4" type = "submit" value ="Login" />
            </form>
            <Link to="/signup">Don't have an account?</Link>
            {isError && (
                                        <error style={{ color: "red" }}>The username or password provided were incorrect!</error>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
                </div>
               
            </section>
            <Footer />
</>
    );
}

export default Login;
