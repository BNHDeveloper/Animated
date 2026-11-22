
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import '../css/parallaxSection.css';

gsap.registerPlugin(ScrollTrigger);

function ParallaxSection() {

  const sectionRef = useRef(null);
  const imageRef = useRef(null);
  const textRef = useRef(null);

  useLayoutEffect(() => {

    const ctx = gsap.context(() => {

      // Background parallax
      gsap.to(imageRef.current, {

        yPercent: 25,
        ease: "none",

        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true
        }

      });

      // Text reveal
      gsap.from(textRef.current, {

        y: 100,
        opacity: 0,

        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
          end: "top 30%",
          scrub: 1
        }

      });

    }, sectionRef);

    return () => ctx.revert();

  }, []);

  return (

    <section
      className="parallax-section"
      ref={sectionRef}
    >

      <div
        className="parallax-image"
        ref={imageRef}
      ></div>

      <div className="parallax-overlay"></div>

      <div
        className="parallax-text"
        ref={textRef}
      >

        <p>OUR CREATIVE PHILOSOPHY</p>

        <h2>
          MAKE IT
          <br />
          UNFORGETTABLE.
        </h2>

      </div>

    </section>

  );
}

export default ParallaxSection;
