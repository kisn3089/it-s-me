import React from 'react';
import './App.css';
import Experience from './components/experence/Experience';
import Portfolio from './components/portfolio/Portfolio';
import Contact from './components/contact/Contact';
import Header from './components/header/Header';
import Nav from './components/nav/Nav';
import About from './components/about/About';
import Services from './components/serveices/Services';
import Footer from './components/footer/Footer';
import Remember from './components/header/Remember';
import gsap from 'gsap';

function App() {
  const timeline = gsap.timeline();

  return (
    <>
      <Remember />
      <Header timeline={timeline} />
      <Nav />
      <About />
      <Experience />
      <Services />
      <Portfolio />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
