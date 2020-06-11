import React, { useState, useEffect } from 'react';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import MotionEle from 'components/MotionEle';
// import Toast from 'components/Toast';

import './index.scss';
const NavBar = (props: RouteComponentProps) => {
    const [navList, setList] = useState<string[]>([]);
    const hideBanner = window.sessionStorage.getItem('hideBanner');
    useEffect(() => {
        setList(['首页', '前端', 'Java', '优站收藏', '杂七杂八']);
    }, []);

    
    return hideBanner ? (
        <div className="blog_navbar">
            <div className="blog_navbar_content">
                {navList.map((ele, index) => (
                    <MotionEle key={index} aosOption={{ name: 'fade-up', delay: 300 + index * 150 }} className={'noselect blog_navbar_item'}>
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
