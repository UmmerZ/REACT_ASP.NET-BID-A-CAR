import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link,   useHistory } from "react-router-dom";
import { NavMenu } from "../NavMenu";


function GetListings(props) {
  
  
    let history = useHistory();
  // Configure our state, and our setState standin methods.
  const [vehicles, setVehicles] = useState([]);
  const [loading, setLoading] = useState(true);
    const [waiting, setWaiting] = useState();
    function deleteListing (id) {
       
        setWaiting(true);
        
        axios ({
            method: 'delete',
            url: 'VehicleAPI/DeleteListing',

            params: {
                id: id
            }
        }

        ).then(response => {
            console.log(response)

            //this will refresh the list when delete button on that vehicle is pressed.
            if (response.data != null) {
                setVehicles(vehicles.filter(product => product.id !== id));
            }
            
        }   ).catch(error => {
            console.log(error)
        });
       
    };

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
              <p className="card-text">Description: 
                {product.description}
              </p>
              <h6 className=" card-subtitle mb-2 text-muted">Price: {product.price}
              </h6>
              <h6 className=" card-subtitle mb-2 text-muted">Kilometers:   {product.kilometers}
              </h6>

              <div class="btn-toolbar">
                
                <Link class="button-view" to={"/edit-listing/" + product.id}>
                  Edit
                </Link>
                <Link
                  class="button-view"
                  onClick={(id) => deleteListing(product.id)}
                >
                  Delete
                </Link>
              </div>
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

  return (
      <div className="">
          <NavMenu />
          <h1 className="shadow p-3 mb-5 bg-dark rounded text-white text-center ">My Listings</h1>
          <h2> {(vehicles === 0) ? "No Listing Available" : "My Current Listings"}</h2>
      {contents}
      <hr />
      <button
        className="btn btn-primary"
        onClick={() => {
          setLoading(true);
        }}
      >
        Refresh
      </button>
    </div>
  );
}

export { GetListings };
