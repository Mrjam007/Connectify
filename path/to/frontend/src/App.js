import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Dashboard from './pages/Dashboard';
import ProfileSettings from './components/ProfileSettings';
import HomeButton from './components/HomeButton';
import logo from '../LOGO/Connectify LOGO.png';
import { Link } from 'react-router-dom';
import Navbar from './components/Navbar';
import { NavLink } from 'react-router-dom';

function App() {
    return (
        <Router>
            <div className="app-header">
                <HomeButton />
                <img src={logo} alt="Connectify Logo" className="app-logo" />
                <nav className="navigation">
                    <NavLink exact to="/" activeClassName="active">Login</NavLink>
                    <NavLink to="/signup" activeClassName="active">Sign Up</NavLink>
                </nav>
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