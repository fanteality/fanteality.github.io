import React from 'react';

export default (props: { name: string; size?: number; color?: string }) => {
    let { size = 0, name = '', color = '' } = props;
    return (
        <svg className="icon" style={{ fill: color || '#aaa', fontSize: size || 20 }} aria-hidden="true">
            <use xlinkHref={`#icon-${name}`}></use>
        </svg>
    );
};
