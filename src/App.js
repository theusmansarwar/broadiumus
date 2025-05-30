import {
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";
import "./App.css";
import Header from "./Component/Header/Header";
import Footer from "./Component/Footer/Footer";
import { MdOutlinePhoneCallback } from "react-icons/md";
import { useEffect } from "react";
import { countView } from "./DAL/Create";

// Pages
import Homepage from "./pages/home/Homepage";
import Contact from "./pages/contact/Contact";
import Industry from "./pages/industry/Industry";
import ServicePage from "./pages/services/ServicePage";
import Client from "./pages/client/Client";
import AboutUs from "./pages/ExtraPages/AboutUs";
import PrivacyPolicy from "./pages/ExtraPages/PrivacyPolicy";
import TermsAndConditions from "./pages/ExtraPages/TermsAndConditions";
import Disclaimer from "./pages/ExtraPages/Disclaimer";
import ScrollToTop from "./utils/ScrollToTop";


function App() {
  return (
    <div className="App">
      <AppContent />
    </div>
  );
}

function AppContent() {
  const navigate = useNavigate();

  useEffect(() => {
    countView();
  }, []);

  return (
    <>
    <ScrollToTop />
      <Header />

      <div className="floating-btn" onClick={() => navigate("/contact")}>
        <MdOutlinePhoneCallback />
        <p>Request a Callback</p>
      </div>

      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/industries" element={<Industry />} />
        <Route path="/services" element={<ServicePage />} />
        <Route path="/our-client" element={<Client />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms" element={<TermsAndConditions />} />
        <Route path="/disclaimer" element={<Disclaimer />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
