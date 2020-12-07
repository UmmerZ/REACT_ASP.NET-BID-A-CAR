import React, { useState, useEffect } from "react";
import axios from "axios";
import { Button } from "bootstrap";
import { Link } from "react-router-dom";


function GetListings(props) {
  
  const [id, setID] = useState("");

  // Configure our state, and our setState standin methods.
  const [vehicles, setVehicles] = useState([]);
  const [loading, setLoading] = useState(true);
    const [response, setResponse] = useState();
    const deleteListing =  (id) => {
       
      const payload = props.match.params.id;
        fetch(
            "https://localhost:44314/VehicleAPI/DeleteListing?id=" + id, { method: 'delete' }
               
    
        );
       
  };

  // Build the table based on forecast data.
  function renderProductsTable(vehicles) {
      return (
          <>
        
      <div className="card-body" >
        {vehicles.map(product => {
            return (
                
            <div>
              <img src={product.imageUrl} />
              <h5 className="card-title" >Make: {product.make}
              </h5>
              <h6 className=" card-subtitle mb-2 text-muted">Model: {product.model}
              </h6>
              <h6 className=" card-subtitle mb-2 text-muted">Year: {product.year}
              </h6>
              <p class="card-text">Description: 
                {product.description}
              </p>
              <h6 className=" card-subtitle mb-2 text-muted">Price: {product.price}
              </h6>
              <h6 className=" card-subtitle mb-2 text-muted">Kilometers:   {product.kilometers}
              </h6>

              <div class="btn-toolbar">
                <Link class="button-view">View</Link>
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
      <h1 className="shadow p-3 mb-5 bg-dark rounded ">Listings</h1>
      <p>This component demonstrates fetching data from the server.</p>
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
