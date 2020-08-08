import React, { ReactElement, useEffect, useCallback } from 'react';
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
  motionEnd?: (() => void) | null;
}
export default (props: Iprop) => {
  const { className = '', children, attrname, startValue = 0, targetValue = 0, aosOption, handleClick, motionEnd } = props;
  const handleObserve = useCallback(() => {
    let ele: NodeListOf<Element> | null = document.querySelectorAll('.' + className.split(' ').join('.'));
    ele[ele.length - 1]!.addEventListener('transitionend', () => {
      motionEnd && motionEnd();
    });
  }, [className, motionEnd]);
  useEffect(() => {
    AOS.init({
      once: true,
    });
    aosOption && motionEnd && handleObserve();
  }, [aosOption, motionEnd, className, handleObserve]);

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
