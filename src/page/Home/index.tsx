import React, { Component } from 'react';
import Banner from 'components/Banner';

interface HomeState {
    fresh: boolean;
}
export default class Home extends Component<any, HomeState> {
    constructor(props: any) {
        super(props);
        this.state = {
            fresh: false,
        };
    }
    freshIndex(): void {
        window.sessionStorage.setItem('hideBanner', 'true');
        this.setState({
            fresh: true,
        });
    }
    render() {
        let { fresh } = this.state;
        // let hideBanner = window.sessionStorage.getItem('hideBanner') || '';
        return <div className="blog_home">{fresh ? <div className="blog_home_content">这是首页</div> : <Banner freshIndex={() => this.freshIndex()}></Banner>}</div>;
    }
}
