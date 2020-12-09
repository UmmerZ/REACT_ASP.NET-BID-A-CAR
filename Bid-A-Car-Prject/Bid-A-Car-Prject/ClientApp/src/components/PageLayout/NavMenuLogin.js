import React, { Component } from 'react';
import { Collapse, Container, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';


export class NavMenuLogin extends Component {
   

    constructor(props) {
        super(props);

        this.toggleNavbar = this.toggleNavbar.bind(this);
        this.state = {
            collapsed: true
        };
    }

    toggleNavbar() {
        this.setState({
            collapsed: !this.state.collapsed
        });
    }

    render() {
        return (
            <header>
                <Navbar className=" navbar-expand-sm navbar-dark navbar-toggleable-sm ng-white border-bottom box-shadow mb-3 bg-dark" light>
                    <Container>
                        <NavbarBrand className="bg-warning" tag={Link} to="/"></NavbarBrand>
                        <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
                        <Collapse className="d-sm-inline-flex flex-sm-row-reverse" isOpen={!this.state.collapsed} navbar>
                            <ul className="navbar-nav flex-grow ">
                                <NavItem className="bg-dark">
                                    <NavLink tag={Link} className="text-light bg-dark" to="/">Home</NavLink>
                                </NavItem>
                                <NavItem className="bg-dark">
                                    <NavLink tag={Link} className="text-light bg-dark" to="/create-listing">Create A Listing</NavLink>
                                </NavItem>
                                <NavItem className="bg-dark">
                                    <NavLink tag={Link} className="text-light bg-dark " to="/get-listings">Listing</NavLink>
                                </NavItem>
                     
                                
                            </ul>
                        </Collapse>
                    </Container>
                </Navbar>
            </header>
        );
    }
}
