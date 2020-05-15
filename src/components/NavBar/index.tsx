import React, { useState, useEffect } from 'react';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import './index.scss';
const NavBar = (props: RouteComponentProps) => {
    const [navList, setList] = useState<string[]>([]);
    const hideBanner = window.sessionStorage.getItem('hideBanner') || '';
    useEffect(() => {
        setList(['首页', 'HTML', 'CSS', 'React']);
    }, []);
    return hideBanner ? (
        <div className="blog_navbar">
            {navList.map((ele, index) => (
                <div className="blog_navbar_item" key={index}>{ele}</div>
            ))}
        </div>
    ) : null;
};
export default withRouter(NavBar) as any;
