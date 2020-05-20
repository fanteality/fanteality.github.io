import React, { useState, useEffect } from 'react';
import { RouteComponentProps, withRouter } from 'react-router-dom';
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
                <img onClick={() => props.history.push('/')} src={require('./img/logo.png')} alt="" />
                {navList.map((ele, index) => (
                    <div className={'noselect blog_navbar_item_' + index} key={index}>
                        {ele}
                        <i className="hover_line"></i>
                    </div>
                ))}
            </div>
        </div>
    ) : null;
};
export default withRouter(NavBar) as any;
