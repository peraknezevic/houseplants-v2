"use client";

import { useEffect } from "react";

const ScrollTopFix = () => {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);
  return null;
};

export default ScrollTopFix;
