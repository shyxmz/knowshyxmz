import React, { useLayoutEffect, useState } from "react";
import LoadingPage from "./components/Loading/LoadingPage";
import HomeNavbar from "./components/Navbar/HomeNavbar";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import TextScramble from "./components/Effects/TextScramble";
import Section_1 from "./components/Sections/Section_1";
import Section_2 from "./components/Sections/Section_2";
import Section_3 from "./components/Sections/Section_3";
import Section_4 from "./components/Sections/Section_4";
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [showHola, setShowHola] = useState(false);
  const [showContent, setShowContent] = useState(false);
  const [isFirstLoad, setIsFirstLoad] = useState(true); // Flag to track the first load

  gsap.registerPlugin(ScrollTrigger);

  useLayoutEffect(() => {
    const t1 = gsap.timeline();

    // Loading page animation
    t1.to(".box", {
      scale: 0,
      y: 60,
      rotate: 400,
      duration: 1,
      repeat: 1,
      yoyo: true,
      delay: 0.5,
      stagger: {
        amount: 0.5,
        from: "start",
        grid: [3, 3],
      },
    });

    t1.to(".container", {
      rotate: "-405deg",
      scale: 0,
      duration: 1,
    });

    t1.to(".wrapper", {
      opacity: 0,
      display: "none",
      onComplete: () => {
        setIsLoading(false);
        if (isFirstLoad) {
          setShowHola(true);
          setTimeout(() => {
            setShowHola(false);
            setShowContent(true); // Just show content without animation
            setIsFirstLoad(false); // Disable animations after the first load
          }, 1300);
        } else {
          setShowContent(true); // Just show content without animation
        }
      },
    });

    // Timeline for background animations
    const t2 = gsap.timeline({ paused: true });

    // Decrease duration for faster animations
    t2.from(".bg-1", {
      xPercent: 100,
      duration: 1.5, // Changed to 1.5 seconds
      opacity: 0, // Smooth transition
    });
    t2.from(".txt", {
      x: 50,
      duration: 1, // Changed to 1 second
    });
    t2.from(".txt", {
      opacity: 0,
      duration: 1, // Changed to 1 second
    }, 1);
    t2.from(".btn-2", {
      x: -125,
      duration: 1, // Added duration for consistency
    });
    t2.from(".btn-1", {
      x: 60,
      opacity: 0,
      duration: 1, // Added duration for consistency
    }, "<");
    t2.from(".icon", {
      opacity: 0,
      y: 50,
      duration: 1, // Changed to 1 second
    });

    // Trigger t2 when the content is shown
    if (showContent) {
      t2.play();
    }

    // Timeline for section 2 animations
    const t3 = gsap.timeline({
      scrollTrigger: {
        trigger: ".section-2",
        start: "top center",
      },
    });

    t3.from(".boxs-1", {
      x: 200,
      duration: 1,
      delay: 0.4,
    });
    t3.from(".boxs-2", {
      x: -200,
      duration: 1,
    }, 0);
    t3.from(".boxs-3", {
      x: 200,
      duration: 1,
    }, 0);
    t3.from(".text-content_s2", {
      x: -500,
      duration: 1.5,
    }, 0);
    t3.from(".sm_text", {
      y: -100,
      duration: 1,
    }, 0.8);

    const t4 = gsap.timeline({
      scrollTrigger: {
        trigger: ".section-3",
        start: "top center",
      },
    });

    t4.from(".bg-3", {
      x: -900,
      duration: 1,
    });
    t4.from(".white-box", {
      scaleY:0,
      duration: 1,
    }, 0.5);
    t4.from(".white-box-content", {
      opacity:0,
      duration: 1,
    });
    t4.from(".text-content_s3", {
      x:-500,
      duration: 1,
    },0.5);

    const t5 = gsap.timeline({
      scrollTrigger: {
        trigger: ".section-4",
        start: "top center",
      },
    });

    t5.from(".img_2", {
      x:-1000,
      duration: 1,
    });
    t5.from(".img_1", {
      x:-1000,
      duration: 1,
    },0.5);
    t5.from(".bg-4", {
      x:-1000,
      duration: 1,
    },0.5);
    t5.from(".txt-1", {
      opacity:0,
      duration: 1,
    },1);
    t5.from(".txt-2", {
      opacity:0,
      duration: 1,
    },1.2);
    t5.from(".txt-3", {
      opacity:0,
      duration: 1,
    },0.8);
    t5.from(".txt-4", {
      opacity:0,
      duration: 1,
    },1.2);

    const t6 = gsap.timeline({
      scrollTrigger: {
        trigger: ".section-5",
        start: "top center",
      },
    });




  }, [showContent, isFirstLoad]);

  return (
  <div className="bg-[#F5F5F5] min-h-screen relative overflow-auto">
    {isLoading ? (
      <LoadingPage />
    ) : showHola ? (
      <div className="h-screen bg-[#F5F5F5] flex items-center justify-center">
        <div className="text-6xl font-bold text-[#333333]">
          <TextScramble text="Hola Amigo" />
        </div>
      </div>
    ) : (
      showContent && (
        <div>
          <HomeNavbar />
          <Section_1 className="h-[100vh] mb-0" />
          <Section_2 className="h-[100vh] mb-0" />
          <Section_3 className="h-[100vh] mb-0" />
          <Section_4 className="h-[100vh] mb-0" />
          <footer className="py-6">
      <div className="flex justify-start items-center p-6 space-x-60">
        <div>
          <p className="font-bold text-xl mb-4">
            Shy<span className="text-[#E74B7E]">am</span>
          </p>
          <p className="w-80 text-lg">
            "Comment your code so the next person knows exactly who to thank—or blame."
          </p>
        </div>
        <div className="space-y-6">
          <p className="menu-p text-lg font-semibold">Links</p>
          <div className="grid grid-cols-2 gap-6">
            {/* Instagram Button */}
            <div className="flex items-center space-x-3">
              <div className="social-button">
                <a href="https://www.instagram.com/shyxm.zz/" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-3">
                  <button className="relative w-12 h-12 rounded-full group">
                    <div className="floater w-full h-full absolute top-0 left-0 bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-500 rounded-full duration-300 group-hover:-top-8 group-hover:shadow-2xl" />
                    <div className="icon relative z-10 w-full h-full flex items-center justify-center border-2 border-gradient-to-tr from-yellow-400 via-red-500 to-purple-500 rounded-full">
                      <svg xmlns="http://www.w3.org/2000/svg" width={22} height={22} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                      </svg>
                    </div>
                  </button>
                  <span className="text-xl">Instagram</span>
                </a>
              </div>
            </div>

            {/* GitHub Button */}
            <div className="flex items-center space-x-3">
              <div className="social-button">
                <a href="https://github.com/shyxmz" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-3">
                  <button className="relative w-12 h-12 rounded-full group">
                    <div className="floater w-full h-full absolute top-0 left-0 bg-black rounded-full duration-300 group-hover:-top-8 group-hover:shadow-2xl" />
                    <div className="icon relative z-10 w-full h-full flex items-center justify-center border-2 border-black rounded-full">
                      <svg height={24} width={24} viewBox="0 0 24 24">
                        <path className="group-hover:fill-[#171543] fill-white duration-300" d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.654 1.652.243 2.873.119 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                    </div>
                  </button>
                  <span className="text-xl">Github</span>
                </a>
              </div>
            </div>

            {/* LinkedIn Button */}
            <div className="flex items-center space-x-3">
              <div className="social-button">
                <a href="https://www.linkedin.com/in/shyam-modi-1729zyu/" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-3">
                  <button className="relative w-12 h-12 rounded-full group">
                    <div className="floater w-full h-full absolute top-0 left-0 bg-blue-500 rounded-full duration-300 group-hover:-top-8 group-hover:shadow-2xl" />
                    <div className="icon relative z-10 w-full h-full flex items-center justify-center border-2 border-blue-500 rounded-full">
                      <svg height={24} width={24} viewBox="0 0 24 24" className="fill-white group-hover:fill-[#171543] duration-300">
                        <path d="M20,2H4C2.9,2,2,2.9,2,4v16c0,1.1,0.9,2,2,2h16c1.1,0,2-0.9,2-2V4C22,2.9,21.1,2,20,2z M8.5,19H6V10h2.5V19z M7.3,9 h-0.1C6.4,9,6,8.6,6,8.1V7.9c0-0.5,0.4-0.9,1.2-0.9h0.1c0.8,0,1.2,0.4,1.2,0.9v0.1C8.5,8.6,8.1,9,7.3,9z M18,19h-2.5v-4.6c0-1.1-0.4-1.9-1.3-1.9c-0.7,0-1.1,0.5-1.3,1v5.5H10V10h2.4v1.2c0.3-0.6,1-1.5,2.4-1.5c1.7,0,3,1.1,3,3.6V19z" />
                      </svg>
                    </div>
                  </button>
                  <span className="text-xl">LinkedIn</span>
                </a>
              </div>
            </div>

            {/* Leetcode Button */}
            <div className="flex items-center space-x-3">
              <div className="social-button">
                <a href="https://leetcode.com/u/z_stan/" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-3">
                  <button className="relative w-12 h-12 rounded-full group">
                    <div className="floater w-full h-full absolute top-0 left-0 bg-yellow-500 rounded-full duration-300 group-hover:-top-8 group-hover:shadow-2xl" />
                    <div className="icon relative z-10 w-full h-full flex items-center justify-center border-2 border-yellow-500 rounded-full">
                      <SiLeetcode className="w-6 h-6 text-white group-hover:text-[#171543] duration-300" />
                    </div>
                  </button>
                  <span className="text-xl">Leetcode</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>


        </div>
      )
    )}
  </div>
);
}
