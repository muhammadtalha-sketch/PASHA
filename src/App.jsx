import StickyBar from "./components/StickyBar";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Focus from "./components/Focus";
import Pillars from "./components/Pillars";
import Global from "./components/Global";
import Highlights from "./components/Highlights";
import Stats from "./components/Stats";
import VotingInfo from "./components/VotingInfo";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="overflow-x-hidden">
      <div className="sticky top-0 z-50">
        <StickyBar />
        <Navbar />
      </div>
      <main id="main-content">
        <Hero />
        <About />
        <Focus />
        <Pillars />
        <Global />
        <Highlights />
        <Stats />
        <VotingInfo />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
