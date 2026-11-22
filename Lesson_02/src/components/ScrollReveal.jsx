
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import '../css/scroll.css';

gsap.registerPlugin(ScrollTrigger);

function ScrollReveal() {

  const sectionRef = useRef(null);

  useLayoutEffect(() => {

    const ctx = gsap.context(() => {

      gsap.from(".reveal-heading", {

        y: 100,
        opacity: 0,
        duration: 1.2,

        scrollTrigger: {
          trigger: ".reveal-heading",
          start: "top 80%",
          toggleActions: "play none reverse restart"
          /*  On entering the trigger.
              On leaving the trigger.
              On entering again from the opposite direction.
              On leaving again.*/
          //Action	Meaning /play	Play animation / pause	Pause animation / resume	Continue animation / reverse	Play backward / restart	Start again / reset	Return to initial state   / none	Do nothing
        }

      });

    }, sectionRef);

    return () => ctx.revert();

  }, []);

  return (

    <section className="scroll-section" ref={sectionRef}>

      <p>OUR PHILOSOPHY</p>

      <h2 className="reveal-heading">
        GREAT IDEAS
        <br />
        DESERVE GREAT
        <br />
        EXPERIENCES.
      </h2>

    </section>

  );
}

export default ScrollReveal;
