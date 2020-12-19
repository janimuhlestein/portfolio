import React, { useState } from 'react';
import About from './components/About';
import Nav from './components/Nav';
import Portfolio from './components/Portfolio';
import Links from './components/Links';
import Footer from './components/Footer';
import ContactForm from './components/Contact';
  
function App() {
  const [aboutSelected, setAboutSelected] = useState(true);
  const [contactSelected, setContactSelected] = useState(false);
  const [portfolioSelected, setPortfolioSelected] = useState(false);
  const [linksSelected, setLinksSelected] = useState(false);
  return (
    <div>
      <Nav
        setAboutSelected = {setAboutSelected}
        setcontactSelected = {setContactSelected}
        setPortfolioSelected = {setPortfolioSelected}
        setLinksSelected = {setLinksSelected}
      ></Nav>
      <main>
        <div>
          <About></About>
        </div>
      </main>
      <Footer></Footer>
    </div>
  )
}

export default App;
