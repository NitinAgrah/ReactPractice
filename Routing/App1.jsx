import React from "react"
import {
 BrowserRouter as Router,
 Route,
 Routes,
 Redirect,
} from "react-router-dom"
import Home from "./Home"
import About from "./About"
import Contact from "./Contact"
import Header from "./Header"
import Error from "./Error"

const App1 = () => {
 return (
  <Router>
   <Header />
   <>
    <Routes>
     <Route exact path="/" element={<Home />} />
     <Route exact path="/about" element={<About />} />
     <Route exact path="/contact/:user" element={<Contact />} />
     <Route path="/error" element={<Error />} />
     <Redirect to="/" />
    </Routes>
   </>
  </Router>
 )
}

export default App1
