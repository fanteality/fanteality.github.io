import React, { useState, useEffect } from 'react';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import MotionEle from 'components/MotionEle';
import DelayWrap from 'components/DelayWrap';
// import Toast from 'components/Toast';
import { indexHot } from '../../utils/http';
import logo from './img/logo.png';
import './index.scss';

const NavBar = (props: RouteComponentProps) => {
    const [navList, setList] = useState<string[]>([]);
    const hideBanner = window.sessionStorage.getItem('hideBanner');
    useEffect(() => {
        indexHot()
            .then((res) => {
                // Toast.info("info",1000)
                console.log(res);
            })
            .catch((err) => {
                console.log(2222, err);
            });
        setList(['首页', '前端', 'Java', '优站收藏', '杂七杂八']);
    }, []);
    return hideBanner ? (
        <div className="blog_navbar">
            <div className="blog_navbar_content">
                <DelayWrap delay={1000}>
                    <MotionEle className="blog_navbar_logo" attrname="scale" startValue={0} targetValue={1}>
                        <img onClick={() => props.history.push('/')} src={logo} alt="" />
                    </MotionEle>
                </DelayWrap>
                {navList.map((ele, index) => (
                    <MotionEle key={index} aosOption={{ name: 'fade-up', delay: index * 150 }} className={'noselect blog_navbar_item'}>
                        <>
                            {ele}
                            <i className="hover_line"></i>
                        </>
                    </MotionEle>
                ))}
            </div>
        </div>
    ) : null;
};
export default withRouter(NavBar) as any;
