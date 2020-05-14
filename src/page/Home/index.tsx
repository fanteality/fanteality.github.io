import React, { Component } from 'react';
import Banner from 'components/Banner';

interface HomeState {
    name: string;
}
export default class Home extends Component<any, HomeState> {
    constructor(props: any) {
        super(props);
        this.state = {
            name: 'home',
        };
    }
    render() {
        let { fresh } = this.props;
        let hideBanner = window.sessionStorage.getItem('hideBanner') || '';
        return <div className="blog_home">{fresh || hideBanner ? <div className="blog_home_content">这是首页</div> : <Banner></Banner>}</div>;
    }
}