import React, { useState } from "react";
import Axios from "axios";

export function Registration() {
    const [statusCode, setStatusCode] = useState(0);
    const [response, setResponse] = useState([]);
    const [waiting, setWaiting] = useState(false);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
  

    function handleFieldChange(e) {
        switch (e.target.id) {
            
            case "userName":
                setUserName(e.target.value);
                break;
            case "password":
                setPassword(e.target.value);
                break;
            case "email":
                setEmail(e.target.value);
                break;
         
        }
    }

    function register  (event)  {
        event.preventDefault();
        setWaiting(true);
        Axios({ method: 'post',
            url: 'User/Register',
            params: {
              
                userName: userName,
                password: password,
                email: email
                
            }
           

        }).then((res) => {
            console.log(res);
            setWaiting(false);
            setResponse(res.data);
            setStatusCode(res.status)
        }).catch((err) => {
            setWaiting(false);
            setResponse(err.response.data);
            setStatusCode(err.response.status);
        });
    }
    return (
        <div>
            <h1>Register User </h1>
            <p>{waiting ? "Awaiting response..." : `Response recieved ${statusCode}: ${JSON.stringify(response)}`}</p>
            <form onSubmit={register} class="well form-horizontal" id="contact_form" >
                
                <label htmlFor="userName">UserName</label>
                <input id="userName" type="text" onChange={handleFieldChange} />
                <br />
                <label htmlFor="password">Password</label>
                <input id="password" type="password" onChange={handleFieldChange} />
                <br />
                <label htmlFor="email">Phone Number</label>
                <input id="email" type="email" onChange={handleFieldChange} />
            
               
               
                <br />
                <input class="btn btn-primary" type="submit" value="Submit" />
            </form>
        </div>
    );
   
}