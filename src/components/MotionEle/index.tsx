import React, { ReactElement, useEffect } from 'react';
import { Motion, spring, presets } from 'react-motion';
import AOS from 'aos';
import 'aos/dist/aos.css';
interface Iprop {
  className?: string;
  aosOption?: {
    name: string;
    delay?: number;
  } | null;
  attrname?: string;
  startValue?: number;
  targetValue?: number;
  children: ReactElement | string | ReactElement[];
  handleClick?: () => void;
}
export default (props: Iprop) => {
  const { className = '', children, attrname, startValue = 0, targetValue = 0, aosOption, handleClick } = props;

  useEffect(() => {
    AOS.init({
      once: true,
    });
  }, []);

  let ele: ReactElement;
  if (aosOption) {
    let { name = '', delay = 0 } = aosOption;
    ele = (
      <div className={className} onClick={handleClick} data-aos={name} data-aos-delay={delay}>
        {children}
      </div>
    );
  } else {
    ele = (
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
