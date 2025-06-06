import About from "./components/About";
import Cards from "./components/Cards";
import Eyes from "./components/Eyes";
import FeaturedProject from "./components/FeaturedProject";
import Footer from "./components/Footer";
import LandingPage from "./components/LandingPage";
import Marquee from "./components/Marquee";
import Navbar from "./components/Navbar";
import LocomotiveScroll from "locomotive-scroll";

function App() {
  // eslint-disable-next-line no-unused-vars
  const locomotiveScroll = new LocomotiveScroll();

  return (
    <>
      <div className=" bg-zinc-900 text-white">
        <Navbar />
        <LandingPage />
        <Marquee />
        <About />
        <Eyes />
        <FeaturedProject />
        <Cards />
        <Footer />
      </div>
    </>
  );
}

export default App;
