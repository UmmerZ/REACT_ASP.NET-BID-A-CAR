import React, { Component, useState } from 'react';

import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { GetListings } from './components/Listings/GetListings';
import { CreateListing } from './components/Listings/CreateListing';
import { RegisterUser } from './components/Users/RegisterUser';
import './custom.css'
import { FileUpload } from './components/FileUpload';

import Login from './components/Login';
import { EditListing } from './components/Listings/EditListing';
import { AuthContext } from './context/Auth';
import { UserProfile } from './components/Users/UserProfile';
import  PrivateRoute  from './components/PrivateRoute';
import Admin from './components/Admin';



function App(props) {
    const existingTokens = JSON.parse(localStorage.getItem("tokens"));
    const [authTokens, setAuthTokens] = useState(existingTokens);

    const setTokens = data => {
        localStorage.setItem("tokens", JSON.stringify(data));
        setAuthTokens(data);
    };
    
        return (
           <>
                 <AuthContext.Provider value={{ authTokens, setAuthTokens: setTokens }}>
            <Router>
                <PrivateRoute exact path='/' component={Home} />
                <Route path="/login" component={Login} />
                        <Route path='/signup' component={RegisterUser} />
                        <Route exact path='/edit-listing/:id' component={EditListing} />
                        <PrivateRoute path='/create-Images' component={FileUpload} />
                        <PrivateRoute path='/user-profile' component={UserProfile} />
                        <PrivateRoute path='/get-listings' component={GetListings} />
                        <PrivateRoute path='/create-listing' component={CreateListing} />
                    </Router>
                    
                </AuthContext.Provider>
             </> 
        );
    }

export default App;