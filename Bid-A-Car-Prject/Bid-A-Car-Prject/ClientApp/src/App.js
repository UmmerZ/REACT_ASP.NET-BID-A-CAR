import React, {  useState } from 'react';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

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
import { WelcomeUsers } from './components/PageLayout/WelcomeUser';
import { ConfirmListing } from './components/Listings/ListingConfomration';



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
                        <Switch>
                <PrivateRoute exact path='/' component={Home} />
                <Route path="/login" component={Login} />
                        <Route path='/signup' component={RegisterUser} />
                        <Route exact path='/edit-listing/:id' component={EditListing} />
                        <Route path='/welcome-users' component={WelcomeUsers} />
                        <PrivateRoute path='/create-Images' component={FileUpload} />
                        <PrivateRoute path='/user-profile' component={UserProfile} />
                        <PrivateRoute path='/get-listings' component={GetListings} />
                            <PrivateRoute path='/create-listing' component={CreateListing} />
                            <PrivateRoute path='/admin' component={Admin} />
                            <PrivateRoute path='/message-confirmation' component={ConfirmListing} />
                            </Switch>
                    </Router>
                    
                </AuthContext.Provider>
             </> 
        );
    }

export default App;