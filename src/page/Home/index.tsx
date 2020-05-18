import React, { Component } from 'react';
import Banner from 'components/Banner';
import Item from 'components/Item';
import MotionEle from 'components/MotionEle';
import './index.scss';
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
        return <div className="blog_home">{fresh || hideBanner ? <div className="blog_home_content"></div> : <Banner></Banner>}</div>;
    }
}
