import React, {useState } from "react";
import axios from "axios";

 export function RegisterUser() {
    
    const [statusCode, setStatusCode] = useState(0);
    const [response, setResponse] = useState([]);

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
            console.log(response);
                setWaiting(false);
                  setResponse(response.data);
                setStatusCode(response.status);
              
        }).catch((err) => {
            setWaiting(false);
        setResponse(err.response.data);
        setStatusCode(err.response.status);
          });
    
    }
     
            return (
                <div class="form-group">
                    <h1 className="shadow p-3 mb-5 bg-dark rounded">Register</h1>
                    <p>{waiting ? "Awaiting response..." : `Response recieved ${statusCode}: ${JSON.stringify(response)}`}</p>
                    <form className="text-center border border-light p-5"  onSubmit={handleSubmit}>
                        <div class="form-group">

                            <input class="form-control" type="text" placeholder="User Name" id="userName"  
                                onChange={handleChange} required />
                        </div>

                        <div class="form-group">

                            <input class="form-control" type="email" placeholder="Email" id="email"  
                                onChange={handleChange} required />
                        </div>
                        <div class="row">
                            <div class="col">

                                <input class="form-control" type="password" placeholder="Password" id="password" 
                                    onChange={handleChange} />

                            </div>

                            <div class="col">
                                <input class="form-control" type="password" placeholder="Confirm Password" id="confirmPassword" 
                                    onChange={handleChange} />
                            </div>
                        </div>

                        <input className="btn btn-info btn-block my-4" type="submit" value="Register"/>
                    </form>
                </div>
            );
        }
   