import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

import About from "./paqges/About";
import Home from "./paqges/Home";
import Community from "./paqges/Community";
import Shop from "./paqges/Shop";
import Contact from "./paqges/Contact";
import Service from "./paqges/Service";
import Footer from "./components/Footer";
import Shopnew from "./paqges/shopnew";


function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About />} />
        <Route path="/community" element={<Community/>} />
        <Route path="/shop" element={<Shopnew/>} />
        <Route path="/contact" element={<Contact/>} />
         <Route path="/service" element={<Service/>} /> 
         <Route path="/new-furnishings" element={<Shop/>} />
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
