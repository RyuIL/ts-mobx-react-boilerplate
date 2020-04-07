import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';
import Login from './pages/SignIn';
import PrivateRoute from './components/PrivateRouter';
import Counter from '~pages/Counter';
import PrivatePage from '~pages/PrivatePage';
import { inject, observer } from 'mobx-react';
import autobind from 'autobind-decorator';
import { PAGE_PATHS, STORES } from '~constants';

@inject(STORES.AUTH_STORE)
@observer
@autobind
export default class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path={PAGE_PATHS.SIGNIN} component={Login} />
          <Route path={PAGE_PATHS.COUNTER} component={Counter} />
          <PrivateRoute path={PAGE_PATHS.PRIVATE} component={PrivatePage} redirectTo={PAGE_PATHS.SIGNIN} />
          <Redirect from="/" to={PAGE_PATHS.SIGNIN} />
        </Switch>
      </Router>
    );
  }
}
