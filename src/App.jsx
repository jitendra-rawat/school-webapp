import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

import Navbar from "./components/header/Navbar";
import Scroll from './components/other/Scroll'
import Home from "./components/homepage/Home";
import Footer from "./components/footer/Footer";
import Contact from "./components/pages/Contact";
import AboutUs from "./components/pages/AboutUs";
import SuccessStory from "./components/pages/SuccessStory";
import Donation from "./components/pages/Donation";
import Infra from "./components/pages/Infra";
import Dashboard from "./components/dashboard/Dashboard";
import Login from "./components/auth/Login";
import ResetPassword from "./components/dashboard/ResetPassword";
import DonationPage from './components/pages/DonationPage'

import { useAuth } from "./components/context/authContext"; 
import OurMission from "./components/pages/mission/OurMission";
import OurWork from "./components/pages/our work/OurWork";
import OurHistory from "./components/pages/our history/OurHistory";
import SuccessStories from "./components/pages/stories/SuccessStories";
import SwamiDesk from "./components/pages/SwamiDesk";
import MakeDonation from "./components/donation/MakeDonation";

// Custom PrivateRoute component
const PrivateRoute = ({ element, ...rest }) => {
  
  const { accessToken } = useAuth(); 

  return accessToken ? (
  
    element
  ) : (
  
    <Navigate to="/login" />
  );
};

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/login" element={<Login />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/donation" element={<Donation />} />
        <Route path="/our-infrastructure" element={<Infra />} />

        <Route path="/donation-page" element={<DonationPage />} />

        <Route path="/our-mission" element={<OurMission />} />

        <Route path="/our-work" element={<OurWork />} />

        <Route path="/our-history" element={<OurHistory />} />

        <Route path="/success-stories" element={<SuccessStories />} />

        <Route path="/from-the-desk-of-swamiji" element={<SwamiDesk />} />

        <Route path="/make-donation" element={<MakeDonation />} />

        
        <Route path="/dashboard" element={<PrivateRoute element={<Dashboard />} />} />
      </Routes>
      <Footer />
      <Scroll />
    </Router>
  );
}

export default App;
