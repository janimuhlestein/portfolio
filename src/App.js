import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import About from './components/About';
import Nav from './components/Nav';
import Portfolio from './components/Portfolio';
import Footer from './components/Footer';
import ContactForm from './components/Contact';
import Links from './components/Links';
  
function App() { 
  return (
    <Router>
    <div>
      <Nav></Nav>
     <Switch>
       <Route exact path="/about" component = "about">
         <About/>
       </Route>
       <Route exact path ="/contact" component = "contact">
        <ContactForm/>
       </Route>
       <Route exact path="/portfolio" component = "portfolio">
         <Portfolio/>
       </Route>
       <Route exact path = "/links" component = "links">
         <Links/>
       </Route>
       <Route path="/">
         <About/>
       </Route>
     </Switch>
      <Footer></Footer>
    </div>
    </Router>
  )
}

export default App;
