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
import Section_5 from "./components/Sections/Section_5";

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

    t6.from(".bg-5", {
      scaleY:0,
      duration: 1,
    });
    t6.from(".side-1", {
      opacity:0,
      duration: 1,
    });
    t6.from(".side-2", {
      opacity:0,
      duration: 1,
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
          <Section_1 className="h-[95vh] mb-0" />
          <Section_2 className="h-[95vh] mb-0" />
          <Section_3 className="h-[95vh] mb-0" />
          <Section_4 className="h-[95vh] mb-0" />
          <Section_5 className="h-[95vh] mb-0" />
          <footer className="py-4">
            <div className="flex justify-start items-center p-4 space-x-48">
              <div>
                <p className="font-bold mb-4">
                  Shy<span className="text-[#E74B7E]">am</span>
                </p>
                <p className="w-72">
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry,
                  ever since the 1500s.
                </p>
              </div>
              <ul className="menu grid grid-cols-2 gap-4">
                <p className="menu-p col-span-2">Links</p>
                <li className="menu-li">Github</li>
                <li className="menu-li">LinkedIn</li>
                <li className="menu-li">Leetcode</li>
                <li className="menu-li">Instagram</li>
              </ul>
            </div>
          </footer>
        </div>
      )
    )}
  </div>
);
}
