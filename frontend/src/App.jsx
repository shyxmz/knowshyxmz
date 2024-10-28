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
        amount: 0.5,
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
    <div className="bg-black h-screen">
      <LoadingPage />
      {showHello && (
        <div className="h-screen flex items-center justify-center">
          <h5 className="glowing-text text-[#b0dae9] text-5xl font-bold uppercase">
            Hola <br/>
            Amigo
          </h5>
        </div>
      )}
    </div>
  );
}