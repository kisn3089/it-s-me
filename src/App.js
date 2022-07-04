import React, {useEffect} from 'react'
import './App.css';
import Experience from "./components/experence/Experience";
import Portfolio from "./components/portfolio/Portfolio";
import Testimonials from "./components/testimonials/Testimonials";
import Contact from "./components/contact/Contact";
import Header from "./components/header/Header";
import Nav from "./components/nav/Nav";
import About from "./components/about/About";
import Services from "./components/serveices/Services";
import Footer from "./components/footer/Footer";
import gsap from 'gsap'
import Transition from "./components/header/Transition";
import Remember from "./components/header/Remember";

function App() {
    const timeline = gsap.timeline();

  return (
    <>
      <Remember timeline={timeline} />
      {/*<Transition />*/}
      <Header timeline={timeline}/>
      <Nav timeline={timeline} />
      <About />
      <Experience />
      <Services />
      <Portfolio />
      {/*<Testimonials />*/}
      <Contact />
      <Footer />
    </>
  );
}

export default App;
