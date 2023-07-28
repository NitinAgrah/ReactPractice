import React from "react"
import { NavLink } from "react-router-dom"

const Header = () => {
 const linkStyle = {
  padding: "10px 20px",
  color: "#000",
  textDecoration: "none",
 }

 const activeLinkStyle = {
  color: "#007bff",
  fontWeight: "bold",
 }

 return (
  <nav
   style={{
    listStyle: "none",
    padding: 0,
    display: "flex",
    justifyContent: "space-around",
    backgroundColor: "#f0f0f0",
    marginBottom: "20px",
   }}
  >
   <NavLink exact to="/" style={linkStyle} activeStyle={activeLinkStyle}>
    Home
   </NavLink>
   <NavLink to="/about" style={linkStyle} activeStyle={activeLinkStyle}>
    About
   </NavLink>
   <NavLink to="/contact" style={linkStyle} activeStyle={activeLinkStyle}>
    Contact
   </NavLink>
  </nav>
 )
}

export default Header
