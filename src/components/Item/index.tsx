import React from "react";
import "./index.scss";
export default () => {
  return (
    <div className="blog_item">
      <div className="blog_item_content">
          <p className="blog_item_title">React</p>
          <p className="blog_item_count">文章:8篇</p>
          <p className="blog_item_fresh">最近更新:3天前</p>
      </div>
      <div className="blog_item_bg"></div>
    </div>
  );
};
