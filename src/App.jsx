import { useEffect } from "react";
import "./App.css";
import AOS from "aos";
import "aos/dist/aos.css";
import Hero from "./components/Hero";
import About from "./components/About";
import PreviousEditions from "./components/PreviousEditions";
import MentorsJudges from "./components/Mentors&Judges";
import Workshops from "./components/Workshops";
import Sponsors from "./components/Sponsors";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import Navbar from "./components/Hero/NavBar";
function App() {
  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);
  return (
    <div className="font-PTsans overflow-hidden">
      <Navbar />
      <Hero />
      <About />
      <PreviousEditions />
      {/* <MentorsJudges /> */}
      {/* <Workshops /> */}
      {/* <Sponsors /> */}
      <FAQ />
      <Footer />
    </div>
  );
}

export default App;
