import React from 'react';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import MotionEle from 'components/MotionEle';
import Icon from 'components/Icon';
import './index.scss';
interface Iprop extends RouteComponentProps {
  data: any;
}
export default withRouter((props: Iprop) => {
  let { title, foreword, createdAt, tag, viewCount } = props.data;
  return (
    <MotionEle className="blog_item" aosOption={{ name: 'fade-left' }}>
      <div className="blog_item_title">{title}</div>
      <div className="blog_item_foreword">{foreword}</div>
      <div className="blog_item_info">
        <div className="blog_item_info_view">
          浏览：<span>{viewCount || 1}</span>次
        </div>
        <div className="blog_item_info_tag">
          <Icon name="tag" size={15} color="#333" />
          {tag.map((ele: string, index: number) => (
            <span key={index}>{ele}</span>
          ))}
        </div>
        <div className="blog_item_info_time">创建于：{createdAt}</div>
      </div>
    </MotionEle>
  );
});
