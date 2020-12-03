import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';


function EditListing(props)  {
    
    
    const { id } = useParams();
    const [listing , setListing] = useState({
        make: "",
        model: "",
        kms: "",
        year: "",
        description: "",
        price: ""
    });
    const { make, model, kms, description,year, price } = listing;

   

    

    const handleFieldChange = e => {
        const { id, value } = e.target;
        setListing(prevState => ({
            ...prevState,
            [id]: value,
        }));

    };
      useEffect(() => {
    loadListing();
  }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        await axios.put(`http://localhost:44314/VehicleAPI/UpdateLisitingByID=${id}`, listing);
       
};

   
  
    const loadListing = async () => {
        const result = await axios.get(`http://localhost:44314/VehicleAPI/ByID=${id}`);
        setListing(result.data)
    }

    return (
        <div class="container">
            <h1>Create Listing</h1>

        

            <form onSubmit={e => handleSubmit(e)} class="well form-horizontal" id="contact_form" >

                
                <label htmlFor="make">Make</label>
                <input id="make" type="text" value={make} onChange={e => handleFieldChange(e)} />
                <br />
                <label htmlFor="model">Model</label>
                <input id="model" type="text" value={model} onChange={e => handleFieldChange(e)} />
                <br />
                <label htmlFor="kms">Odometer</label>
                <input id="kms" type="number" value={kms} onChange={e => handleFieldChange(e)} />
                <br />
                <label htmlFor="year">Year </label>
                <input id="year" type="number" value={year} onChange={e => handleFieldChange(e)} />
                <br />
                <label htmlFor="description">Description </label>
                <textarea id="description" type="text" value={description}onChange={e => handleFieldChange(e)} />
                <br />
                <label htmlFor="Price">Price</label>
                <input id="price" type="number" value={price}onChange={e => handleFieldChange(e)} />
                <br />
                <br />
                <input class="btn btn-primary" type="submit" value="Save Changes" />
                <button class="btn btn-warning" value = "Cancel">Cancel</button>
            </form>
        </div>
    );
};

export { EditListing };