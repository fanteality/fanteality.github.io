import React from 'react';
import { routeConfig, IFMenu } from './config';
import { Route, Switch, RouteComponentProps, Redirect } from 'react-router-dom';
import DocumentTitle from 'react-document-title';
import PageLoading from '@/PageLoading';
import Navbar from '@/NavBar';
import SideBar from '@/SideBar';
import allPages from '../page';
interface Iprop extends RouteComponentProps {
  hide?: string | null;
}
export default (props: { hide?: string | null }) => {
  let { hide } = props;
  let hideBanner: string = window.sessionStorage.getItem('hideBanner') || '';
  return (
    <React.Fragment>
      <SideBar />
      <div className={hideBanner ? 'blog_content content' : 'blog_content'}>
        <Navbar />
        <React.Suspense fallback={<PageLoading />}>
          <Switch>
            {routeConfig.map((ele: IFMenu, index: number) => {
              return (
                <Route
                  exact
                  key={index}
                  path={ele.path}
                  render={(props: Iprop) => {
                    const Component = allPages[ele.component];
                    props = { hide, ...props };
                    const WrapComponent = (
                      <DocumentTitle title={'fanteality的个人博客 | ' + ele.title}>
                        <Component {...props} />
                      </DocumentTitle>
                    );
                    return !hideBanner ? index === 0 ? WrapComponent : <Redirect to="/" /> : WrapComponent;
                  }}
                />
              );
            })}
            <Redirect to="/NotFound" />
          </Switch>
        </React.Suspense>
      </div>
    </React.Fragment>
  );
};
