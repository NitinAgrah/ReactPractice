import React from "react"
import { useLocation, useParams } from "react-router-dom"

const Contact = () => {
 const { user } = useParams()
 const location = useLocation()

 return (
  <div className="container">
   <div className="page-content">
    <h2 className="page-title">Contact Us &nbsp;{user}</h2>
    <h3>My location: {location.pathname}</h3>
    <p>
     {location.pathname === `/contact/nitin` ? (
      <b>Matched</b>
     ) : (
      <i>Unmatched</i>
     )}
     <hr />
     Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce dignissim,
    </p>
   </div>
   <footer className="footer">
    © 2023 Your App Name. All rights reserved.
   </footer>
  </div>
 )
}

export default Contact
