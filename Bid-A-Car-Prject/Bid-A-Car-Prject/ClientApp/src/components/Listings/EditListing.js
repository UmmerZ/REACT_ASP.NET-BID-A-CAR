import React, { Component, useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

/**************************************************************
 Code Borrowed from-https://github.com/toofaniCoder/React-Users.
 *************************************************************/
class EditListing extends React.Component {
    constructor(props) {
        super(props)

        this.ChangeMake = this.make.bind(this);
        this.ChangeModel = this.model.bind(this);
        this.ChangeKms = this.kms.bind(this);
        this.ChangeYear = this.year.bind(this);
        this.ChangeDescription = this.description.bind(this);
        this.ChangePrice = this.price.bind(this);
        this.onSubmit = this.onSubmit.bind(this);


        this.state = {
            make: "",
            model: "",
            kms: "",
            year: "",
            description: "",
            price: ""

        }
    }
    componentDidMount() {
        axios.get('http://localhost:44314/VehicleAPI/Student/ByID?id=' + this.props.match.params.id)
            .then(response => {
                this.setState({
                    name: response.data.name,
                    model: response.data.model,
                    kms: response.data.kms,
                    year: response.data.year,
                    description: response.data.description,
                    price: response.data.price,

                });
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    ChangeMake(e) {
        this.setState({
            make: e.target.value
        });
    }
    ChangeModel(e) {
        this.setState({
            model: e.target.value
        });
    }
    ChangeKms(e) {
        this.setState({
            kms: e.target.value
        });
    }
    ChangeDescription(e) {
        this.setState({
            description: e.target.value
        });
    }
    ChangeYear(e) {
        this.setState({
            year: e.target.value
        });
    }
    ChnnagePrice(e) {
        this.setState({
            price: e.target.value
        });
    }

    onSubmit(e) {
        debugger;
        e.preventDefault();
        const obj = {
            id: this.props.match.params.id,
            make: this.state.make,
            model: this.state.model,
            kms: this.state.kms,
            year: this.state.year,
            description: this.state.description,
            price: this.state.price

        };
        axios.put('http://localhost:44314/VehicleAPI/UpdateListing/', obj)
            .then(res => console.log(res.data));
        debugger;
        this.props.history.push('/GetListing') 
    }
    render() {



        return (
            <div className="text-center border border-light p-5  " >
                <h1 className="shadow p-3 mb-5 bg-dark rounded ">Update Your Listing</h1>



                <form onSubmit={this.onSubmit} id="contact_form" >


                    <label htmlFor="make">Make</label>
                    <input name="make" type="text" className="form-control mb-4" value={this.state.make} onChange={this.ChangeMake} />
                    <br />
                    <label htmlFor="model">Model</label>
                    <input name="model" type="text" className="form-control mb-4" value={this.state.model} onChange={this.ChangeModel} />
                    <br />
                    <label htmlFor="kms">Odometer</label>
                    <input name="kms" type="number" className="form-control mb-4" value={this.state.kms} onChange={this.CHangeKms} />
                    <br />
                    <label htmlFor="year">Year </label>
                    <input name="year" type="number" className="form-control mb-4" value={this.state.year} onChange={this.ChangeYear} />
                    <br />
                    <label htmlFor="description">Description </label>
                    <textarea name="description" className="form-control mb-4" type="text" value={this.state.description} onChange={this.ChangeDescription} />
                    <br />
                    <label htmlFor="Price">Price</label>
                    <input name="price" type="number" className="form-control mb-4" value={this.state.price} onChange={this.ChnagePrice} />
                    <br />
                    <br />
                    <input class="btn btn-outline-info btn-rounded btn-block z-depth-0 my-4 waves-effect" type="submit" value="Save Changes" />
                    <button class="btn btn-outline-info btn-rounded btn-block z-depth-0 my-4 waves-effect" value="Cancel">Cancel</button>
                </form>
            </div>
        );
    }
} export { EditListing };

