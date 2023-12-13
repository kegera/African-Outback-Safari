import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./routes/Home";
import Blog from  "./routes/Blog"
import SantoriniPage from "./routes/SantoriniPage";
import Destinations from "./routes/Destinations";
import HolidayTypes from "./routes/HolidayTypes";
import ContactUs from "./routes/ContactUs";
import SignUp from "./routes/SignUp";
import Footer from "./components/Footer";
import LogIn from "./routes/LogIn";
import AboutUs from "./routes/AboutUs";
import AntelizHotel from "./routes/AntelizHotel";
import AntelizPrivateVilla from "./routes/AntelizPrivateVilla";
import DubaiPage from "./routes/DubaiPage";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/destinations" element={<Destinations />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/holiday-types" element={<HolidayTypes />} />
        <Route path="/blog" element={<Blog/>} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/log-in" element={<LogIn />} />

        <Route path="/santorini" element={<SantoriniPage />} />
        <Route path="/dubai" element={<DubaiPage />} />
        <Route path="/anteliz-suites" element={<AntelizHotel />} />
        <Route
          path="/anteliz-suites/anteliz-private-villa"
          element={<AntelizPrivateVilla />}
        />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
