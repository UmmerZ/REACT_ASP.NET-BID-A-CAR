import React, { Component } from 'react';
import { Route } from 'react-router';
import { BrowserRouter, Switch } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { GetListings } from './components/Listings/GetListings';
import { CreateListing } from './components/Listings/CreateListing';
import { RegisterUser } from './components/Users/RegisterUser';
import './custom.css'
import { FileUpload } from './components/FileUpload';
import { Registration } from './components/Users/UserProfile';
import Logins from './components/Users/Login';
import { EditListing } from './components/Listings/EditListing';



export default class App extends Component {
    static displayName = App.name;

    render() {
        return (
            <div>
                <BrowserRouter>
            <Switch>
                <Route exact path='/' component={Home} />
                <Route path='/create-listing' component={CreateListing} />
                <Route path='/get-listings' component={GetListings} />
                <Route path='/create-Images' component={FileUpload} />
                <Route path='/registration' component={Registration} />
                <Route path='/logins' component={Logins} />
                <Route path='/register-user' component={RegisterUser} />
                <Route exact path='/edit-listing/:id' component={EditListing} />
                    </Switch>
                    </BrowserRouter>
             </div>   
        );
    }
}
