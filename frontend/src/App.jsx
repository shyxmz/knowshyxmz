import React, { useLayoutEffect, useState } from "react";
import LoadingPage from "./components/Loading/LoadingPage";
import HomeNavbar from "./components/Navbar/HomeNavbar";
import gsap from "gsap";
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

  useLayoutEffect(() => {
    let t1 = gsap.timeline();

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
        setShowHola(true);

        setTimeout(() => {
          setShowHola(false);
          setShowContent(true);
        }, 1300);
      },
    });
  }, []);

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
            <Section_1 style={{ backgroundColor: '#F5F5F5' }} className="min-h-screen" />
            <Section_2 style={{ backgroundColor: '#F5F5F5' }} className="min-h-screen" />
            <Section_3 style={{ backgroundColor: '#F5F5F5' }} className="min-h-screen" />
            <Section_4 style={{ backgroundColor: '#F5F5F5' }} className="min-h-screen" />
            <Section_5 style={{ backgroundColor: '#F5F5F5' }} className="min-h-screen" />
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
