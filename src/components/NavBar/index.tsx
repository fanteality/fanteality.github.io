import React, { useEffect, useState } from 'react';
import Icon from 'components/Icon';
import MotionEle from 'components/MotionEle';
import { CSSTransition } from 'react-transition-group';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import './index.scss';
interface MenuProp {
  menu: string;
  sub?: MenuProp[];
}
const NavBar = (props: RouteComponentProps) => {
  const navList: MenuProp[] = [
    { menu: '首页' },
    {
      menu: '前端',
      sub: [
        {
          menu: 'Js',
        },
        {
          menu: 'Css',
        },
        {
          menu: 'React',
        },
      ],
    },
    { menu: 'Java' },
    { menu: '优站收藏' },
    { menu: '杂七杂八' },
  ];
  const [subIdx, setSubIdx] = useState<number | null>(null);
  useEffect(() => {
    let navDomArr: NodeListOf<Element> = document.querySelectorAll('.blog_navbar_item');
    for (let i = 0; i < navDomArr.length; i++) {
      navDomArr[i].addEventListener('mouseenter', function () {
        setSubIdx(() => i);
      });
      navDomArr[i].addEventListener('mouseleave', function () {
        setSubIdx(() => null);
      });
    }
  }, []);

  const hideBanner = window.sessionStorage.getItem('hideBanner');
  return hideBanner ? (
    <div className="blog_navbar">
      <div className="blog_navbar_content">
        {navList.map((ele, index) => {
          const subEle = (
            <CSSTransition in={subIdx === index} timeout={800} unmountOnExit onExited={() => console.log(1)} classNames="alert">
              <div className="blog_navbar_sub">
                {ele.sub?.map((r: MenuProp, index: number) => (
                  <div className="blog_navbar_subitem" key={index}>
                    {r.menu}
                  </div>
                ))}
              </div>
            </CSSTransition>
          );
          return (
            <MotionEle key={index} aosOption={{ name: 'fade-up', delay: 300 + index * 150 }} className={'noselect blog_navbar_item'}>
              <>
                {ele.sub ? (
                  <>
                    {ele.menu}
                    <Icon name="Icon-KeyboardArrow-Down-Rounded" />
                    {subEle}
                  </>
                ) : (
                  ele.menu
                )}
                <i className="hover_line"></i>
              </>
            </MotionEle>
          );
        })}
      </div>
    </div>
  ) : null;
};
export default withRouter(NavBar) as any;
