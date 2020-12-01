﻿import React, { useState } from 'react';
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
    const [imageUrl, setImageUrl] = useState("");
    const [imageFile, setImageFile] = useState("");


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
            case "imageFile":
                setImageFile(event.target.files[0]);
                break;
           
            
        }
    }

    function handleSubmit(event) {
        event.preventDefault();
        setWaiting(true);
        const formData = new FormData();
        formData.append('file', imageFile);
        

        axios(
            {
                method: 'post',
                url: 'Vehicle/Create',
                headers: { 'Content-Type': 'multipart/form-data' },
                data: formData,
                params: {
                   vehicleID: vehicleID,
                    make: make,
                    model: model,
                    kms: kms,
                    year: year,
                    description: description,
                    userID: userID,
           
                    


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
        <div >
            <h1>Create Listing</h1>

            <p>{waiting ? "Awaiting response..." : `Response recieved ${statusCode}: ${JSON.stringify(response)}`}</p>

            <form onSubmit={handleSubmit} class="form-group" >
                <label htmlFor="vehicleID">Listing ID</label>
                <input class="form-control"  id="vehicleID" type="number" onChange={handleFieldChange} />
                <br />
                <label htmlFor="userID">UserID</label>
                <input class="form-control" id="userID" type="number" onChange={handleFieldChange} />
                <br />
                <label htmlFor="make">Make</label>
                <input class="form-control" id="make" type="text" onChange={handleFieldChange} />
                <br />
                <label htmlFor="model">Model</label>
                <input class="form-control"  id="model" type="text" onChange={handleFieldChange} />
                <br />
                <label htmlFor="kms">Odometer</label>
                <input class="form-control" id="kms" type="number" onChange={handleFieldChange} />
                <br />
                <label htmlFor="year">Year </label>
                <input class="form-control" id="year" type="number" onChange={handleFieldChange} />
                <br />
                <label htmlFor="description">Description </label>
                <textarea class="form-control" id="description" type="text" onChange={handleFieldChange} />
                <br />
                <div class="custom-file">
                   <label class="custom-file-label" for="imageFile">Choose file</label>
                    <input type="file" class="custom-file-input" id="imageFile" onChange={handleFieldChange} />
                </div>
                <br />
                <input class="btn btn-primary"type="submit" value="Submit" />
            </form>
        </div>
    );
}

export { CreateListing };