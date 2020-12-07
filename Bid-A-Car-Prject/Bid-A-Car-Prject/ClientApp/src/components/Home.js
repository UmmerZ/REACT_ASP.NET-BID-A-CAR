import React, { Component } from 'react';
import { NavMenuLogin } from './PageLayout/NavMenuLogin';
import { Footer } from './PageLayout/Footer';
import { NavMenu } from './NavMenu';

export function Home (props) {
  


    return (
        <div class="container" class="text-center">
            <NavMenu />
            <h1 class="text-success">Bid A Car</h1>
            <p class="text-primary">Welcome! Here you can Sell your car to the right Buyer!</p>
            <div class="md-form mt-0">
                <input class="form-control" type="text" placeholder="Search" aria-label="Search" />
                <input class="btn btn-success" type ="submit" value="Search"/>
           </div>
            <p >Please Register or Sign up to get started</p>
       <Footer />
      </div>
    );
  }

