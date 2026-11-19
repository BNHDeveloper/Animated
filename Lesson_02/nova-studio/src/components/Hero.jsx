
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";

function Hero() {

  const heroRef = useRef(null);

  useLayoutEffect(() => {

    const ctx = gsap.context(() => {

      gsap.from(".hero-label", {
        y: 30,
        opacity: 0,
        duration: 1,
        delay: 0.3,
        ease: "power2.out"
      });

      gsap.from(".hero-title", {
        y: 100,
        opacity: 0,
        duration: 1.4,
        delay: 0.5,
        ease: "power4.out"
      });

      gsap.from(".hero-bottom", {
        y: 40,
        opacity: 0,
        duration: 1,
        delay: 0.9,
        ease: "power3.out"
      });

    }, heroRef);

    return () => ctx.revert();

  }, []);

  return (
    <section className="hero" ref={heroRef}>

      <video className="hero-video"
        autoPlay muted loop playsInline>
        <source src="/videos/hero.mp4" type="video/mp4" />
      </video>

      <div className="hero-overlay"></div>

      <div className="hero-content">

        <p className="hero-label">
          INDEPENDENT DIGITAL CREATIVE STUDIO
        </p>

        <h1 className="hero-title">
          WE CREATE<br />
          DIGITAL<br />
          EXPERIENCES<span>.</span>
        </h1>

        <div className="hero-bottom">
          <p>
            We transform ideas into
            unforgettable digital experiences.
          </p>

          <a href="#work" className="explore-button">
            EXPLORE OUR WORK ↘
          </a>
        </div>

      </div>

    </section>
  );
}

export default Hero;
