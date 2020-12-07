import React from "react";
import { Redirect } from "react-router-dom";

import { useAuth } from "../context/Auth";

function Admin(props) {
    const { setAuthTokens } = useAuth();

   function logOut() {
       setAuthTokens();
       if (logOut()) {
         return  <Redirect to='/login' />
       }
       
    }

    return (
        <div>
            <div>Admin Page</div>
            <button onClick={logOut}>Log out</button>
        </div>
    );
}

export default Admin;