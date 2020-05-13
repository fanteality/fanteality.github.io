import React, { useState, useEffect } from 'react';
import './index.scss';
import { RouteComponentProps, withRouter } from 'react-router-dom';
const NavBar = (props: RouteComponentProps) => {
    const [navList, setList] = useState<string[]>([]);
    useEffect(() => {
        setList(['首页', 'HTML', 'CSS', 'React']);
    }, []);
    return (
        <div className="blog_navbar">
            {navList.map((ele, index) => (
                <div className="blog_navbar_item" key={index}>
                    {ele}
                </div>
            ))}
        </div>
    );
};
export default withRouter(NavBar) as any;
