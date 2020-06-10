import React from 'react';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import MotionEle from 'components/MotionEle';
import './index.scss';
interface Iprop extends RouteComponentProps {
    data: any;
}
export default withRouter((props: Iprop) => {
    let { title, foreword } = props.data;
    return (
        <MotionEle className="blog_item" aosOption={{ name: 'fade-left' }}>
            <div className="blog_item_title">{title}</div>
            <div className="blog_item_info"></div>
            <div className="blog_item_foreword">{foreword}</div>
        </MotionEle>
    );
});
