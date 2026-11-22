import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import '../css/services.css';

gsap.registerPlugin(ScrollTrigger);

function Services() {

  const sectionRef = useRef(null);

  useLayoutEffect(() => {

    const ctx = gsap.context(() => {

      gsap.from(".service-card", {

        y: 120,
        opacity: 0,
        duration: 1,
        stagger: 0.25,
        ease: "power3.out",

        scrollTrigger: {
          trigger: ".services-grid",
          start: "top 80%",
          toggleActions: "play none none reverse"
        }

      });

    }, sectionRef);

    return () => ctx.revert();

  }, []);

  const services = [
    {
      number: "01",
      title: "Web Design",
      description: "Beautiful digital experiences."
    },
    {
      number: "02",
      title: "Development",
      description: "Powerful modern websites."
    },
    {
      number: "03",
      title: "Interaction",
      description: "Animations that bring ideas to life."
    }
  ];

  return (

    <section className="services-section" ref={sectionRef}>

      <p className="section-label">WHAT WE DO</p>

      <h2>Our Services.</h2>

      <div className="services-grid">

        {services.map((service) => (

          <div className="service-card" key={service.number}>

            <span>{service.number}</span>

            <h3>{service.title}</h3>

            <p>{service.description}</p>

            <span className="card-arrow">↗</span>

          </div>

        ))}

      </div>

    </section>

  );
}

export default Services;
