import React, { useState, useEffect} from 'react';
import axios from 'axios';
import { Button } from 'bootstrap';
import { Link } from 'react-router-dom';

function GetListings(props) {
    const displayName = GetListings.name;
    const [vehicleID, setVehicleID] = useState("");

    // Configure our state, and our setState standin methods.
    const [vehicles, setVehicles] = useState([]);
    const [loading, setLoading] = useState(true);
   
    const deleteListing = async () => {
        const payload = { vehicleID: vehicles.vehicleID };
        await axios.delete("http://localhost:44314/VehicleAPI/DeleteListing?vehicleID=${vehicleID", payload);
    }

    // Build the table based on forecast data.
    function renderProductsTable(vehicles) {
        return (
           
                
            <div>
                {vehicles.map(product => {
                    return (
                        <div>
                            
                            <img src={ product.imageUrl}/>
                            <div><strong>Make:</strong> {product.make}</div>
                            <div><strong>Model:</strong> {product.model}</div>
                            <div><strong>Year</strong> {product.year}</div>
                            <div><strong>Description: </strong>{product.description}</div>
                            <div><strong>Price:</strong> {product.price}</div>
                           
                            <div class = "btn-toolbar">
                                < Link class="button-view" >View</Link>
                                < Link class="button-view" to={"/edit-listing"+product.id} >Edit</Link>
                                < Link class="button-view" onClick={() => deleteListing(product.vehicleID)} >Delete</Link>
                            </div>
                            <hr />
                        </div>
                    );

                } )}
               </div>
        );
    }



    // Grab our data from our API.
    async function populateProductData() {

        const response = await axios.get('VehicleAPI/All');
        setVehicles(response.data);
        setLoading(false);
    }

    useEffect(() => {
        populateProductData();
    }, [loading]);

    let contents = loading
        ? <p><em>Loading...</em></p>
        : renderProductsTable(vehicles);

    return (

        <div className= "">
            <h1 className="shadow p-3 mb-5 bg-dark rounded " >Listings</h1>
            <p>This component demonstrates fetching data from the server.</p>
            {contents}
            <hr/>
            <button className="btn btn-primary" onClick={() => { setLoading(true) }}>Refresh</button>
        </div>
    );
}

export { GetListings };