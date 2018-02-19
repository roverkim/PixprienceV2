/////////////////////////////////////////////// /* Imports */ //////////////////////////////////////////////////////////
import React, { Component, Fragment} from 'react';
import ReactDom from 'react-dom';
import { Route, NavLink, Redirect, withRouter, Link, Switch, BrowserRouter as Router} from "react-router-dom";
import injectTapEventPlugin from 'react-tap-event-plugin';
import createBrowserHistory from 'history/createBrowserHistory';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

//////////////////////////////////////////////// /* Components */ //////////////////////////////////////////////////////////
import Auth from './modules/Auth';
import AboutPage from './pages/About';
import AuthenticationPage from './pages/AuthenticationPage';
import CommunityPage from './pages/CommunityPage';
import TimelinePage from './pages/Timeline';
import Logout from './pages/Logout';
import MapPage from './pages/MapPage'


/////////////////////////////////////////////// /* CSS */ //////////////////////////////////////////////////////////
// import './App.css';
import "./index.css";

/////////////////////////////////////////////// /* Main */ //////////////////////////////////////////////////////////

injectTapEventPlugin(); // remove tap delay, essential for MaterialUI to work properly
const history = createBrowserHistory();

class App extends Component {

    render() {
        return (
            <MuiThemeProvider muiTheme={getMuiTheme()}>
                <Router history={history}>
                    <switch>
                      <Route exact path="/" component={(location, callback)=> {
                        if (Auth.isUserAuthenticated()) {
                          // callback(null, DashboardPage);
                          return (<TimelinePage/>);
                        } else {
                          // callback(null, HomePage);
                          return (<AuthenticationPage active="render"/>);
                          }
                        }}
                      />
                      {/* <Route exact path="/authenticationpage" component={AuthenticationPage}/> */}
                      <Route path="/about" component={AboutPage}/>
                      <Route path="/community" component={CommunityPage}/>
                      {/* <Route path="/timeline" component={Timeline}/> */}
                      <Route exact path="/timeline" component={(location, callback)=> {
                        if (Auth.isUserAuthenticated()) {
                          // callback(null, DashboardPage);
                          return (<TimelinePage/>);
                        } else {
                          // callback(null, HomePage);
                          return (<AuthenticationPage/>);
                          }
                        }}
                      />
                      <Route exact path="/mappage" component={(location, callback)=> {
                        if (Auth.isUserAuthenticated()) {
                          // callback(null, DashboardPage);
                          return (<MapPage/>);
                        } else {
                          // callback(null, HomePage);
                          return (<AuthenticationPage/>);
                          }
                        }}
                      />
                      <Route path="/logout" component={Logout}/> {/*Change the current URL to */}
                    </switch>
                </Router>
            </MuiThemeProvider>
        );
    }
}

export default App;
