import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Dashboard from './pages/Dashboard';
import ProfileSettings from './components/ProfileSettings';
import HomeButton from './components/HomeButton';
import logo from '../LOGO/Connectify LOGO.png';

function App() {
    return (
        <Router>
            <div className="app-header">
                <HomeButton />
                <img src={logo} alt="Connectify Logo" className="app-logo" />
            </div>
            <Switch>
                <Route exact path="/" component={Login} />
                <Route path="/signup" component={Signup} />
                <Route path="/dashboard" component={Dashboard} />
                <Route path="/profile" component={ProfileSettings} />
                {/* Additional routes */}
            </Switch>
        </Router>
    );
}

export default App; 