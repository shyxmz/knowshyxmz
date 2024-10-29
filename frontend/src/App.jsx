import React, { useLayoutEffect, useState } from "react";
import LoadingPage from "./components/Loading/LoadingPage";
import HomeNavbar from "./components/Navbar/HomeNavbar";
import gsap from "gsap";
import TextScramble from "./components/Effects/TextScramble"; // Import the TextScramble component

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [showHola, setShowHola] = useState(false);
  const [showContent, setShowContent] = useState(false);

  useLayoutEffect(() => {
    let t1 = gsap.timeline();

    // Animate the loading elements
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

    // Transition from loading page to "Hola Amigo" text
    t1.to(".wrapper", {
      opacity: 0,
      display: "none",
      onComplete: () => {
        setIsLoading(false);
        setShowHola(true);

        // After a delay, show the main content with HomeNavbar
        setTimeout(() => {
          setShowHola(false); // Hide the "Hola Amigo" text
          setShowContent(true); // Show the main content
        }, 1000); // Adjust timing as needed
      },
    });
  }, []);

  return (
    <div className="bg-white h-screen"> {/* Change the background color to white */}
      {isLoading ? (
        <LoadingPage />
      ) : showHola ? (
        <div className="h-screen flex items-center justify-center">
          <TextScramble text="Hola Amigo" />
        </div>
      ) : (
        showContent && (
          <>
            <HomeNavbar />
            {/* Other main content can go here */}
          </>
        )
      )}
    </div>
  );
}
