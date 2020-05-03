import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Nav from '../Nav/Nav';
import Home from '../Home/Home';
import Auth from '../Auth/Auth';
import './App.scss';
import { AuthProvider } from '../../context/auth.context'


const App = () => {

	return (
        <Router>
            <div className="app">
                <AuthProvider>
                    <Nav />
                    <div className="container">
                        <Switch>
                            <Route exact path="/" component={Home}/>	
                            <Route path="/register" render={() => <Auth path="/signup"/>}/>
                            <Route path="/login" render={() => <Auth path="/login"/>}/>
                        </Switch>
                    </div>
                </AuthProvider>
            </div>
        </Router>
	);
}

export default App;