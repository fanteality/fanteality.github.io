import React, { useEffect, useRef, useState, useCallback } from 'react';
import { withRouter } from 'react-router-dom';
import Home from 'page/Home';
import Gl from './canvas';
import './index.scss';
var arr: any = [];
export default withRouter((props) => {
    const canvas: React.MutableRefObject<any> = useRef();
    const [c, setCn] = useState<CanvasRenderingContext2D>();
    const [scale, setScale] = useState(0);
    const anim = useCallback(() => {
        window.requestAnimationFrame(anim);
        if (c) {
            c.fillStyle = 'rgba(0,0,0,0.1)';
            c.fillRect(0, 0, window.innerWidth, window.innerHeight);
            arr.forEach((ele: Gl) => {
                ele.draw();
            });
        }
    }, [c]);
    const render = useCallback(() => {
        let x = window.innerWidth,
            y = window.innerHeight;
        if (c) {
            for (var i = 0; i < 600; i++) {
                arr.push(new Gl(c, x / 2, y / 2, gc(), Math.random() / 300));
            }
            anim();
        }
    }, [c, anim]);

    useEffect(() => {
        let cn = canvas.current;
        cn.height = window.innerHeight;
        cn.width = window.innerWidth;
        setCn(cn.getContext('2d'));
        // 加载完毕生成画布
        render();
    }, [render]);
    // 随机生成描边颜色
    function gc(): string {
        let s = '0123456789ABCDEF';
        let c = '#';
        for (let i = 0; i < 6; i++) {
            c += s[Math.ceil(Math.random() * 15)];
        }
        return c;
    }
    function toHome() {
        window.setInterval(() => {
            setScale((n) => {
                return n + 0.2;
            });
        }, 10);
    }
    return (
        <div className="blog_banner">
            <canvas ref={canvas}>你的浏览器不支持canvas，请更换为Chrome打开</canvas>
            <div className="blog_banner_text" onClick={toHome}>
                <p>这里是小葵花课堂</p>
            </div>
            <div className="blog_banner_circle" style={{ transform: `scale(${scale})` }}></div>
        </div>
    );
});
