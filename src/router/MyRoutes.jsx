import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Home from "../components/Home/Home";
import Portfolio from "../components/Portfolio/Portfolio";
import Services from "../components/Services/Services";
import Curriculum from "../components/Curriculum/Curriculum";
import Contact from "../components/Contact/Contact";
import HeaderNav from "../components/Layout/HeaderNav";
import Footer from "../components/Layout/Footer";

const MyRoutes = () => {
  return (
    <BrowserRouter>
      <HeaderNav />
      <section className="content">
        <Routes>
          <Route path="/" element={<Navigate to="/home" />}></Route>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/portfolio" element={<Portfolio />}></Route>
          <Route path="/services" element={<Services />}></Route>
          <Route path="/curriculum" element={<Curriculum />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
        </Routes>
      </section>
      <Footer />
    </BrowserRouter>
  );
};

export default MyRoutes;
