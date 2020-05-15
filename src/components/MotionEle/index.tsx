import React from 'react';
import { Motion, spring } from 'react-motion';
export default (props: any) => {
    return (
        <Motion defaultStyle={{ x: 0 }} style={{ x: spring(10) }}>
            {(value) => <div>{value.x}</div>}
        </Motion>
    );
};
