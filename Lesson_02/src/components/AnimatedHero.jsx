
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";

function AnimatedHero() {

  const heroRef = useRef(null);

  useLayoutEffect(() => {

    const ctx = gsap.context(() => {

      const tl = gsap.timeline({
        defaults: {
          duration: 1,
          ease: "power4.out"
        }
      });

      tl.from(".logo", {
        y: -30,
        opacity: 0
      })

      .from(".hero-label", {
        y: 30,
        opacity: 0
      }, "-=0.5")

      .from(".hero-title", {
        y: 120,
        opacity: 0
      }, "-=0.5")

      .from(".hero-description", {
        y: 30,
        opacity: 0
      }, "-=0.6")

      .from(".hero-button", {
        scale: 0.8,
        opacity: 0
      }, "-=0.5")

      .from(".service-card", {
        y:100,
        scale: 0.8,
        opacity: 0
      }, "-=0.5");

    }, heroRef);

    return () => ctx.revert();

  }, []);

  return (
    <section className="animated-hero" ref={heroRef}>

      <nav>
        <h2 className="logo">NOVA.</h2>
      </nav>

      <div className="animated-content">

        <p className="hero-label">
          CREATIVE DIGITAL STUDIO
        </p>

        <h1 className="hero-title">
          DESIGNING<br />
          THE FUTURE.
        </h1>

        <p className="hero-description">
          We create digital experiences
          that make brands unforgettable.
        </p>

        <button className="hero-button">
          DISCOVER OUR WORK ↗
        </button>

      </div>
      <div className="card">
        <div className="service-card">service-card 01</div>
        <div className="service-card">service-card 02</div>
        <div className="service-card">Service card 03</div>
      </div>
    </section>
  );
}

export default AnimatedHero;
