import React, { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { useNavigate } from "react-router-dom";

// Google Fonts import
const fontHref =
  "https://fonts.googleapis.com/css?family=Nunito+Sans&display=swap";

const css = `
:root {
  --blue: #0e0620;
  --white: #fff;
  --green: #2ccf6d;
  --yellow: #ffe066;
}
body {
  font-family: 'Nunito Sans', sans-serif;
  color: var(--white);
  background: linear-gradient(180deg, #0e0620 0%, #1a1333 100%);
}
svg {
  width: 100%;
  max-width: 500px;
  display: block;
  margin: 0 auto;
  visibility: hidden;
}
h1 {
  font-size: 7.5em;
  margin: 15px 0px;
  font-weight: bold;
}
h2 {
  font-weight: bold;
}
.btn {
  z-index: 1;
  overflow: hidden;
  background: transparent;
  position: relative;
  padding: 8px 50px;
  border-radius: 30px;
  cursor: pointer;
  font-size: 1em;
  letter-spacing: 2px;
  transition: 0.2s ease;
  font-weight: bold;
  margin: 5px 0px;
  
}
.btn.green {
  border: 4px solid var(--green);
  color: var(--white);
  position: relative;
  overflow: hidden;
}
.btn.green:before {
  content: "";
  position: absolute;
  left: 0;
  top: 0;
  width: 0%;
  height: 100%;
  background: var(--green);
  z-index: -1;
  transition: 0.2s ease;
}
.btn.green:hover {
  color: var(--white);
  background: var(--green);
  transition: 0.2s ease;
}
.btn.green:hover:before {
  width: 100%;
}
.container {
  max-width: 1100px;
  margin: 0 auto;
}
.row {
  display: flex;
  flex-wrap: wrap;
}
.col-md-6 {
  flex: 0 0 50%;
  max-width: 50%;
  box-sizing: border-box;
}
.align-self-center {
  align-self: center;
}
@media (max-width: 768px) {
  .row {
    flex-direction: column;
  }
  .col-md-6 {
    max-width: 100%;
    flex: 0 0 100%;
  }
}
`;

export default function Error404() {
  const svgRef = useRef(null);
  const navigate = useNavigate();

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap.set(svgRef.current, { visibility: "visible" });

      // Astronaut floating
      gsap.to("#astronaut", {
        y: 20,
        x: 10,
        rotation: 2,
        yoyo: true,
        repeat: -1,
        duration: 3,
        ease: "sine.inOut"
      });

      // Arms swinging
      gsap.to("#armL", {
        rotation: 15,
        transformOrigin: "top right",
        yoyo: true,
        repeat: -1,
        duration: 2,
        ease: "sine.inOut"
      });
      gsap.to("#armR", {
        rotation: -10,
        transformOrigin: "top left",
        yoyo: true,
        repeat: -1,
        duration: 2.2,
        ease: "sine.inOut"
      });

      // Legs swinging
      gsap.to("#legL", {
        rotation: -8,
        transformOrigin: "top center",
        yoyo: true,
        repeat: -1,
        duration: 2.3,
        ease: "sine.inOut"
      });
      gsap.to("#legR", {
        rotation: 10,
        transformOrigin: "top center",
        yoyo: true,
        repeat: -1,
        duration: 2.1,
        ease: "sine.inOut"
      });

      // Helmet shine
      gsap.set("#glassShine", { x: -40 });
      gsap.to("#glassShine", {
        x: 50,
        duration: 2,
        rotation: -20,
        ease: "expo.inOut",
        transformOrigin: "50% 50%",
        repeat: -1,
        repeatDelay: 6,
        delay: 1
      });

      // Stars twinkling
      gsap.to("#stars circle, #stars ellipse", {
        opacity: "random(0.3,1)",
        repeat: -1,
        yoyo: true,
        duration: "random(1,2)",
        stagger: {
          amount: 2,
          grid: "auto",
          from: "random"
        }
      });

      // Small planet rotation
      gsap.to("#planetSmall", {
        rotation: 360,
        transformOrigin: "50% 50%",
        repeat: -1,
        duration: 12,
        ease: "linear"
      });
    }, svgRef);
    return () => ctx.revert();
  }, []);

  return (
    <>
      <link href={fontHref} rel="stylesheet" />
      <style>{css}</style>
      <main>
        <div className="container">
          <div className="row">
            <div className="col-md-6 align-self-center">
              <svg
                ref={svgRef}
                viewBox="0 0 800 600"
                xmlns="http://www.w3.org/2000/svg"
                aria-label="Astronaut floating in space"
              >
                {/* Space background stars */}
                <g id="stars">
                  <circle cx="100" cy="80" r="2" fill="#fff" />
                  <circle cx="200" cy="50" r="1.5" fill="#fff" />
                  <circle cx="300" cy="120" r="2.2" fill="#fff" />
                  <ellipse cx="400" cy="40" rx="2.3" ry="1.2" fill="#fff" />
                  <circle cx="500" cy="90" r="1.8" fill="#fff" />
                  <ellipse cx="600" cy="60" rx="2" ry="1.1" fill="#fff" />
                  <circle cx="700" cy="100" r="2.1" fill="#fff" />
                  <circle cx="180" cy="200" r="1.6" fill="#fff" />
                  <circle cx="580" cy="180" r="1.7" fill="#fff" />
                  <circle cx="750" cy="180" r="1.4" fill="#fff" />
                  <circle cx="120" cy="400" r="2" fill="#fff" />
                  <ellipse cx="650" cy="500" rx="2.2" ry="1.2" fill="#fff" />
                  <circle cx="300" cy="500" r="2.2" fill="#fff" />
                  <circle cx="650" cy="200" r="2" fill="#fff" />
                  <circle cx="500" cy="120" r="2" fill="#fff" />
                </g>
                {/* Small planet */}
                <g id="planetSmall">
                  <circle cx="680" cy="80" r="24" fill="#ffe066" opacity="0.7" />
                  <ellipse cx="680" cy="80" rx="14" ry="6" fill="#fff" opacity="0.16" />
                </g>
                {/* Main planet for depth */}
                <g id="planet">
                  <circle fill="#2ccf6d" cx="600" cy="100" r="60" />
                  <ellipse fill="#fff" opacity="0.15" cx="580" cy="100" rx="18" ry="7" />
                  <ellipse fill="#fff" opacity="0.15" cx="630" cy="86" rx="10" ry="4" />
                </g>
                {/* Astronaut */}
                <g id="astronaut">
                  {/* Backpack */}
                  <rect x="370" y="300" width="60" height="80" rx="15" fill="#0e0620" />
                  {/* Left Leg */}
                  <g id="legL">
                    <rect x="380" y="460" width="12" height="50" rx="6" fill="#fff" stroke="#0e0620" strokeWidth="4" />
                  </g>
                  {/* Right Leg */}
                  <g id="legR">
                    <rect x="408" y="460" width="12" height="50" rx="6" fill="#fff" stroke="#0e0620" strokeWidth="4" />
                  </g>
                  {/* Body */}
                  <ellipse cx="400" cy="400" rx="40" ry="60" fill="#fff" stroke="#0e0620" strokeWidth="4" />
                  {/* Left Arm */}
                  <g id="armL">
                    <rect x="330" y="370" width="20" height="60" rx="10" fill="#fff" stroke="#0e0620" strokeWidth="4" />
                  </g>
                  {/* Right Arm */}
                  <g id="armR">
                    <rect x="450" y="370" width="20" height="60" rx="10" fill="#fff" stroke="#0e0620" strokeWidth="4" />
                  </g>
                  {/* Head */}
                  <g id="head">
                    <ellipse cx="400" cy="320" rx="30" ry="30" fill="#fff" stroke="#0e0620" strokeWidth="4" />
                    <ellipse id="glass" cx="400" cy="320" rx="22" ry="22" fill="#2ccf6d" opacity="0.3" />
                    <rect id="glassShine" x="390" y="310" width="16" height="8" fill="#fff" opacity="0.2" transform="rotate(-30 398 314)" />
                    <rect id="headStripe" x="385" y="300" width="30" height="6" fill="#2ccf6d" />
                  </g>
                </g>
              </svg>
            </div>
            <div className="col-md-6 align-self-center">
              <h1>404</h1>
              <h2>UH OH! You're lost.</h2>
              <p>
                The page you are looking for does not exist.
                How you got here is a mystery. But you can click the button below
                to go back to the homepage.
              </p>
              <button className="btn green" onClick={() => navigate("/")}>
                HOME
              </button>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
