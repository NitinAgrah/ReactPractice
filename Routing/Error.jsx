import React from "react"
import { NavLink } from "react-router-dom"

const Error = () => {
 const containerStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "100vh",
  flexDirection: "column",
  textAlign: "center",
 }

 const headingStyle = {
  fontSize: "48px",
  fontWeight: "bold",
     marginBottom: "20px",
  color:"black",
 }

 const textStyle = {
  fontSize: "24px",
  marginBottom: "20px",
 }

 return (
  <>
   <div style={containerStyle}>
    <span style={headingStyle}>Error 404</span>
    <span style={textStyle}>Page Not Found</span>
    <NavLink to="/" >Go Back</NavLink>
   </div>
  </>
 )
}

export default Error
