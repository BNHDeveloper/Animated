
import Navbar from "./components/Navbar";
// import Hero from "./components/Hero";
import "./App.css";
import AnimatedHero from "./components/AnimatedHero";
import ScrollReveal from "./components/ScrollReveal";
// import Services from "./components/Services";
// import ParallaxSection from "./components/ParallaxSection";
import PinnedContent from "./components/PinnedContent";
import HorizontalGallery from "./components/HorizontalGallery";

function App() {
  return (
    <main>
      <Navbar />
      {/* <Hero /> */}
       <ScrollReveal />
      <AnimatedHero/>
      {/* <ParallaxSection/> */}
      <PinnedContent/>
      <HorizontalGallery/>
      {/* <Services/> */}
    </main>
  );
}

export default App;
