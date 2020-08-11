import React from 'react';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import MotionEle from '@/MotionEle';
import Icon from '@/Icon';
import Cookie from 'js-cookie';
import './index.scss';
interface Iprop extends RouteComponentProps {
  data: any;
}
export default withRouter(({ data, history }: Iprop) => {
  let { title, foreword, createdAt, tag, viewCount, objectId } = data;
  function handleTag(e: React.MouseEvent<HTMLElement>, tag: string): void {
    e.stopPropagation();
    setPart(tag);
  }
  function setPart(tag: string): void {
    switch (tag) {
      case 'React':
      case 'JS':
      case 'Css':
        Cookie.set('part', '前端');
        break;
      default:
        break;
    }
  }
  return (
    <MotionEle
      className="blog_item"
      aosOption={{ name: 'fade-left' }}
      handleClick={() => {
        setPart(tag[0]);
        history.push(`/Article/${objectId}`);
      }}
    >
      <div className="blog_item_title">{title}</div>
      <div className="blog_item_foreword">{foreword}</div>
      <div className="blog_item_info">
        <div className="blog_item_info_view">
          浏览：<span>{viewCount || 1}</span>次
        </div>
        <div className="blog_item_info_tag">
          <Icon name="tag" size={15} color="#333" />
          {tag.map((ele: string, index: number) => (
            <span key={index} onClick={(e) => handleTag(e, ele)}>
              {ele}
            </span>
          ))}
        </div>
        <div className="blog_item_info_time">创建于：{createdAt}</div>
      </div>
    </MotionEle>
  );
});
