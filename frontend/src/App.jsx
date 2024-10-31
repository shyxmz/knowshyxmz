import React, { useLayoutEffect, useState, useEffect } from "react";
import LoadingPage from "./components/Loading/LoadingPage";
import HomeNavbar from "./components/Navbar/HomeNavbar";
import gsap from "gsap";
import TextScramble from "./components/Effects/TextScramble";
import CursorPointer from "./components/Cursor/Cursor";
import Section_1 from "./components/Sections/Section_1";
import Section_2 from "./components/Sections/Section_2";
import Section_3 from "./components/Sections/Section_3";
import Section_4 from "./components/Sections/Section_4";

export default function App() {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  const [isLoading, setIsLoading] = useState(true);
  const [showHola, setShowHola] = useState(false);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const handleMouseMovement = (e) => {
      setX(e.clientX);
      setY(e.clientY);
    };
    document.addEventListener("mousemove", handleMouseMovement);

    return () => {
      document.removeEventListener("mousemove", handleMouseMovement);
    };
  }, []);

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
    <div className="bg-[#F5F5F5] min-h-screen relative overflow-auto" style={{ cursor: 'none' }}>
      {/* CursorPointer should be fixed to follow smoothly */}
      <CursorPointer x={x} y={y} style={{ position: "fixed", pointerEvents: "none" }} />
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
          </div>
        )
      )}
    </div>
  );
}
