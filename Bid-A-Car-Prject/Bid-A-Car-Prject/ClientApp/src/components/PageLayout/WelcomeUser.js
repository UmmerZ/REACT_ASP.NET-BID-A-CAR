import React from 'react';
import { Link } from 'react-router-dom';


export function WelcomeUsers () {

    return (
        <div className="welcome-users">
            <h1 className= "welcome">Your account has been succesfully created</h1>
            <h2 className="h2-line">Click below to Proceed...</h2>
            <img className="arrow" src={require('../images/arrow_down.jpg')} alt="arrow down" />
            <Link to = "/login"><button Redirect to='/login' className ="welcome-button" >Take Me To Login!</button></Link>
        </div>
        
        );

}