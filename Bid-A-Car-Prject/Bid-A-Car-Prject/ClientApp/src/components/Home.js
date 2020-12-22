import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Footer } from './PageLayout/Footer';
import { NavMenu } from './NavMenu';


export function Home(props) {


    const [vehicles, setVehicles] = useState([]);
    const [loading, setLoading] = useState(true);
   
    
   

    // Build the table based on forecast data.
    function renderProductsTable(vehicles) {
        return (
            <>

                <div className="card-body" >
                    {vehicles.map(product => {
                        return (

                            <div>
                                <h5 className="card-title" >Make: {product.make}
                                </h5>
                                <h6 className=" card-subtitle mb-2 text-muted">Model: {product.model}
                                </h6>
                                <h6 className=" card-subtitle mb-2 text-muted">Year: {product.year}
                                </h6>
                                <h6 className=" card-subtitle mb-2 text-muted">Kilometers:   {product.kilometers}
                                </h6>
                                <h6 className=" card-subtitle mb-2 text-muted">Price: {product.price}
                                </h6>
                                <p className="card-text"><strong>Description:
                </strong>{product.description}
                                </p>
                                <button></button>
                                  
                                <hr />
                            </div>

                        );

                    })}
                </div>
            </>
        );
    }

    // Grab our data from our API.
    async function populateProductData() {
        const response = await axios.get("VehicleAPI/All");
        setVehicles(response.data);
        setLoading(false);
    }

    useEffect(() => {
        populateProductData();
    }, [loading]);

    let contents = loading ? (
        <p>
            <em>Loading...</em>
        </p>
    ) : (
            renderProductsTable(vehicles)
        );

  
    /******************************************************************
     code for images borrowed from-https://stackoverflow.com/questions/26054512/react-img-tag-issue-with-url-and-class
     ********************************************************************/

    return (
        <div className="text-center">
            <NavMenu />
            
            <div>
                <img src={require('./images/website_logo.jpg')} alt = "bid a car logo"/>
            </div>
            <h1 className="shadow p-3 mb-5 bg-dark rounded text-white text-center ">Current Listings</h1>
            <div>
                {contents}
            </div>
            
           
       <Footer />
      </div>
    );
  }

