import React, { Component } from 'react';
import { NavMenuLogin } from './PageLayout/NavMenuLogin';
import { Footer } from './PageLayout/Footer';
import { NavMenu } from './NavMenu';

export function Home (props) {
  
    /******************************************************************
     code for images borrowed from-https://stackoverflow.com/questions/26054512/react-img-tag-issue-with-url-and-class
     ********************************************************************/

    return (
        <div className="container" class="text-center">
            <NavMenu />
            <div>
                <img src={require('./images/website_logo.jpg')} />
                </div>
            
           
       <Footer />
      </div>
    );
  }

