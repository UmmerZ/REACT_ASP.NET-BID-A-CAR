﻿import React, { useState } from 'react';
import axios from 'axios';

function CreateListing(props) {
    
    const [statusCode, setStatusCode] = useState(0);
    const [response, setResponse] = useState([]);
   
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
        switch (event.target.id) {
            
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
        <div class= "form-control">
            <h1 class="shadow p-3 mb-5 bg-dark rounded ">Create Listing</h1>

            

            <form onSubmit={handleSubmit} class="well form-horizontal" id="contact_form" >
              
              
                <div className="row">

                <label htmlFor="make"></label>
                    <input className= "col" id="make" type="text" placeholder="Make"onChange={handleFieldChange} />
                
                <label htmlFor="model"></label>
                    <input className="col" id="model" type="text" placeholder="Model" onChange={handleFieldChange} />
                </div>

                <div className="row">
                <label htmlFor="kms"></label>
                    <input className="col" id="kms" type="number" placeholder="Kilometers" onChange={handleFieldChange} />
                
                <label htmlFor="year"> </label>
                    <input className="col" id="year" type="number" placeholder="Year" onChange={handleFieldChange} />
                </div>
                <div className="row" >
                    <label htmlFor="Price"></label>
                    <input className="col" id="price" type="number" placeholder="Price" onChange={handleFieldChange} />

                    <label htmlFor="color"></label>
                    <input className="col" id="color" type="text" placeholder="Color" onChange={handleFieldChange} />
                </div>
                <div className= "row">
                <label htmlFor="description"> </label>
                    <textarea id="description" cols="100" type="text" placeholder="Description"  onChange={handleFieldChange} />
                </div>
               
                <input class="btn btn-primary" type="submit" value="Add Listing" />
            </form>
        </div>
    );
}

export { CreateListing };