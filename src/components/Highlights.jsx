import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { rightImg, watchImg } from "../utils";
import VideoCarousel from "./VideoCarousel";
function Highlights() {
  useGSAP(() => {
    gsap.to("#title", {
      opacity: 1,
      y: 0,
    });
    gsap.to(".link", {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.25
    })
  }, []);
  return (
    <>
      <section
        id="highlights"
        className="bg-zinc w-screen overflow-hidden common-padding"
      >
        <div className="screen-max-width">
          <div className="mb-12 w-full items-end md:flex justify-between">
            <h1 id="title" className="section-heading">
              Get the highlights.
            </h1>
            <div className="flex items-end gap-5 flex-wrap">
                <p className="link">Watch the flim <img src={watchImg} className="ml-2" alt="watch" /></p>
                <p className="link">Watch the event <img src={rightImg} className="ml-2" alt="watch" /></p>
            </div>
          </div>

          <VideoCarousel/>
        </div>
      </section>
    </>
  );
}

export default Highlights;
