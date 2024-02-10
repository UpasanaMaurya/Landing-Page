import React from "react";
import "./App.css";
import Navbar from "./pages/Navbar";
import SocialIconBar from "./pages/SocialIconBar";
import Playground from "./pages/Playground";
import Support from "./pages/Support";
import Slider from "./pages/Slider";
import Footer from "./pages/Footer";
const App = () => {
  return (
    <div className="wrapper">
      <SocialIconBar />
      <Navbar />
      <Playground />
      <Support />
      <Slider />
      <Footer/>
    </div>
  );
};

export default App;
