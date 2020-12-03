import React, { Component } from 'react';
import { Collapse, Container, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';
import './NavMenu.css';

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
      <header>
        <Navbar className="navbar-expand-sm  navbar-toggleable-sm ng-white border-bottom box-shadow mb-3 bg-warning" light>
          <Container>
                    <NavbarBrand className= "bg-warning"tag={Link} to="/"></NavbarBrand>
            <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
            <Collapse className="d-sm-inline-flex flex-sm-row-reverse" isOpen={!this.state.collapsed} navbar>
                        <ul className="navbar-nav flex-grow ">
                <NavItem>
                                <NavLink tag={Link} className="text-dark bg-warning" to="/">Home</NavLink>
                </NavItem>
                <NavItem>
                                <NavLink tag={Link} className="text-dark bg-warning" to="/create-listing">Create A Listing</NavLink>
                </NavItem>
                <NavItem>
                                <NavLink tag={Link} className="text-dark bg-warning" to="/get-listings">Listing</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink tag={Link} className="text-dark bg-warning" to="/create-Images">Upload Images</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink tag={Link} className="text-dark bg-warning" to="/registration">Register User</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink tag={Link} className="text-dark bg-warning" to="/logins">Register User</NavLink>
                            </NavItem>
              </ul>
            </Collapse>
          </Container>
        </Navbar>
      </header>
    );
  }
}
