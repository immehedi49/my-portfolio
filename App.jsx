

import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./navbar";
import MainPage from "./MainPage"; // main full page
import Footer from "./footer";

const root = createRoot(document.getElementById("root"));

root.render(
  <Router>
    <Navbar />

    <Routes>
      <Route path="/" element={<MainPage />} />                
      <Route path="/home" element={<MainPage scrollTo="home" />} />    
      <Route path="/aboutme" element={<MainPage scrollTo="aboutme" />} />
      <Route path="/education" element={<MainPage scrollTo="education" />} />
      <Route path="/project" element={<MainPage scrollTo="project" />} />
      <Route path="/contact" element={<MainPage scrollTo="contact" />} />
    </Routes>

    <Footer />
  </Router>
);
