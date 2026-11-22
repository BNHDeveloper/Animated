
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../css/PinnedContent.css";

gsap.registerPlugin(ScrollTrigger);

function PinnedContent() {
  const sectionRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(".pinned-content", {
        scale: 1.15,
        opacity: 0.3,
        stagger: 0.15,
        ease: "none",

        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "+=1000",
          pin: true,
          scrub: true,
          markers: false
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      className="pinned-section services-grid"
      ref={sectionRef}
    >
      <div className="services-container">

        <div className="service-card pinned-content">
          <span>01</span>
          <h3>Web Design</h3>
          <p>
            We create beautiful websites that help
            businesses attract more customers.
          </p>
          <span className="card-arrow">↗</span>
        </div>

        <div className="service-card pinned-content">
          <span>02</span>
          <h3>Web Development</h3>
          <p>
            We turn your ideas into professional
            websites that work on every device.
          </p>
          <span className="card-arrow">↗</span>
        </div>

        <div className="service-card pinned-content">
          <span>03</span>
          <h3>Automation</h3>
          <p>
            We automate repetitive tasks and give
            you more time to focus on your business.
          </p>
          <span className="card-arrow">↗</span>
        </div>

      </div>
    </section>
  );
}

export default PinnedContent;
