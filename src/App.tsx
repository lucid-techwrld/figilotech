import "./App.css";
import Header from "./components/header";
import HeroSection from "./components/hero_section";
import AboutUs from "./components/about_section";
import Services from "./components/service_section";
import OurTeam from "./components/our_team";
import Contact from "./components/contact";
import Footer from "./components/footer";
import CompanyMap from "./components/map";
import "leaflet/dist/leaflet.css";
import Whatsapp from "./components/whatsapp_btn";

function App() {
  return (
    <div className="w-full min-h-screen">
      <Header />
      <HeroSection />
      <AboutUs />
      <Services />
      <OurTeam />
      <CompanyMap />
      <Contact />
      <Footer />
      <Whatsapp />
    </div>
  );
}

export default App;
