import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Button } from 'bootstrap';

function GetListings(props) {
    const displayName = GetListings.name;

    // Configure our state, and our setState standin methods.
    const [vehicles, setVehicles] = useState([]);
    const [loading, setLoading] = useState(true);

    // Build the table based on forecast data.
    function renderProductsTable(vehicles) {
        return (
           
                
            <div>
                {vehicles.map(product => {
                    return (
                        <div>
                            
                            <img src={ product.imageUrl}/>
                            <div>{product.make}</div>
                            <div>{product.model}</div>
                            <div>{product.year}</div>
                            <div>{product.description}</div>
                            < button class = "btn btn-success"type="submit" value="Bid">Bid</button>
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

        <div>
            <h1 id="tabelLabel" >Listings</h1>
            <p>This component demonstrates fetching data from the server.</p>
            {contents}

            <button className="btn btn-primary" onClick={() => { setLoading(true) }}>Refresh</button>
        </div>
    );
}

export { GetListings };