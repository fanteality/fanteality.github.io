import React from 'react';
import { routeConfig, IFMenu } from './config';
import { Route, Switch } from 'react-router-dom';
import DocumentTitle from 'react-document-title';
import allPages from '../page';
export default () => {
    return (
        <React.Suspense fallback={'loading...'}>
            <Switch>
                {routeConfig.map((ele: IFMenu, index: number) => {
                    return (
                        <Route
                            exact
                            key={index}
                            path={ele.path}
                            render={props => {
                                const Component = allPages[ele.component];
                                const WrapComponent = (
                                    <DocumentTitle title={ele.title}>
                                        <Component {...props}/>
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
