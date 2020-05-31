import React, { ReactElement, useEffect } from "react";
import { Motion, spring, presets } from "react-motion";
import AOS from "aos";
import "aos/dist/aos.css";
interface Iprop {
  className?: string;
  attrname: string;
  startValue: number;
  targetValue: number;
  children: ReactElement | string;
}
export default (props: Iprop) => {
  const { className = "", children, attrname, startValue, targetValue } = props;
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <Motion
      defaultStyle={{ motion: startValue }}
      style={{ motion: spring(targetValue, presets.wobbly) }}
    >
      {(value) => (
        <div
          className={className}
          style={{ transform: `${attrname}(${value.motion})` }}
        >
          {children}
        </div>
      )}
    </Motion>
  );
};
