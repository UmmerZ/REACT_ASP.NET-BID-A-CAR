import React, { Component } from 'react';
import { Collapse, Container, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';
import './NavMenu.css';
import Admin from './/Admin';


export class NavMenu extends Component {
  static displayName = NavMenu.name;

  constructor (props) {
    super(props);
      
    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: true
      };
     
  }

  toggleNavbar () {
    this.setState({
      collapsed: !this.state.collapsed
    });
    }
   
 

  render () {
    return (
      <header >
        <Navbar className="navbar-expand-sm navbar-dark navbar-toggleable-sm ng-white border-bottom box-shadow mb-3 bg-dark" >
                <Container className="bg-dark">
                    <NavbarBrand className= ""tag={Link} to="/"></NavbarBrand>
            <NavbarToggler onClick={this.toggleNavbar} className="mr-2 bg-dark" />
            <Collapse className="d-sm-inline-flex flex-sm-row-reverse bg-dark" isOpen={!this.state.collapsed} navbar>
                        <ul className="navbar-nav flex-grow bg-dark">
                <NavItem className= "bg-dark">
                                <NavLink tag={Link} className="text-light bg-dark" to="/">Home</NavLink>
                </NavItem>
                            <NavItem className="bg-dark">
                                <NavLink tag={Link} className="text-light bg-dark" to="/create-listing">Create A Listing</NavLink>
                </NavItem>
                            <NavItem className="bg-dark">
                                <NavLink tag={Link} className="text-light bg-dark " to="/get-listings">Listing</NavLink>
                            </NavItem>

                            <NavItem>
                                <NavLink tag={Link} className="text-light bg-dark" to="/admin" onClick={this.logOut}>Log Out</NavLink>
                            </NavItem>
                            
                          
              </ul>
            </Collapse>
          </Container>
        </Navbar>
      </header>
    );
  }
}
