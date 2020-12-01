import React, { useState } from "react";
import Axios from "axios";

export function Registration() {
    const [statusCode, setStatusCode] = useState(0);
    const [response, setResponse] = useState([]);
    const [waiting, setWaiting] = useState(false);
    const [name, setName] = useState("");
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [streetAddress, setStreetAddress] = useState("");
    const [city, setCity] = useState("");
    const [postalCode, setPostalCode] = useState("");

    function handleFieldChange(e) {
        switch (e.target.id) {
            case "name":
                setName(e.target.value);
                break;
            case "userName":
                setUserName(e.target.value);
                break;
            case "password":
                setPassword(e.target.value);
                break;
            case "phoneNumber":
                setPhoneNumber(e.target.value);
                break;
            case "streetAddress":
                setStreetAddress(e.target.value);
                break;
            case "city":
                setCity(e.target.value);
                break;
            case "postalCode":
                setPostalCode(e.target.value);
                break;
        }
    }

    function register  (event)  {
        event.preventDefault();
        setWaiting(true);
        Axios({ method: 'post',
            url: 'User/Register',
            params: {
                name: name,
                userName: userName,
                password: password,
                phoneNumber: phoneNumber,
                streetAddress: streetAddress,
                city: city,
                postalCode: postalCode
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
                <label htmlFor="name">Name</label>
                <input id="name" type="number" onChange={handleFieldChange} />
                <br />
                <label htmlFor="userName">UserName</label>
                <input id="userID" type="text" onChange={handleFieldChange} />
                <br />
                <label htmlFor="password">Password</label>
                <input id="password" type="password" onChange={handleFieldChange} />
                <br />
                <label htmlFor="phoneNumber">Phone Number</label>
                <input id="PhoneNumber" type="text" onChange={handleFieldChange} />
                <br />
                <label htmlFor="streetAddress">Street Address</label>
                <input id="streetAddress" type="text" onChange={handleFieldChange} />
                <br />
                <label htmlFor="city">City </label>
                <input id="city" type="text" onChange={handleFieldChange} />
                <br />
                <label htmlFor="postalCode">Price</label>
                <input id="postalCode" type="text" onChange={handleFieldChange} />
                <br />
                <br />
                <input class="btn btn-primary" type="submit" value="Submit" />
            </form>
        </div>
    );
   
}