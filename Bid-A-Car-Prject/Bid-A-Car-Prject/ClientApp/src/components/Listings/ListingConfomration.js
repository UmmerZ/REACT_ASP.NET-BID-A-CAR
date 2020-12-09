import React from 'react';
import { Link } from 'react-router-dom';
import { NavMenuLogin } from '..//PageLayout/NavMenuLogin';
import { Footer} from '..//PageLayout/Footer';



function ConfirmListing(props) {
    return (
        <>
            <NavMenuLogin />
            <div className="welcome-users">
                <h1 className="welcome">Your Listing been succesfully created</h1>
                <h2 className="h2-line">Click below to Proceed...</h2>
                <img className="arrow" src={require('../images/arrow_down.jpg')} alt="arrow down" />
                <Link to='/get-listings'><button className="a" >Take Me To Listings</button></Link>
            </div>
            <Footer />
        </>
        );
} export { ConfirmListing };