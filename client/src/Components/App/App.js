import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Nav from '../Nav/Nav';
import Home from '../Home/Home';
import Auth from '../Auth/Auth';
import './App.scss';


const App = () => {
	return (
        <Router>
            <div className="app">
                <Nav />
                <div className="container">
                    <Switch>
                        <Route exact path="/" component={Home}/>	
                        <Route path="/signup" render={() => <Auth path="/signup"/>}/>
                        <Route path="/login" render={() => <Auth path="/login"/>}/>
                    </Switch>
                </div>
            </div>
        </Router>
	);
}

export default App;