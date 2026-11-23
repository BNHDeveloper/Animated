
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../css/ScrollVideo.css";

gsap.registerPlugin(ScrollTrigger);

function ScrollVideo() {
  const sectionRef = useRef(null);
  const videoRef = useRef(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    const video = videoRef.current;

    if (!section || !video) return;

    let scrollTimer;
    let isScrollPlaying = true;

    const createAnimation = () => {
      if (!video.duration || !Number.isFinite(video.duration)) return;

      const animation = gsap.to(video, {
        currentTime: video.duration,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: "+=2000",
          pin: true,
          scrub: true,
          markers: false,

          onUpdate: () => {
            // Scroll has taken control
            isScrollPlaying = true;
            video.pause();

            // Wait until scrolling stops
            clearTimeout(scrollTimer);

            scrollTimer = setTimeout(() => {
              isScrollPlaying = false;

              // Continue playing from current position
              if (video.currentTime < video.duration) {
                video.play().catch(() => {});
              }
            }, 500);
          }
        }
      });

      return animation;
    };

    let animation;

    const handleMetadata = () => {
      animation = createAnimation();
      ScrollTrigger.refresh();
    };

    if (video.readyState >= 1) {
      handleMetadata();
    } else {
      video.addEventListener("loadedmetadata", handleMetadata);
    }

    const handleEnded = () => {
      video.pause();
    };

    video.addEventListener("ended", handleEnded);

    return () => {
      clearTimeout(scrollTimer);
      video.removeEventListener("loadedmetadata", handleMetadata);
      video.removeEventListener("ended", handleEnded);

      animation?.scrollTrigger?.kill();
      animation?.kill();
    };
  }, []);

  return (
    <section className="scroll-video-section" ref={sectionRef}>
      <video
        ref={videoRef}
        className="scroll-video"
        muted
        playsInline
        preload="auto"
      >
        <source
          src="/videos/video.mp4"
          type="video/mp4"
        />
      </video>

      <div className="video-overlay">
        <p>SCROLL TO EXPLORE</p>
        <h1>BEYOND<br />IMAGINATION.</h1>
      </div>
    </section>
  );
}

export default ScrollVideo;
