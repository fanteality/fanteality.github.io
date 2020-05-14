import React from 'react';
import { routeConfig, IFMenu } from './config';
import { Route, Switch, RouteComponentProps } from 'react-router-dom';
import DocumentTitle from 'react-document-title';
import PageLoading from 'components/PageLoading';
import allPages from '../page';
interface Iprop extends RouteComponentProps {
    hide?: string | null;
}
export default (props: { hide: string | null }) => {
    let { hide } = props;
    return (
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
                                    <DocumentTitle title={ele.title}>
                                        <Component {...props} />
                                    </DocumentTitle>
                                );
                                return WrapComponent;
                            }}
                        />
                    );
                })}
            </Switch>
        </React.Suspense>
    );
};
