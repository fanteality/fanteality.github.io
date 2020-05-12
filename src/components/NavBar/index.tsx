import React, { useState, useEffect } from 'react';
import './index.scss';
import { RouteComponentProps, withRouter } from 'react-router-dom';
const NavBar = (props: RouteComponentProps) => {
    const [navList, setList] = useState<string[]>([]);
    let hideBanner = window.sessionStorage.getItem('hideBanner');
    useEffect(() => {
        setList(['首页', 'HTML', 'CSS', 'React']);
    }, []);
    return hideBanner ? (
        <div className="blog_navbar">
            {navList.map((ele, index) => (
                <div className="blog_navbar-item" key={index}>
                    {ele}
                </div>
            ))}
        </div>
    ) : null;
};
export default withRouter(NavBar) as any;
