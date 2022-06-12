import * as React from "react";
import { Routes, Route } from "react-router-dom";

import "./App.css";
import Home from "../src/pages/Home";
import About from "../src/pages/About";
import Contact from "../src/pages/Contact";
 import Header from "./components/Header";
 import Footer from "./components/Footer";
function App() {
  return (
    <>   
     <Header /> 
      <Routes>
        <Route exact  path="/" element={<Home />} />
        {/* <Route  exact path="/about" element={<About />} /> */}
        <Route exact path='/about' element={<About />}></Route> 
        <Route exact  path="/contact" element={<Contact />} > </Route> 
      </Routes>
       <Footer />      
      </>   
  );
}

export default App;