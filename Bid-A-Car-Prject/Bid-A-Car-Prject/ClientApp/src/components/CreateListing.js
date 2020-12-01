import React, { useState } from 'react';
import axios from 'axios';

function CreateListing(props) {
    
    const [statusCode, setStatusCode] = useState(0);
    const [response, setResponse] = useState([]);
    const [vehicleID, setVehicleID] = useState("");
    const [make, setMake] = useState("");
    const [model, setModel] = useState("");
    const [kms, setKms] = useState("");
    const [year, setYear] = useState("");
    const [description, setDescription] = useState("");
    const [userID, setUserID] = useState("");
    const [imageUrl, setImageUrl] = useState("sample.jpg");
    const [isSold, setIsSold] = useState("false")
    const [price, setPrice] = useState("");


    const [waiting, setWaiting] = useState(false);

    function handleFieldChange(event) {
        switch (event.target.make) {
            case "vehicleID":
                setVehicleID(event.target.value);
                break;
            case "make":
                setMake(event.target.value);
                break;
            case "model":
                setModel(event.target.value);
                break;
            case "kms":
                setKms(event.target.value);
                break;
            case "year":
                setYear(event.target.value);
                break;
            case "description":
                setDescription(event.target.value);
                break;
            case "userID":
                setUserID(event.target.value);
                break;
            case "price":
                setPrice(event.target.value);
                break;
           
            
        }
    }

    function handleSubmit(event) {
        event.preventDefault();
        setWaiting(true);
        const formData = new FormData();
       
        

        axios(
            {
                method: 'post',
                url: 'VehicleAPI/Create',
                
                params: {
                   vehicleID: vehicleID,
                    make: make,
                    model: model,
                    kms: kms,
                    year: year,
                    description: description,
                    userID: userID,
                    price: price,
                    isSold: isSold,
                    imageUrl: imageUrl
           
                    


                }
            }

        ).then((res) => {

            setWaiting(false);
            setResponse(res.data);
            setStatusCode(res.status);
        }

        ).catch((err) => {
            setWaiting(false);
            setResponse(err.response.data);
            setStatusCode(err.response.status);
        });
    }

    return (
        <div class= "container">
            <h1>Create Listing</h1>

            <p>{waiting ? "Awaiting response..." : `Response recieved ${statusCode}: ${JSON.stringify(response)}`}</p>

            <form onSubmit={handleSubmit} class="well form-horizontal" id="contact_form" >
                <label htmlFor="vehicleID">Listing ID</label>
                <input  id="vehicleID" type="number" onChange={handleFieldChange} />
                <br />
                <label htmlFor="userID">UserID</label>
                <input  id="userID" type="number" onChange={handleFieldChange} />
                <br />
                <label htmlFor="make">Make</label>
                <input  id="make" type="text" onChange={handleFieldChange} />
                <br />
                <label htmlFor="model">Model</label>
                <input   id="model" type="text" onChange={handleFieldChange} />
                <br />
                <label htmlFor="kms">Odometer</label>
                <input  id="kms" type="number" onChange={handleFieldChange} />
                <br />
                <label htmlFor="year">Year </label>
                <input  id="year" type="number" onChange={handleFieldChange} />
                <br />
                <label htmlFor="description">Description </label>
                <textarea  id="description" type="text" onChange={handleFieldChange} />
                <br />
                <label htmlFor="Price">Price</label>
                <input  id="price" type="number" onChange={handleFieldChange} />
                <br />
                <br />
                <input class="btn btn-primary" type="submit" value="Submit" onClick={handleSubmit} />
            </form>
        </div>
    );
}

export { CreateListing };