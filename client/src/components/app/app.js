import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './app.scss';
import Nav from '../nav/nav';
import Home from '../home/home.page';
import Footer from '../footer/footer';
import Auth from '../auth/auth';
import Stock from '../stock/stock.page';
import Error from '../error/error';
import { AuthProvider } from '../../context/auth.context'


const App = () => {

	return (
        <Router>
            <div className="app">
                <AuthProvider>
                    <Nav />
                    <div className="container">
                        <Switch>
                            <Route exact path="/" component={Home} />
                            <Route exact path="/stock/:symbol" component={Stock} />
                            <Route exact path="/register" render={() => <Auth path="/register"/>} />
                            <Route exact path="/login" render={() => <Auth path="/login"/>} />
                            <Route component={() => <Error error={ {message: "404 - Page is not found"} } classes="page404"/> } />
                        </Switch>
                    </div>
                </AuthProvider>
                <Footer />
            </div>
        </Router>
	);
}

export default App;