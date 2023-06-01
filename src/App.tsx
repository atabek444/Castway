import React from 'react';
import './App.css';
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import People from "./components/People";
import Subscribe from "./components/Sabscribe";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App w-[90%] mx-auto bg-[#191919]">
      <Header/>
        <Hero/>
        <About/>
      <People/>
        <Subscribe/>
        <Footer/>
    </div>
  );
}

export default App;
