
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import "./App.css";
import AnimatedHero from "./components/AnimatedHero";
import ScrollReveal from "./components/ScrollReveal";

function App() {
  return (
    <main>
      <Navbar />
      <Hero />
       <ScrollReveal />
      <AnimatedHero/>
    </main>
  );
}

export default App;
