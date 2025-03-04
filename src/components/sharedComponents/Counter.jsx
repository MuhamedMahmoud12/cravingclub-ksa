/* eslint-disable react/prop-types */
import { useState, useEffect, useRef } from "react";

const ScrollCounter = ({ to, speed, ...props }) => {
  const [count, setCount] = useState(0);
  const counterRef = useRef(null);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted) {
          setHasStarted(true); // منع العدّ أكثر من مرة
          startCounting(0, to, speed);
        }
      },
      { threshold: 0.5 }
    );

    if (counterRef.current) observer.observe(counterRef.current);

    return () => {
      if (counterRef.current) observer.unobserve(counterRef.current);
    };
  }, [to, speed, hasStarted]);

  const startCounting = (from, to, duration) => {
    let start = from;
    const step = (to - from) / (duration / 16); // 16ms لكل frame عشان يبقى smooth

    const counter = setInterval(() => {
      start += step;
      if (start >= to) {
        setCount(to);
        clearInterval(counter);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
  };

  return (
    <span {...props} ref={counterRef}>
      {count}
    </span>
  );
};

export default ScrollCounter;
