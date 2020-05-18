import React, { ReactElement } from 'react';
import { Motion, spring } from 'react-motion';
interface Iprop {
    className?: string;
    x: number;
    children: ReactElement | string;
}
export default (props: Iprop) => {
    const { className = '', children, x } = props;
    return (
        <Motion defaultStyle={{ x }} style={{ x: spring(0) }}>
            {(value) => (
                <div className={className} style={{ transform: `translateY(${value.x}px)` }}>
                    {children}
                </div>
            )}
        </Motion>
    );
};
