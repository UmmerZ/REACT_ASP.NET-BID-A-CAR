import React from "react";
import { Redirect } from "react-router-dom";
import { useAuth } from "../context/Auth";
import { NavMenu } from "./NavMenu";


/**********************************************************************************************************
 * Code Borrowed from = ttps://medium.com/better-programming/building-basic-react-authentication-e20a574d5e71
 * ********************************************************************************************************/

function Admin(props) {
    const { setAuthTokens } = useAuth();

    // this action will clear the token from the local storage that means user is no longer authenticated
   function logOut() {
       setAuthTokens();
       localStorage.clear("tokens");
         return  <Redirect to='/login' />
       
       
    }

    return (
        <div className="welcome-users">
            <NavMenu />
            <h1 className="welcome">Are you Sure</h1>
            <h2 className="h2-line">Click below to Proceed...</h2>
            <button className= "a" onClick={logOut}>Yes I want to Logout!</button>
        </div>
    );
}

export default Admin;