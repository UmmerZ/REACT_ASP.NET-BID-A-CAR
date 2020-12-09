import React, { useState } from 'react';
import axios from 'axios';
import { NavMenu } from '../NavMenu';
import { useHistory } from 'react-router-dom';
import { Footer } from '../PageLayout/Footer';


function CreateListing(props) {
    const [statusCode, setStatusCode] = useState(0);
    const [ setResponse] = useState([]);
    const [make, setMake] = useState('');
    const [model, setModel] = useState('');
    const [kms, setKms] = useState('');
    const [year, setYear] = useState('');
    const [description, setDescription] = useState('');
    const [userID, setUserID] = useState('');
    const [price, setPrice] = useState('');
    const history = useHistory();
    const [error, setError] = useState('');


    const [waiting, setWaiting] = useState(false);

    function handleFieldChange(event) {
        switch (event.target.id) {
            case 'make':
                setMake(event.target.value);
                break;
            case 'model':
                setModel(event.target.value);
                break;
            case 'kms':
                setKms(event.target.value);
                break;
            case 'year':
                setYear(event.target.value);
                break;
            case 'description':
                setDescription(event.target.value);
                break;
            case 'userID':
                setUserID(event.target.value);
                break;
            case 'price':
                setPrice(event.target.value);
                break;
        }
    }

    function handleSubmit(event) {
        event.preventDefault();
        if (make === "" || model === "" || kms === "" || year === "" || description === "" || userID === "" || price === "") {
            setError(true)
        }
        setWaiting(true);

        axios(
            {
                method: 'post',
                url: 'VehicleAPI/Create',

                params: {
                    make,
                    model,
                    kms,
                    year,
                    description,
                    userID,
                    price,
                },
            },

        ).then((response) => {
            console.log(response, statusCode);
            setWaiting(false);
            setResponse(response.data);
            setStatusCode(response.status);
            history.push('/get-listings');
        }).catch((err) => {
            setWaiting(false);
            setError(true);
            setResponse(err.response.data);
            setStatusCode(err.response.status);
        });
    }

    return (
        <>
            <NavMenu />
            <h1 className="shadow p-3 mb-5 bg-dark rounded text-white text-center ">Create A Listing</h1>
            <section id="cover" className="min-vh-100">
                <div id="cover-caption">

                    <div className="container">
                        <div className="row text-white">
                            <div className="col-xl-5 col-lg-6 col-md-8 col-sm-10 mx-auto text-center form p-4">
                                <p>{waiting ? 'Listing has been Posted' : ' '}</p>
                                <div className="px-2">
                                    <form onSubmit={handleSubmit} className="justify-content-center">
                                        <div className="form-group">
                                            <label className="sr-only" htmlFor="make">Make</label>
                                            <input type="text" className="form-control" placeholder="Make" id="make" onChange={handleFieldChange} />
                                        </div>
                                        <div className="form-group">
                                            <label className="sr-only" htmlFor="model">Model</label>
                                            <input type="text" className="form-control" placeholder="Model" id="model" onChange={handleFieldChange} />
                                        </div>
                                        <div className="form-group">
                                            <label className="sr-only" htmlFor="year">Year</label>
                                            <input type="number" className="form-control" placeholder="Year" id="year" onChange={handleFieldChange} />
                                        </div>
                                        <div className="form-group">
                                            <label className="sr-only" htmlFor="kilometers">Odometer</label>
                                            <input type="number" className="form-control" placeholder="Kilometers" id="kms" onChange={handleFieldChange} />
                                        </div>
                                        <div className="form-group">
                                            <label className="sr-only" htmlFor="price">Price</label>
                                            <input type="number" className="form-control" placeholder="Price" id="price" onChange={handleFieldChange} />
                                        </div>
                                        <div className="form-group">
                                            <label className="sr-only" htmlFor="userID">User ID</label>
                                            <input type="number" className="form-control" placeholder="User ID" id="userID" onChange={handleFieldChange} />
                                        </div>
                                        <div className="form-group">
                                            <label className="sr-only" htmlFor="description">Description</label>
                                            <textarea type="text" className="form-control" placeholder="Description" id="description" onChange={handleFieldChange} />
                                        </div>
                                        {error && (
                                            <error style={{ color: "red" }}>Fields cannot be blank!</error>
                                        )}
                                        <input type="submit" value="Add Lisitng" className="btn btn-info btn-block my-4" />
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
          <Footer />
        </>
    );
}

export { CreateListing };
