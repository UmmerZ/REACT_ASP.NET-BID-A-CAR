import React, { Component } from 'react';
import { RegisterUser } from './Users/RegisterUser';

export class Home extends Component {

    constructor(props) {
        super(props);
        this.handleSuccessfulAuth = this.handleSuccessfulAuth.bind(this);
    }
        handleSuccessfulAuth(data) {
            this.props.handleLogin(data);
            this.props.history.push('/dashboard');
        }
    
  

  render () {
    return (
        <div class="container" class="text-center">
            <h1 class="text-success">Status:{this.props.loggedInStatus} </h1>
            <h1 class="text-success">Bid A Car</h1>
            <p class="text-primary">Welcome! Here you can Sell your car to the right Buyer!</p>
            <div class="md-form mt-0">
                <input class="form-control" type="text" placeholder="Search" aria-label="Search" />
                <input class="btn btn-success" type ="submit" value="Search"/>
           </div>
            <p >Please Register or Sign up to get started</p>
            < RegisterUser handleSuccessfulAuth={this.handleSuccessfulAuth}/>
      </div>
    );
  }
}
