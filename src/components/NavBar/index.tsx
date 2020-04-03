import React from 'react';
export default function NavBar(props: { title: string }) {
    return <div className="blog_navbar">这是{props.title}</div>;
}
