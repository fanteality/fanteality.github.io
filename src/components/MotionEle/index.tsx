import React, { ReactElement } from 'react';
import { Motion, spring, presets } from 'react-motion';
interface Iprop {
    className?: string;
    attrname: string;
    startValue: number;
    targetValue: number;
    children: ReactElement | string;
}
export default (props: Iprop) => {
    const { className = '', children, attrname, startValue, targetValue } = props;

    return (
        <Motion defaultStyle={{ motion: startValue }} style={{ motion: spring(targetValue, presets.wobbly) }}>
            {(value) => (
                <div className={className} style={{ transform: `${attrname}(${value.motion})` }}>
                    {children}
                </div>
            )}
        </Motion>
    );
};
