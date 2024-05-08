"use client";
import React, { useState, useEffect } from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const count = ({ number }) => {
  const [hasCounted, setHasCounted] = useState(false);
  const { ref, inView } = useInView({ threshold: 0.5 }); // Observe 50% visibility

  useEffect(() => {
    if (inView && !hasCounted) {
      setHasCounted(true); // Set flag to prevent future animations
    }
  }, [inView, hasCounted]);

  return (
    <div ref={ref}>
      {hasCounted && <CountUp start={0} end={number} duration={1} delay={0} />}
    </div>
  );
};

export default count;
