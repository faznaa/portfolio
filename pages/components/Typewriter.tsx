import React, { useState, useEffect, useRef, Suspense } from 'react';
import { useInView } from 'react-intersection-observer';

const Typewriter = ({ text, delay }:any) => {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const { ref, inView, entry } = useInView({
    /* Optional options */
    threshold: 0,
  });
  // const isInViewPort = useIsInViewport(ref1)
  useEffect(() => {
    if (currentIndex < text.length && inView ) {
      const timeout = setTimeout(() => {
        setCurrentText(prevText => prevText + text[currentIndex]);
        setCurrentIndex(prevIndex => prevIndex + 1);
      }, delay);
  
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, delay, text,inView]);
  // Typing logic goes here

  return <span ref={ref}>{currentText}</span>;
};

export default Typewriter;