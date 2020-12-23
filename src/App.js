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
       <Route path="/about">
         <About/>
       </Route>
       <Route path ="/contact">
        <ContactForm/>
       </Route>
       <Route path="/portfolio">
         <Portfolio/>
       </Route>
       <Route path = "/links">
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
