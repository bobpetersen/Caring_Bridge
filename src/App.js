import React from 'react';
import {
  HashRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';

import Header from './components/Header/Header';
import LoginPage from './components/LoginPage/LoginPage';
import RegisterPage from './components/RegisterPage/RegisterPage';
import DevelopmentProfile from './components/DevelopmentPage/DevelopmentProfile';
import DevelopmentSite from './components/DevelopmentPage/DevelopmentSite';
import DashboardView from './components/DashboardPage/DashboardView';
import AdminView from './components/AdminPage/AdminView';
import ProfileView from './components/ProfilePage/ProfileView';
import SiteView from './components/SitePage/SiteView';

import './styles/main.css';
import ApprovalView from './components/ApprovalPage/ApprovalView';

const App = () => (
  <div>
    <Router>
      <Switch>
        <Redirect exact from="/" to="/home" />
        <Route
          path="/admin"
          component={AdminView}
        />
        <Route
          path="/approval"
          component={ApprovalView}
        />
        <Route
          path="/dash"
          component={DashboardView}
        />
        <Route
          path="/home"
          component={LoginPage}
        />
        <Route
          path="/profile"
          component={ProfileView}
        />
        <Route
          path="/profileform"
          component={DevelopmentProfile}
        />
        <Route
          path="/register"
          component={RegisterPage}
        />
        <Route
          path="/site"
          component={SiteView}
        />
        <Route
          path="/siteform"
          component={DevelopmentSite}
        />
        {/* OTHERWISE no path */}
        <Route
          render={() => <h1>404</h1>}
        />
      </Switch>
    </Router>
  </div>
);

export default App;
