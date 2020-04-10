import React, { useEffect } from 'react';
import './index.scss';
export default () => {
    useEffect(() => {
        initCanvas();
    }, []);
    function initCanvas(){
        let canvas = document.getElementsByTagName('canvas')[0];

    }
    return (
        <div className="blog_banner">
            <canvas></canvas>
        </div>
    );
};
