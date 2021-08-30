import resolveConfig from "tailwindcss/resolveConfig";
import tailwindConfig from "../../tailwind.config";
import { useState, useEffect } from "react";

const fullConfig = resolveConfig(tailwindConfig);

const getBreakpointValue = (value) =>
  +fullConfig.theme.screens[value].slice(
    0,
    fullConfig.theme.screens[value].indexOf("px")
  );

const getCurrentBreakpoint = () => {
  let currentBreakpoint;
  let biggestBreakpointValue = 0;
  for (const breakpoint of Object.keys(fullConfig.theme.screens)) {
    const breakpointValue = getBreakpointValue(breakpoint);
    if (
      breakpointValue > biggestBreakpointValue &&
      window.innerWidth >= breakpointValue
    ) {
      biggestBreakpointValue = breakpointValue;
      currentBreakpoint = breakpoint;
    }
  }
  return currentBreakpoint;
};

function useCurrentBreakpoint() {
  const [currentBreakpoint, setBreakpoint] = useState(null);

  useEffect(() => {
    function handleResize() {
      setBreakpoint(getCurrentBreakpoint());
    }
    window.addEventListener("resize", handleResize);
    window.addEventListener("load", handleResize);
  }, []);

  return currentBreakpoint;
}

export default useCurrentBreakpoint;
