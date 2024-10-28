// App.jsx
import { useLayoutEffect } from "react";
import LoadingPage from "./components/LoadingPage";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useState } from "react";

export default function App() {
  const [showHello, setShowHello] = useState(false);

  useGSAP(() => {
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
        amount: 1.5,
        from: "start",
        grid: [3,3],
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
      onComplete: () => setShowHello(true)
    });
  });

  return (
    <>
      <LoadingPage />
      {showHello && (
        <div className="h-screen bg-black flex items-center justify-center">
          <h1 className="text-white text-8xl font-bold">Hello</h1>
        </div>
      )}
    </>
  );
}