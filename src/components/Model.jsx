import { useGSAP } from "@gsap/react";
import gsap from "gsap";

function Model() {
  useGSAP(() => {
    gsap.to("#heading", {
      opacity: 1,
      y: 0,
    });
  }, []);
  return (
    <section className="sm:py-22 py-10 sm:px-10 px-3">
      <div className="screen-max-width">
        <h1 id="heading" className="section-heading">
          Adding more section shortly.
        </h1>
        <div className="flex flex-col items-end mt-10">
          <h3>Made with ❤️ by Abhinav</h3>
            {/* <div className="w-full h-[75vh] md:h-[90vh] overflow-hidden relative">
                
            </div> */}
        </div>
      </div>
    </section>
  );
}

export default Model;
