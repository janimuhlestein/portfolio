import React from 'react';
import {
  HashRouter,
  Switch,
  Route
} from "react-router-dom";
import About from './components/About/index.js';
import Nav from './components/Nav/index.js';
import Portfolio from './components/Portfolio/index.js';
import Footer from './components/Footer/index.js';
import ContactForm from './components/Contact/index.js';
import Links from './components/Links/index.js';
  
function App() { 
  return (
    <HashRouter basename={process.env.PUBLIC_URL}>
    <div>
      <Nav></Nav>
     <Switch>
       <Route exact path={"/about"} component = {"about"}>
         <About/>
       </Route>
       <Route exact path ={"/contact"} component = {"contact"}>
        <ContactForm/>
       </Route>
       <Route exact path={"/portfolio"} component = {"portfolio"}>
         <Portfolio/>
       </Route>
       <Route exact path = {"/links"} component = {"links"}>
         <Links/>
       </Route>
       <Route exact path={"/"} component={"about"}>
         <About/>
       </Route>
     </Switch>
      <Footer></Footer>
    </div>
    </HashRouter>
  )
}

export default App;
