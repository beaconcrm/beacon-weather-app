import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, Switch } from 'react-router-dom';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import moment from 'moment';
import MomentUtils from '@date-io/moment';
import { hot } from 'react-hot-loader/root';
import { CssBaseline } from '@material-ui/core';

import Theme from './Theme';
import store from './store';
import browserHistory from './history';
import Dashboard from './views/Dashboard';


const App = () => (
  <div>

    <CssBaseline />

    <Provider store={store}>
      <Theme>
        <MuiPickersUtilsProvider utils={MomentUtils}>

          <Router history={browserHistory}>
            <div>

              <Switch>

                <Route path="/" component={Dashboard} />

              </Switch>

            </div>
          </Router>

        </MuiPickersUtilsProvider>
      </Theme>
    </Provider>
  </div>
);

export default hot(App);
