import React, { Fragment } from 'react';
import createBrowserHistory from 'history/createBrowserHistory';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { Route, Switch, Router } from 'react-router-dom';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import HomePage from './components/HomePage/HomePage';
import CommunityPage from './components/CommunityPage';
import AboutPage from './components/AboutPage';
import TimelinePage from './components/TimelinePage';
import MapPage from './components/MapPage';
import Logout from './components/LogoutPage';
import Auth from './Auth';

export default function App() {
  injectTapEventPlugin();
  const history = createBrowserHistory();
  return (
    <Fragment>
      <MuiThemeProvider muiTheme={getMuiTheme()}>
        <Router history={history}>
          <Switch>
            <Route
              exact
              path="/"
              component={() => {
                if (Auth.isUserAuthenticated()) {
                  return (<TimelinePage />);
                } else {
                  return (<HomePage active="render"/>);
                }
              }}
            />
            <Route path="/community" component={CommunityPage} />
            <Route path="/about" component={AboutPage} />
            <Route exact path="/timeline" component={() => {
                if (Auth.isUserAuthenticated()) {
                  return (<TimelinePage />);
                } else {
                  return (<HomePage />);
                }
              }}
            />
            
            <Route exact path="/mappage" component={() => {
                if (Auth.isUserAuthenticated()) {
                  return (<MapPage />);
                } else {
                  return (<HomePage />);
                }
              }}
            />
            <Route path="/logout" component={Logout}/>
          </Switch>
        </Router>
      </MuiThemeProvider>
    </Fragment>
  );
}
