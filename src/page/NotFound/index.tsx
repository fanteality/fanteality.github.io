import React from 'react';
import './index.scss';
import { RouteComponentProps, Link } from 'react-router-dom';
export default class NotFound extends React.Component<RouteComponentProps, {}> {
  render() {
    return (
      <div className="blog_notFound">
        <p>页面不存在</p>
        <Link to="/">回到首页</Link>
      </div>
    );
  }
}
