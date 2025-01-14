import { useState } from "react";

import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Ecomclips from "./components/Ecomclips";
import Service from "./components/Service";
import Technologies from "./components/Technologies";
import NavigationBar from "./components/NavigationBar";
import Banner from "./components/Banner";

function App() {
  const [showMobilemenu, setShowMobileMenu] = useState(false);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <NavigationBar showMobilemenu={showMobilemenu} setShowMobileMenu={setShowMobileMenu} scrollToSection={scrollToSection} />

      <Banner />

      <Technologies />

      <Ecomclips />

      <Service />

      <Contact />

      <Footer />
    </>
  );
}

export default App;
