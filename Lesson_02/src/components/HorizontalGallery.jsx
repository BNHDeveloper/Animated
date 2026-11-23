
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../css/HorizontalGallery.css";

gsap.registerPlugin(ScrollTrigger);

function HorizontalGallery() {
  const sectionRef = useRef(null);
  const trackRef = useRef(null);

  const projects = [
    {
      name: "Digital World",
      image: "photo-1519608487953-e999c86e7455"
    },
    {
      name: "Architecture",
      image: "photo-1511818966892-d7d671e672a2"
    },
    {
      name: "Creative Space",
      image: "photo-1497366754035-f200968a6e72"
    },
    {
      name: "Modern Living",
      image: "photo-1600210492486-724fe5c67fb0"
    }
  ];

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();
      mm.add("(min-width: 701px)", () => {
        const track = trackRef.current;
        const section = sectionRef.current;
        const getDistance = () => {
          return Math.max(
            0,
            track.scrollWidth - section.clientWidth
          );
        };
        gsap.to(track, {
          x: () => -getDistance(),
          ease: "none",
          scrollTrigger: {
            trigger: section,
            start: "top top",
            end: () => `+=${getDistance()}`,
            pin: true,
            scrub: 1,
            markers: false,
            invalidateOnRefresh: true
          }
        });

      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="gallery-section"  ref={sectionRef}  >
      <div className="gallery-header">
        <p>SELECTED WORK</p>
        <h2>OUR PROJECTS.</h2>
      </div>
      <div className="gallery-track"  ref={trackRef}>
        {projects.map((project, index) => (
          <article  className="gallery-card"  key={project.name}>
            <img src={`https://images.unsplash.com/${project.image}?auto=format&fit=crop&w=1200`}  alt={project.name}/>
            <div className="gallery-card-info">
              <span>0{index + 1}</span>
              <h3>{project.name}</h3>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default HorizontalGallery;
