// import React from 'react';
// import { Router, Route, Switch } from 'dva/router';
// import Routes from './config';
// import IndexPage from '../routes/IndexPage';
// import WeeklyList from '../routes/weeklyList/view';
// import LayOut from '../routes/layOut/view';

// function RouterConfig({ history }) {
//   return (
//     <Router history={history}>
//       <Switch>
//         <Route path="/" exact component={LayOut} />
//       </Switch>
//     </Router>
//   );
// }

// export default RouterConfig;


import React from 'react';
import { Router, Switch } from 'dva/router';
import { convertRoutes, } from 'dva-router-config';
// import RenderAuthorized from 'ant-design-pro/lib/Authorized';
import routesConfig from './config';
// import {getAuthority} from '../utils/authority'


function RouterConfig({ app, history }) {
  return (
    <Router history={history}>
      <Switch>
        {/* <Route path='/login' exact component={Login} /> */}
        {convertRoutes(routesConfig, { app })}
      </Switch>
    </Router>
  );
}

export default RouterConfig;