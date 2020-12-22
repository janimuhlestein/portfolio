import React, { useState } from 'react';
import About from './components/About';
import Nav from './components/Nav';
import Portfolio from './components/Portfolio';
import Footer from './components/Footer';
import ContactForm from './components/Contact';
  
function App() {
  const [aboutSelected, setAboutSelected] = useState(true);
  const [contactSelected, setContactSelected] = useState(false);
  const [portfolioSelected, setPortfolioSelected] = useState(false);

  
  return (
    <div>
      <Nav></Nav>
      <main>
        <div>
        <Portfolio></Portfolio>
        </div>
      </main>
      <Footer></Footer>
    </div>
  )
}

export default App;
