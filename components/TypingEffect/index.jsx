import { useEffect, useRef, useState } from "react";
import styles from "./TypewriterText.module.css";

const TypingEffect = ({ text }) => {
  const [displayText, setDisplayText] = useState('');
  text = "  " + text;
  useEffect(() => {
    let currentIndex = 0;
    const intervalId = setInterval(() => {
      setDisplayText(prevText => prevText + text[currentIndex]);
      currentIndex++;
      if (currentIndex >= text.length-1) {
        clearInterval(intervalId);
      }
    }, 50);

    return () => clearInterval(intervalId);
  }, [text]);

  return <p className='p-2 ml-4 mr-2 font-medium'>{displayText}</p>;
};

export default TypingEffect;
