import React, { Component } from 'react';
import Banner from 'components/Banner';
import Item from 'components/Item';
import MotionEle from 'components/MotionEle';
import { indexHot } from '../../utils/http';
import './index.scss';
interface HomeState {
    name: string;
    data: any[];
}
export default class Home extends Component<any, HomeState> {
    constructor(props: any) {
        super(props);
        this.state = {
            name: 'home',
            data: [],
        };
    }
    async componentDidMount() {
        let res = await indexHot();
        this.setState({
            data: res,
        });
    }
    render() {
        let { fresh } = this.props;
        let hideBanner = window.sessionStorage.getItem('hideBanner') || '';
        return (
            <div className="blog_home">
                {fresh || hideBanner ? (
                    <>
                        {this.state.data.map((ele, index) => (
                            <Item key={index} data={ele} />
                        ))}
                    </>
                ) : (
                    <Banner></Banner>
                )}
            </div>
        );
    }
}
