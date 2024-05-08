"use client";
import React, { useRef, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { slideIn } from "./motion";

const IntersectionObserverComp = ({
  children,
  animation = slideIn,
  direction,
}) => {
  const ref = useRef();
  const controls = useAnimation();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          controls.start("show");
        }
      },
      { threshold: 0 } // Adjust threshold as needed
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [controls]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={animation(direction, "spring", "0.25", "2")}
    >
      {children}
    </motion.div>
  );
};

export default IntersectionObserverComp;
