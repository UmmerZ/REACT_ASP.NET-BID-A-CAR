import React, { useState}from "react";
import { Redirect } from "react-router-dom";
import { useAuth } from "../context/Auth";


/**********************************************************************************************************
 * Code Borrowed from = ttps://medium.com/better-programming/building-basic-react-authentication-e20a574d5e71
 * ********************************************************************************************************/

function Admin(props) {
    const { setAuthTokens } = useAuth();
    
   function logOut() {
       setAuthTokens();
       localStorage.clear("tokens");
         return  <Redirect to='/login' />
       
       
    }

    return (
        <div>
            <div>Admin Page</div>
            <button onClick={logOut}>Log out</button>
        </div>
    );
}

export default Admin;