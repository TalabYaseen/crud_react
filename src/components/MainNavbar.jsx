import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from '../images/logo.png';
import {NavLink} from "react-router-dom";

export default class MainNavbar extends React.Component {

    render(){
        return (
            <Navbar style={{backgroundColor:"#FEA900",minHeight:"4rem",fontWeight:"bolder",justifyContent:"center"}}  expand="lg" bg="gradient">
                <Container>
                <Nav>
                <NavLink to="/Home">Home</NavLink>
                <NavLink to="#Bids">Bids</NavLink>
                <NavLink to="#Favorite">Favorite</NavLink>
                <NavLink to="#Contactus">Contact us</NavLink>
                <NavLink to="#Aboutus">About us</NavLink>
                <NavLink to="/Login" style={{marginLeft:"700px"}}>Log in</NavLink>
                <NavLink to="/Register " style={{marginLeft:"40px"}}>Register </NavLink>
                </Nav>
                </Container>
            </Navbar>
        )
    }
}