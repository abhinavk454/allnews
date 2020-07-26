import React from 'react';
import {BrowserRouter as Router,Route,Switch,Link,Redirect} from 'react-router-dom';
import Entertainment from '../pages/Entertainment';
import Home from '../pages/Home';
import Politics from '../pages/Politics';
import Sports from '../pages/Sports';
import Search from '../pages/Search';
import Technology from '../pages/Technology';
import '../styles/Nav.css';

function Nav() {
    return (
        <Router>
            <div className="inner-nav">
                <div className="links">
                    <Link to='/home'>Home</Link>
                </div>
                <div className="links">
                    <Link to="/top-headlines">Headlines</Link>
                </div>
                <div className="links">
                    <Link to="/sports">Sports</Link>
                </div>
                <div className="links">
                    <Link to="/entertainment">Entertainment</Link>
                </div>
                <div className="links">
                    <Link to='/politics'>Politics</Link>
                </div>
                <div className="links">
                    <Link to='/tech'>Tech</Link>
                </div>

            </div>
            <Switch>
                <Route
                    path="/"
                    render={() => <Redirect to="/home" />}
                    exact={true}
                />
                <Route path='/home' component={Search}/>
                <Route path='/top-headlines' component={Home}/>
                {/* <Route path='/home' component={Home}/> */}
                <Route path='/sports' component={Sports}/>
                <Route path='/entertainment' component={Entertainment}/>
                <Route path='/politics' component={Politics}/>
                <Route path='/tech' component={Technology}/>
            </Switch>
        </Router>
    )
}

export default Nav
