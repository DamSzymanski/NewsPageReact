import React, { useCallback, useContext } from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./Home";
import Dashboard from "./Dashboard";
import Login from "./Login";

import About from "./About";
import Live from "./Live";

import NewsDetails from "./NewsDetails";
import { AuthProvider } from "./Auth";
import PrivateRoute from "./PrivateRoute.js";
import {
  MDBFooter ,MDBContainer ,MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBFormInline,
  MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem
  } from "mdbreact";
  
import { AuthContext } from "./Auth.js";

class App extends React.Component {
  state = {
    isOpen: false
  };
  static contextType = AuthContext
  toggleCollapse = () => {
    this.setState({ isOpen: !this.state.isOpen });
  }
  /*
    <MDBNavItem>
              <MDBNavLink to="/live">Relacja na żywo</MDBNavLink>
            </MDBNavItem>

            */
  render() {
    return(<AuthProvider>
      <Router>
        <div >
        <MDBNavbar color="unique-color-dark" dark expand="md">
        <MDBNavbarBrand>
          <strong className="white-text">NewsPage</strong>
        </MDBNavbarBrand>
        <MDBNavbarToggler onClick={this.toggleCollapse} />
        <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
          <MDBNavbarNav left>
            <MDBNavItem >
              <MDBNavLink to="/">Strona główna</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink to="/about">O stronie</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBDropdown>
                <MDBDropdownToggle nav caret>
                  <span className="mr-2">Więcej</span>
                </MDBDropdownToggle>
                <MDBDropdownMenu>
                <MDBDropdownItem href="/login">Panel admina</MDBDropdownItem>
                </MDBDropdownMenu>
              </MDBDropdown>
            </MDBNavItem>
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBNavbar>
          <PrivateRoute exact path="/dashboard" component={Dashboard} />
          <Route exact path="/about" component={About} />
          <Route exact path="/live" component={Live} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/" component={Home} />
          <Route exact path="/news/:id" component={NewsDetails} />
          <MDBFooter color="blue" className="footer mt-4 fixed-bottom bottomFooter footer-copyright text-center py-3 font-small pt-4 mt-4">
      <div className="">
          &copy; {new Date().getFullYear()} Damian Szymański
      </div>
    </MDBFooter>
        </div>
      </Router>
    </AuthProvider>
    )
};
};

export default App;
