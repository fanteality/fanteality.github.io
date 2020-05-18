import React, { useState, useEffect } from 'react';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import './index.scss';
interface ItemProp {
    sub: string[];
}
const NavBar = (props: RouteComponentProps) => {
    const [navList, setList] = useState<string[]>([]);
    const hideBanner = window.sessionStorage.getItem('hideBanner') || '';
    useEffect(() => {
        setList(['首页', '前端', 'Java', '优站收藏', '杂七杂八']);
    }, []);
    return hideBanner ? (
        <div className="blog_navbar">
            {navList.map((ele: ItemProp | string, index) => {
                const getItem = (obj: string, index: number) => (
                    <div className={'blog_navbar_item_' + index} key={index}>
                        {obj}
                    </div>
                );
                return typeof ele === 'object' ? ele.sub.map((ele: string, index: number) => getItem(ele, index)) : getItem(ele, index);
            })}
        </div>
    ) : null;
};
export default withRouter(NavBar) as any;
