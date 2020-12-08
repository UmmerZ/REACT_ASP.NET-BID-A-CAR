import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useAuth } from "../context/Auth";


/**********************************************************************************************************
 * Code Borrowed from = ttps://medium.com/better-programming/building-basic-react-authentication-e20a574d5e71
 * ********************************************************************************************************/

function PrivateRoute({ component: Component, ...rest }) {
    const { authTokens } = useAuth();
    return (
        <Route
            {...rest}
            render={props =>
                authTokens ? (
                    <Component {...props} />
                ) : (
                        <Redirect
                            to= {{ pathname: "/login", state: { referer: props.location } }}
                        />
                    )
            }
        />
    );
}

export default PrivateRoute;