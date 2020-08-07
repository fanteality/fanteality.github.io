import React, { ReactElement, useEffect } from 'react';
import { Motion, spring, presets } from 'react-motion';
import AOS from 'aos';
import 'aos/dist/aos.css';
interface Iprop {
  className?: string;
  aosOption?: {
    name: string;
    delay?: number;
  };
  closeMotion?: boolean;
  attrname?: string;
  startValue?: number;
  targetValue?: number;
  children: ReactElement | string | ReactElement[];
  handleClick?: () => void;
}
export default (props: Iprop) => {
  const { className = '', children, attrname, startValue = 0, targetValue = 0, aosOption, closeMotion = false, handleClick } = props;

  useEffect(() => {
    AOS.init({
      once: true,
    });
  }, []);

  let ele: ReactElement;
  if (closeMotion) {
    ele = <div className={className}>{children}</div>;
  } else {
    ele = aosOption ? (
      <div className={className} onClick={handleClick} data-aos={aosOption.name} data-aos-delay={aosOption.delay}>
        {children}
      </div>
    ) : (
      <Motion defaultStyle={{ motion: startValue }} style={{ motion: spring(targetValue, presets.wobbly) }}>
        {(value) => {
          return (
            <div onClick={handleClick} className={className} style={{ transform: `${attrname}(${value.motion})` }}>
              {children}
            </div>
          );
        }}
      </Motion>
    );
  }
  return ele;
};
