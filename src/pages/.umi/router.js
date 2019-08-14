import React from 'react';
import { Router as DefaultRouter, Route, Switch } from 'react-router-dom';
import dynamic from 'umi/dynamic';
import renderRoutes from 'umi/lib/renderRoutes';
import history from '@tmp/history';
import { routerRedux, dynamic as _dvaDynamic } from 'dva';

const Router = routerRedux.ConnectedRouter;

const routes = [
  {
    path: '/',
    component: __IS_BROWSER
      ? _dvaDynamic({
          component: () =>
            import(/* webpackChunkName: "layouts__index" */ '../../layouts/index.tsx'),
        })
      : require('../../layouts/index.tsx').default,
    routes: [
      {
        path: '/404',
        exact: true,
        component: __IS_BROWSER
          ? _dvaDynamic({
              component: () =>
                import(/* webpackChunkName: "p__404" */ '../404.tsx'),
            })
          : require('../404.tsx').default,
        _title: 'myapp',
        _title_default: 'myapp',
      },
      {
        path: '/About',
        exact: true,
        component: __IS_BROWSER
          ? _dvaDynamic({
              component: () =>
                import(/* webpackChunkName: "p__About" */ '../About.js'),
            })
          : require('../About.js').default,
        _title: 'myapp',
        _title_default: 'myapp',
      },
      {
        path: '/Account',
        exact: true,
        component: __IS_BROWSER
          ? _dvaDynamic({
              component: () =>
                import(/* webpackChunkName: "p__Account__index" */ '../Account/index.tsx'),
            })
          : require('../Account/index.tsx').default,
        _title: 'myapp',
        _title_default: 'myapp',
      },
      {
        path: '/Index',
        exact: true,
        component: __IS_BROWSER
          ? _dvaDynamic({
              component: () =>
                import(/* webpackChunkName: "p__Index__index" */ '../Index/index.tsx'),
            })
          : require('../Index/index.tsx').default,
        _title: 'myapp',
        _title_default: 'myapp',
      },
      {
        path: '/',
        exact: true,
        component: __IS_BROWSER
          ? _dvaDynamic({
              component: () =>
                import(/* webpackChunkName: "p__index" */ '../index.tsx'),
            })
          : require('../index.tsx').default,
        _title: 'myapp',
        _title_default: 'myapp',
      },
      {
        component: () =>
          React.createElement(
            require('D:/GitHub/toutiao/node_modules/umi-build-dev/lib/plugins/404/NotFound.js')
              .default,
            { pagesPath: 'src/pages', hasRoutesInConfig: false },
          ),
        _title: 'myapp',
        _title_default: 'myapp',
      },
    ],
    _title: 'myapp',
    _title_default: 'myapp',
  },
  {
    component: () =>
      React.createElement(
        require('D:/GitHub/toutiao/node_modules/umi-build-dev/lib/plugins/404/NotFound.js')
          .default,
        { pagesPath: 'src/pages', hasRoutesInConfig: false },
      ),
    _title: 'myapp',
    _title_default: 'myapp',
  },
];
window.g_routes = routes;
const plugins = require('umi/_runtimePlugin');
plugins.applyForEach('patchRoutes', { initialValue: routes });

export { routes };

export default class RouterWrapper extends React.Component {
  unListen = () => {};

  constructor(props) {
    super(props);

    // route change handler
    function routeChangeHandler(location, action) {
      plugins.applyForEach('onRouteChange', {
        initialValue: {
          routes,
          location,
          action,
        },
      });
    }
    this.unListen = history.listen(routeChangeHandler);
    routeChangeHandler(history.location);
  }

  componentWillUnmount() {
    this.unListen();
  }

  render() {
    const props = this.props || {};
    return <Router history={history}>{renderRoutes(routes, props)}</Router>;
  }
}
