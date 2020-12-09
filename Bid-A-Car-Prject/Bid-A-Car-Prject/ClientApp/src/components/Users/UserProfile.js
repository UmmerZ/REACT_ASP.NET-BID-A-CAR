import React  from 'react';
import axios from 'axios';
import { NavMenu } from '../NavMenu';

/**************************************************************
 Code Borrowed from-https://github.com/toofaniCoder/React-Users.
 *************************************************************/
class UserProfile extends React.Component {
    constructor(props) {
        super(props)

        this.name = this.name.bind(this);
        this.userName = this.userName.bind(this);
        this.password = this.password.bind(this);
        this.email = this.email.bind(this);
        this.phoneNumber = this.phoneNumber.bind(this);
        this.streetAddress = this.streetAddress.bind(this);
        this.postalCode = this.postalCode.bind(this);
        this.city = this.city.bind(this);
        this.UpdateonSubmit = this.onSubmit.bind(this);

        this.state = {
            name: "",
            userName: "",
            email: "",
            password: "",
            streetAddress: "",
            phoneNumber: "",
            postalCode: "",
            city: ""

        }
    }
    componentDidMount() {
        console.log(this.props.match.params)
        axios.get("https://localhost:44314/User/ByID?userID=2")
            .then(response => {
                this.setState({
                    name: response.data.name,
                    userName: response.data.userName,
                    password: response.data.password,
                    email: response.data.email,
                    phoneNumber: response.data.phoneNumber,
                    streetAddress: response.data.streetAddress,
                    postalCode: response.data.postalCode,
                    city: response.data.city

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
  
   name = (e) => {
        this.setState({
            name: e.target.value
        });
    }
    userName = (e) => {
        this.setState({
            userName: e.target.value
        });
    }
    email = (e) => {
        this.setState({
            email: e.target.value
        });
    }
    password = (e) => {
        this.setState({
            password: e.target.value
        });
    }
    phoneNumber = (e) => {
        this.setState({
            phoneNumber: e.target.value
        });
    }
    streetAddress = (e) => {
        this.setState({
            streetAddress: e.target.value
        });
    }
    city = (e) => {
        this.setState({
            city: e.target.value
        });
    }
    postalCode = (e) => {
        this.setState({
            city: e.target.value
        });
    }

    onSubmit(e) {

        e.preventDefault();
        axios({
            method: 'put',
            url: 'VehicleAPI/UpdateListing',
            params: {
                userID: this.state.id,
                name: this.state.name,
                userName: this.state.userName,
                password: this.state.password,
                email: this.state.email,
                phoneNumber: this.state.phoneNumber,
                streetAddress: this.state.streetAddress,
                postalCode: this.state.postalCode,
                city: this.state.city
            }
        }
          ).then(res => console.log(res.data));

        this.props.history.push('/GetListing')
    }
    render() {



        return (
            <>
                <NavMenu />
                <h1 className="shadow p-3 mb-5 bg-dark rounded text-white text-center ">My Profile</h1>
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
                                                <input name="id" type="hidden" className="form-control mb-4" value={this.state.id} onChange={this.id} />
                                            </div>
                                            <div className="form-group">
                                                <label  htmlFor="name">Name</label>
                                                <input name="name" type="text" className="form-control mb-4" value={this.state.name} onChange={this.name} />
                                            </div>
                                            <div className="form-group">
                                                <label  htmlFor="userName">User Name</label>
                                                <input name="userName" type="text" className="form-control mb-4" value={this.state.userName} onChange={this.userName} />
                                            </div>
                                            <div className="form-group">
                                                <label  htmlFor="email">Email</label>
                                                <input name="email" type="email" className="form-control mb-4" value={this.state.email} onChange={this.emails} />
                                            </div>
                                            <div className="form-group">
                                                <label  htmlFor="phoneNumber">Phone Number</label>
                                                <input name="phoneNumber" type="number" className="form-control mb-4" value={this.state.phoneNumber} onChange={this.phoneNumber} />
                                            </div>
                                            <div className="form-group">
                                                <label  htmlFor="streetAddress">Street Address</label>
                                                <input name="streetAddress" className="form-control mb-4" type="text" value={this.state.streetAddress} onChange={this.streetAddress} />
                                            </div>
                                            <div className="form-group">
                                                <label  htmlFor="city">City</label>
                                                <input name="city" type="text" className="form-control mb-4" value={this.state.city} onChange={this.city} />
                                            </div>
                                            <div className="form-group">
                                                <label  htmlFor="postalCode">Postal Code</label>
                                                <input name="postalCode" type="text" className="form-control mb-4" value={this.state.postalCode} onChange={this.postalCode} />
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
} export { UserProfile };