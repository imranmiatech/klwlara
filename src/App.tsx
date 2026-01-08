import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

import About from "./paqges/About";
import Home from "./paqges/Home";
import Community from "./paqges/Community";
import Shop from "./paqges/Shop";
import Contact from "./paqges/Contact";
import Service from "./paqges/Service";


function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About />} />
        <Route path="/community" element={<Community/>} />
        <Route path="/shop" element={<Shop/>} />
        <Route path="/contact" element={<Contact/>} />
         <Route path="/service" element={<Service/>} />
        
      </Routes>
    </>
  );
}

export default App;
