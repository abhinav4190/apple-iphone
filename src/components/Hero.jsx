import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { heroVideo, smallHeroVideo } from "../utils/index";
import { useEffect, useState } from "react";

function Hero() {
  const handleVideoSrc = () => {
    if (window.innerWidth < 635) {
      setVideoSrc(smallHeroVideo);
    } else {
      setVideoSrc(heroVideo);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleVideoSrc);
    return () => window.removeEventListener("resize", handleVideoSrc);
  }, []);

  useGSAP(() => {
    gsap.to(".hero-title", {
      opacity: 1,
      delay: 2,
    });
    gsap.to("#cta", {
      opacity: 1,
      y: -50,
      delay: 2,
    });
  }, []);
  const [videoSrc, setVideoSrc] = useState(
    window.innerWidth < 635 ? smallHeroVideo : heroVideo
  );

  return (
    <>
      <section className="w-full nav-height bg-black relative">
        <div className="h-5/6 w-full flex-center flex-col">
          <p className="hero-title">iPhone 15 Pro</p>
          <div className="w-9/12 md:w-10/12">
            <video
              className="pointer-events-none"
              autoPlay
              muted
              playsInline={true}
              key={videoSrc}
            >
              <source src={videoSrc} type="video/mp4" />
            </video>
          </div>
        </div>
        <div
          id="cta"
          className="flex flex-col items-center opacity-0 translate-y-20"
        >
          <a href="#highlights" className="btn">
            Buy
          </a>
          <p className="font-normal text-xl">From $199/month or $999</p>
        </div>
      </section>
    </>
  );
}

export default Hero;
