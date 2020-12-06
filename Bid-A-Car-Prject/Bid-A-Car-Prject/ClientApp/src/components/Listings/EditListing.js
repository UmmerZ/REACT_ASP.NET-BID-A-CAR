﻿import React, { Component, useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { NavMenu } from '../NavMenu';

/**************************************************************
 Code Borrowed from-https://github.com/toofaniCoder/React-Users.
 *************************************************************/
class EditListing extends React.Component {
    constructor(props) {
        super(props)
       
        this.make = this.make.bind(this);
        this.model = this.model.bind(this);
        this.kilometers = this.kilometers.bind(this);
        this.year = this.year.bind(this);
        this.description = this.description.bind(this);
        this.price = this.price.bind(this);
        this.onSubmit = this.onSubmit.bind(this); 

        this.state = {
            make: "",
            model: "",
            kilometers: "",
            year: "",
            description: "",
            price: "",
           
        }
    }
    componentDidMount() {
        console.log(this.props.match.params)
        axios.get('https://localhost:44314/VehicleAPI/ByID?id=' + this.props.match.params.id)
            .then(response => {
                this.setState({
                    make: response.data.make,
                    model: response.data.model,
                    kilometers: response.data.kilometers,
                    year: response.data.year,
                    description: response.data.description,
                    price: response.data.price,

                });
            })
            .catch(function (error) {
               
                if (error.response) {
                    // The request was made and the server responded with a status code
                    // that falls out of the range of 2xx
                    console.log(error.response.data);
                    console.log(error.response.status);
                    console.log(error.response.headers);
                } else if (error.request) {
                    // The request was made but no response was received
                    // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
                    // http.ClientRequest in node.js
                    console.log(error.request);
                } else {
                    // Something happened in setting up the request that triggered an Error
                    console.log('Error', error.message);
                }
                console.log(error.config);
            })
    }

    make = (e) => {
        this.setState({
            make: e.target.value
        });
    }
    model = (e) => {
        this.setState({
            model: e.target.value
        });
    }
    kilometers = (e) => {
        this.setState({
            kilometers: e.target.value
        });
    }
    description = (e) => {
        this.setState({
            description: e.target.value
        });
    }
    year = (e) => {
        this.setState({
            year: e.target.value
        });
    }
    price = (e) => {
        this.setState({
            price: e.target.value
        });
    }

    onSubmit(e) {
       
        e.preventDefault();
        const obj = {
            id: this.state.id,
            make: this.state.make,
            model: this.state.model,
            kilometers: this.state.kilometers,
            year: this.state.year,
            description: this.state.description,
            price: this.state.price

        };
        axios.put('https://localhost:44314/VehicleAPI/UpdateListing/', obj)
            .then(res => console.log(res.data));
       
        this.props.history.push('/GetListing') 
    }
    render() {



        return (
           <>
                <NavMenu />
                <section id="cover" className="min-vh-100">
                    <div id="cover-caption">
                        <div className="container">
                            <div className="row text-white">
                                <div className="col-xl-5 col-lg-6 col-md-8 col-sm-10 mx-auto text-center form p-4">
                                    <h1 className="display-5 py-2 ">Edit Listing</h1>
                                    <div className="px-2">
                <form onSubmit={this.onSubmit} id="contact_form" >
                                            <div className="form-group">
                                                <label className="sr-only" htmlFor="id">ID</label>
                    <input name="make" type="hidden" className="form-control mb-4" value={this.state.id} onChange={this.id} />
                                            </div>
                                            <div className="form-group">
                                                <label className="sr-only"  htmlFor="make">Make</label>
                                                <input name="make" type="text" className="form-control mb-4" value={this.state.make} onChange={this.make} />
                                            </div>
                                                <div className="form-group">
                                                <label className="sr-only"  htmlFor="model">Model</label>
                                                <input name="model" type="text" className="form-control mb-4" value={this.state.model} onChange={this.model} />
                                            </div>
                                                    <div className="form-group">
                                                <label className="sr-only"  htmlFor="kilometers">Odometer</label>
                                                <input name="kilometers" type="number" className="form-control mb-4" value={this.state.kilometers} onChange={this.kilometers} />
                                            </div>
                                                        <div className="form-group">
                                                <label className="sr-only"  htmlFor="year">Year </label>
                                                <input name="year" type="number" className="form-control mb-4" value={this.state.year} onChange={this.year} />
                                            </div>
                                                            <div className="form-group">
                                                <label className="sr-only"  htmlFor="description">Description </label>
                                                <textarea name="description" className="form-control mb-4" type="text" value={this.state.description} onChange={this.description} />
                                            </div>
                                                                <div className="form-group">
                                                <label className="sr-only"  htmlFor="Price">Price</label>
                                                <input name="price" type="number" className="form-control mb-4" value={this.state.price} onChange={this.price} />
                                            </div>
                  
                    <input class="btn btn-outline-info btn-rounded btn-block z-depth-0 my-4 waves-effect" type="submit" value="Save Changes" />
                    <button class="btn btn-outline-info btn-rounded btn-block z-depth-0 my-4 waves-effect" value="Cancel">Cancel</button>
                </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </>
        );
    }
} export { EditListing };
