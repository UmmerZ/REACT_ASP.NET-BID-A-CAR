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
                <Route exact path='/' component={Home} />
                        <Route path='/create-listing' component={CreateListing} />
                <Route path="/login" component={Login} />
                <Route path='/get-listings' component={GetListings} />
                        <Route path='/create-Images' component={FileUpload} />
                        <Route path='/user-profile' component={UserProfile} />
                <Route path='/login' component={Login} />
                <Route path='/signup' component={RegisterUser} />
                        <Route exact path='/edit-listing/:id' component={EditListing} />

                    </Router>
                    
                </AuthContext.Provider>
             </> 
        );
    }

export default App;