import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const Loader = () => {
  useGSAP(() => {
    gsap.from(".clip-top, .clip-bottom", 2, {
      delaY: 1,
      height: "50vh",
      ease: "power4.inOut",
    });

    gsap.to(".marquee", 3.5, {
      delay: 0.75,
      top: "50%",
      ease: "power4.inOut",
    });
    gsap.from(".clip-top .marquee .clip-bottom .marquee", 5, {
      delay: 1,
      left: "100%",
      ease: "power3.inOut",
    });

    gsap.from(".clip-center .marquee ", 5, {
      delay: 1,
      left: "-50%",
      ease: "power3.inOut",
    });
    gsap.to(".clip-top", 2, {
      delay: 6,
      clipPath: "inset(0 0 100% 0)",
      ease: "power4.inOut",
    });

    gsap.to(".clip-bottom", 2, {
      delay: 6,
      clipPath: "inset(100% 0 0 0)",
      ease: "power4.inOut",
    });

    gsap.to(
      ".clip-top .marquee, .clip-bottom .marquee, .clip-center .marquee span",
      1,
      {
        delay: 6,
        opacity: 0,
        ease: "power2.inOut",
      }
    );

    gsap.to(".loader", {
      delay: 7,
      duration: 1,
      opacity: 0,

      onComplete: () => {
        document.querySelector(".loader").remove();
      },
    });
  });
  return (
    <>
      <div className="loader">
        <div className="loader-clip clip-top">
          <div className="marquee">
            <div className="marquee-container">
              <span>Rilli</span>
              <span>Rilli</span>
              Rilli
              <span>Rilli</span>
              <span>Rilli</span>
            </div>
          </div>
        </div>

        <div className="loader-clip clip-bottom">
          <div className="marquee">
            <div className="marquee-container">
              <span>Rilli</span>
              <span>Rilli</span>
              Rilli
              <span>Rilli</span>
              <span>Rilli</span>
            </div>
          </div>
        </div>

        <div className="clip-center">
          <div className="marquee">
            <div className="marquee-container">
              <span>Rilli</span>
              <span>Rilli</span>
              Rilli
              <span>Rilli</span>
              <span>Rilli</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Loader;
