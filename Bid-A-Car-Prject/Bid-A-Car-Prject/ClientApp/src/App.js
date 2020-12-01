import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { GetListings } from './components/GetListings';
import { CreateListing } from './components/CreateListing';

import './custom.css'
import { FileUpload } from './components/FileUpload';
import { Registration } from './components/RegisterUser';
import Logins from './components/Login';

export default class App extends Component {
    static displayName = App.name;

    render() {
        return (
            <Layout>
                <Route exact path='/' component={Home} />
                <Route path='/create-listing' component={CreateListing} />
                <Route path='/get-listings' component={GetListings} />
                <Route path='/create-Images' component={FileUpload} />
                <Route path='/registration' component={Registration} />
                <Route path='/logins' component={Logins} />
            </Layout>
        );
    }
}
