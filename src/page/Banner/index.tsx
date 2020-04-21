import React, { useEffect, useRef, useState, useCallback } from 'react';
import { withRouter } from 'react-router-dom';
import Cookie from 'js-cookie';
import Gl from './canvas';
import './index.scss';
var arr: any = [];
const jinrishici = require('jinrishici');
export default withRouter((props) => {
    const canvas: React.MutableRefObject<any> = useRef();
    const [c, setCn] = useState<CanvasRenderingContext2D>();
    const [scale, setScale] = useState(0);
    const [poem, setPoem] = useState('');
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
        if (!poem) {
            // 加载生成诗词
            jinrishici.load((result: any) => {
                let { status, data } = result;
                if (status === 'success') {
                    setPoem(data.content);
                } else {
                    setPoem('吟诗失败');
                }
            });
        }
    }, [poem]);
    // 随机生成描边颜色
    function gc(): string {
        let s = '0123456789ABCDEF';
        let c = '#';
        for (let i = 0; i < 6; i++) {
            c += s[Math.ceil(Math.random() * 15)];
        }
        return c;
    }
    // 点击切换至首页
    function toHome(speed: number) {
        let radiusMax = Math.sqrt(Math.pow(window.innerWidth / 2, 2) + Math.pow(window.innerHeight / 2, 2));
        let t = window.setInterval(() => {
            setScale((n) => {
                if (n < radiusMax) {
                    return n + ((radiusMax - n) * speed) / 2;
                }
                clearInterval(t);
                Cookie.set('hideBanner', 'true', { expires: 7 });
                return n;
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
                        toHome(0.06);
                    }}
                >
                    点击进入
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
