import React, { useEffect, useState } from 'react';
import Icon from 'components/Icon';
import classnames from 'classnames';
import MotionEle from 'components/MotionEle';
import { CSSTransition } from 'react-transition-group';
import { RouteComponentProps, withRouter, Link } from 'react-router-dom';
import './index.scss';
interface MenuProp {
  menu: string;
  path: string;
  sub?: MenuProp[];
}
const NavBar = ({ history, location }: RouteComponentProps) => {
  const navList: MenuProp[] = [
    { menu: '首页', path: '/' },
    {
      menu: '前端',
      path: '/FrontEnd',
      sub: [
        {
          menu: 'Js',
          path: '/FrontEnd/Js',
        },
        {
          menu: 'Css',
          path: '/FrontEnd/Css',
        },
        {
          menu: 'React',
          path: '/FrontEnd/React',
        },
      ],
    },
    { menu: 'Java', path: '/Java' },
    { menu: '优站收藏', path: '/TopSites' },
    { menu: '兴趣百科', path: '/Mix' },
  ];
  const [subIdx, setSubIdx] = useState<number | null>(null);
  const hideBanner = window.sessionStorage.getItem('hideBanner');
  useEffect(() => {
    let navDomArr: NodeListOf<Element> = document.querySelectorAll('.blog_navbar_item');
    if (hideBanner) {
      for (let i = 0; i < navDomArr.length; i++) {
        navDomArr[i].addEventListener('mouseenter', function () {
          setSubIdx(() => i);
        });
        navDomArr[i].addEventListener('mouseleave', function () {
          setSubIdx(() => null);
        });
      }
      window.sessionStorage.setItem('isNavRender', '1');
    }
  }, [hideBanner]);
  function judgeMotion(path: string): boolean {
    return location.pathname !== path && !window.sessionStorage.getItem('isNavRender');
  }
  return hideBanner ? (
    <div className="blog_navbar">
      <div className="blog_navbar_content">
        {navList.map((ele, index) => {
          const subEle = (
            <CSSTransition in={subIdx === index} timeout={800} unmountOnExit classNames="alert">
              <div className="blog_navbar_sub">
                {ele.sub?.map((r: MenuProp, index: number) => (
                  <Link onClick={(e) => e.stopPropagation()} to={r.path} className="blog_navbar_subitem" key={index}>
                    {r.menu}
                  </Link>
                ))}
              </div>
            </CSSTransition>
          );
          return (
            <MotionEle
              key={index}
              aosOption={judgeMotion(ele.path) ? { name: 'fade-up', delay: 300 + index * 150 } : null}
              className={classnames('noselect blog_navbar_item', { sel: location.pathname === ele.path })}
              handleClick={() => history.push(`${ele.path}`)}
            >
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
