import React from 'react';
import { getArticle } from '../../utils/http';
import Toast from 'components/Toast';
import Icon from 'components/Icon';
import PageLoading from 'components/PageLoading';
import { RouteComponentProps, match } from 'react-router-dom';
import './index.scss';

interface Prop extends RouteComponentProps {
  match: match<{ objectId: string }>;
}
interface State {
  info: {
    [propName: string]: any;
  };
  loading: boolean;
}
export default class Article extends React.Component<Prop, State> {
  readonly state = {
    info: {
      title: '',
      tag: [],
      viewCount: 0,
      createdAt: '',
      foreword: '',
      content: '',
    },
    loading: false,
  };
  async componentDidMount() {
    let { objectId } = this.props.match.params;
    this.setState({ loading: true });
    try {
      this.setState({ info: await getArticle(objectId), loading: false });
    } catch (error) {
      Toast.info('文章加载失败', 1500);
      this.setState({
        loading: false,
      });
    }
  }
  handleTag(e: React.MouseEvent<HTMLSpanElement>, ele: string) {
    e.stopPropagation();
    console.log(ele);
  }
  render() {
    let { loading, info } = this.state;
    let { title, tag, viewCount, createdAt, foreword, content } = info;
    return (
      <div className="blog_article">
        {loading ? (
          <PageLoading />
        ) : (
          <>
            <div className="blog_article_title">{title}</div>
            <div className="blog_article_info">
              <div className="blog_article_info_view">
                浏览：<span>{viewCount || 1}</span>次
              </div>
              <div className="blog_article_info_tag">
                <Icon name="tag" size={15} color="#333" />
                {tag.map((ele: string, index: number) => (
                  <span key={index} onClick={(e) => this.handleTag(e, ele)}>
                    {ele}
                  </span>
                ))}
              </div>
              <div className="blog_article_info_time">创建于：{createdAt}</div>
            </div>
            <div className="blog_article_foreword">{foreword}</div>
            <div className="blog_article_content" dangerouslySetInnerHTML={{ __html: content }}></div>
          </>
        )}
      </div>
    );
  }
}
