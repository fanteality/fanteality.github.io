import React, { Component } from 'react';
import Banner from 'components/Banner';
import Item from 'components/Item';
import { indexHot } from '../../utils/http';
import './index.scss';
import { RouteComponentProps } from 'react-router-dom';
interface HomeState {
  name: string;
  data: any[];
}
export default class Home extends Component<RouteComponentProps, HomeState> {
  constructor(props: RouteComponentProps) {
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
    let hideBanner = window.sessionStorage.getItem('hideBanner') || '';
    let { data } = this.state;
    return <div className="blog_home">{hideBanner ? <>{data.length > 0 && data.map((ele, index) => <Item key={index} data={ele} />)}</> : <Banner />}</div>;
  }
}
