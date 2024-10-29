import React, { useEffect, useRef } from 'react';

const TextScramble = ({ text }) => {
  const el = useRef();

  useEffect(() => {
    const characters = '!<>-_\\/[]{}—=+*^?#________';
    let iteration = 0;

    const scramble = () => {
      const scrambled = text.split('').map((char, index) => {
        if (index < iteration) {
          return text[index];
        }
        return characters[Math.floor(Math.random() * characters.length)];
      }).join('');

      el.current.innerText = scrambled;

      if (iteration >= text.length) return;

      iteration += 1;
      setTimeout(scramble, 30); // Adjust speed here
    };

    scramble();
  }, [text]);

  return <span ref={el} className="glowing-text text-[#b0dae9] text-5xl font-bold uppercase"></span>;
};

export default TextScramble;
