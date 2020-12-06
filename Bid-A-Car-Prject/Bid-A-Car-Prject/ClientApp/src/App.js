import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { BrowserRouter, Switch } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { GetListings } from './components/Listings/GetListings';
import { CreateListing } from './components/Listings/CreateListing';
import { RegisterUser } from './components/Users/RegisterUser';
import './custom.css'
import { FileUpload } from './components/FileUpload';
import { Registration } from './components/Users/UserProfile';
import Login from './components/Users/Login';
import { EditListing } from './components/Listings/EditListing';
import Dashboard from './components/PageLayout/Dashboard';

import { NavMenuLogin } from './components/PageLayout/NavMenuLogin';
import About from './components/Listings/NewFolder/About';



export default class App extends Component {

    constructor() {
        super();

        this.state = {
            loggedInStatus: "NOT_LOGGED_IN",
            user: {}
        };
        this.handleLogin = this.handleLogin.bind(this);
    }
    handleLogin(data) {
        this.setState({
            loggedInStatus: "LOGGED_IN",
            user: data
        });
    }
    static displayName = App.name;

    render() {
        return (
            <div>
                <BrowserRouter>
            <Switch>
                        <Route exact path={'/'} render={props =>
                            (<Home {...props} handleLogin={ this.handleLogin}loggedInStatus={this.state.loggedInStatus} />
                            )}
                        />
                        <Route exact path={'/dashboard'} render={props =>
                            (<Dashboard {...props} loggedInStatus={this.state.loggedInStatus} />
                            )}
                        />
                <Route path='/create-listing' component={CreateListing} />
                <Route path='/get-listings' component={GetListings} />
                <Route path='/create-Images' component={FileUpload} />
                <Route path='/registration' component={Registration} />
                <Route path='/login' component={Login} />
                <Route path='/register-user' component={RegisterUser} />
                        <Route exact path='/edit-listing/:id' component={EditListing} />
                        <Route path='/nav-menu-login' component={NavMenuLogin} />
                        <Route path='/about' component={About} />
                    </Switch>
                    </BrowserRouter>
             </div>   
        );
    }
}
