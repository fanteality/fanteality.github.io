import React from 'react';
import { withRouter } from 'react-router-dom';
import Gl from './canvas';
import './index.scss';
var arr: any = [];
const jinrishici = require('jinrishici');
const { useEffect, useRef, useState, useCallback } = React;
export default withRouter((props) => {
    const canvas: React.MutableRefObject<any> = useRef();
    const [c, setCn] = useState<CanvasRenderingContext2D>();
    const [scale, setScale] = useState<number>(0);
    const [poem, setPoem] = useState<string>('');
    const [textY, setTextY] = useState<number>(-20);
    const radiusMax: number = Math.sqrt(Math.pow(window.innerWidth / 2, 2) + Math.pow(window.innerHeight / 2, 2));
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
            for (var i = 0; i < Math.floor(x / 2); i++) {
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
    useEffect(() => {
        !poem &&
            getPoem() &&
            window.setTimeout(() => {
                handleAnimation(setTextY, 0.05, 24, 2);
            }, 800);
    }, [poem]);
    // 加载生成诗词
    function getPoem(): boolean {
        jinrishici.load((result: any) => {
            let { status, data } = result;
            if (status === 'success') {
                setPoem(data.content);
            } else {
                setPoem('吟诗失败');
            }
        });
        return true;
    }
    // 随机生成描边颜色
    function gc(): string {
        let str = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += str[Math.ceil(Math.random() * 15)];
        }
        return color;
    }
    function handleAnimation(callback: Function, speed: number, target: number, smooth: number): void {
        let t = setInterval(() => {
            callback((n: number) => {
                if (n < target - smooth) {
                    return n + ((target - n) * speed) / 2;
                }
                clearInterval(t);
                return target;
            });
        }, 10);
    }
    return (
        <div className="blog_banner">
            <canvas ref={canvas}>你的浏览器不支持canvas，请更换为Chrome打开</canvas>
            <div className="blog_banner_text">
                <p>{poem}</p>
                <div
                    className="blog_banner_btn"
                    onClick={() => {
                        handleAnimation(setScale, 0.06, radiusMax, 1);
                    }}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="100" height="48" viewBox="0 0 100 48" version="1.2">
                        <rect rx="10" ry="10" stroke="#a8a8a8" strokeWidth="2" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="100" height="48" viewBox="0 0 100 48" version="1.2">
                        <text fill="#fff" x="50%" y="50%" textAnchor="middle" dominantBaseline="central">
                            点击进入
                        </text>
                    </svg>
                </div>
            </div>
            <div className="blog_banner_circle">
                <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
                    <circle cx={window.innerWidth / 2} cy={window.innerHeight / 2} r={scale} fill="#fff" />
                </svg>
            </div>
        </div>
    );
});
