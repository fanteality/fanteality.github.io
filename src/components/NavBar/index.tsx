import React, { useState, useEffect } from 'react';
import './index.scss';
export default function NavBar() {
    const [navList, setList] = useState<string[]>([]);
    useEffect(() => {
        setList(['首页', 'HTML', 'CSS', 'React']);
    }, []);
    return (
        <div className="blog_navbar">
            {navList.map((ele, index) => (
                <div className="blog_navbar-item" key={index}>
                    {ele}
                </div>
            ))}
        </div>
    );
}
