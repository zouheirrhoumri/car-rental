import React from 'react';
import "../src/dist/styles.css";
import About from "./Pages/About";
import Home from "./Pages/Home";
import Navbar from "../src/components/Navbar";
import { Route, Routes } from "react-router-dom";
import Models from "./Pages/Models";
// import TestimonialsPage from "./Pages/TestimonialsPage";
import Team from "./Pages/Team";
import Contact from "./Pages/Contact";
import './styles/App.css'; // Ensure you import the CSS file
import Lottie from 'react-lottie';
import whatsappAnimation from './styles/Animation - 1716403973820.json'; // Adjust the path as necessary

function App() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: whatsappAnimation,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  return (
    <>
      <Navbar />
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="models" element={<Models />} />
        {/* <Route path="testimonials" element={<TestimonialsPage />} /> */}
        <Route path="team" element={<Team />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
      {/* WhatsApp Lottie Animation */}
      <a
        href="https://wa.me/21261292787"
        className="whatsapp_float"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Lottie options={defaultOptions} height={60} width={60} />
      </a>
    </>
  );
}

export default App;
