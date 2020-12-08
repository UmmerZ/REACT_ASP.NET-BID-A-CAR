import React, {useState } from "react";
import axios from "axios";
import { NavMenuLogin } from "../PageLayout/NavMenuLogin";
import { Link, Redirect, useHistory } from 'react-router-dom';



 export function RegisterUser(props) {
    
    const [statusCode, setStatusCode] = useState(0);
    const [response, setResponse] = useState([]);
     let history= useHistory();
    const [userName, setUserName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
     const [waiting, setWaiting] = useState(false);
  
   
    
    function handleChange(event) {
        switch (event.target.id) {
            case "userName":
                setUserName(event.target.value);
                break;
            case "email":
                setEmail(event.target.value);
                break;
            case "password":
                setPassword(event.target.value);
                break;
            case "confirmPassword":
                setConfirmPassword(event.target.value);
                break;
        }
    }


    function handleSubmit(event) {
        event.preventDefault();
        setWaiting(true);
        history.push("/get-listings");
        axios(
            {
            method: 'post',
            url: 'User/Register',
            params: {
            userName: userName,
            email: email,
            password: password,
            confirmPassword: confirmPassword
        }
      }
        ).then(response => {
            if (response.data.status === 'created') 
            console.log(response);
            setWaiting(false);
            setResponse(response.data);
            setStatusCode(response.status);
            history.push("/get-listings");
        }).catch((err) => {
            setWaiting(false);
        setResponse(err.response.data);
        setStatusCode(err.response.status);
          });
    
    }
     
     return (
         <>
             <NavMenuLogin />
           
             <section id="cover" className="min-vh-100">
                 <div id="cover-caption">
                     <div className="container">
                         <div className="row text-white">
                             <div className="col-xl-5 col-lg-6 col-md-8 col-sm-10 mx-auto text-center form p-4">
                                 <h1 className="display-4 py-2 text-truncate">Register</h1>
                                 <div className="px-2">
                 
                    <p>{waiting ? "Awaiting response..." : `Response recieved ${statusCode}: ${JSON.stringify(response)}`}</p>
                    <form   onSubmit={handleSubmit}>
                        <div class="form-group">
                                             <label className="sr-only">UserName</label>
                                             <input className="form-control" type="text" placeholder="User Name" id="userName"  
                                onChange={handleChange} required />
                        </div>

                        <div class="form-group">
                                             <label className="sr-only">Email</label>
                                             <input className="form-control" type="email" placeholder="Email" id="email"  
                                onChange={handleChange} required />
                        </div>
                                         <div className="form-group">
                                         <label className="sr-only">Password</label>

                                             <input className="form-control" type="password" placeholder="Password" id="password" 
                                    onChange={handleChange} />

                            </div>

                                         <div className="form-group">
                                             <label className="sr-only">Confirm Password</label>
                                <input className="form-control" type="password" placeholder="Confirm Password" id="confirmPassword" 
                                    onChange={handleChange} />
                            </div>
                        

                        <input className="btn btn-info btn-block my-4" type="submit" value="Register"/>
                     </form>
               
                 <Link to="/login">Already have an account?</Link>
                                 </div>
                             </div>
                         </div>
                     </div>
                 </div>
                 </section>
             </>
            );
        }
   