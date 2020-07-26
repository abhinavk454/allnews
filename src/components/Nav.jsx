import React from 'react';
import {BrowserRouter as Router,Route,Switch,Link} from 'react-router-dom';
import Entertainment from '../pages/Entertainment';
import Home from '../pages/Home';
import Politics from '../pages/Politics';
import Sports from '../pages/Sports';
import Search from '../pages/Search';
import '../styles/Nav.css';

function Nav() {
    return (
        <Router>
            <div className="inner-nav">
                <Link to='/home'>Home</Link>
                <Link to="/top-headlines">Top Headlines</Link>
                <Link to="/sports">To Sports</Link>
                <Link to="/entertainment">To Entertainment</Link>
                <Link to='/politics'>To Politics</Link>
            </div>
            <Switch>
                <Route exact path='/home' component={Search}/>
                <Route path='/top-headlines' component={Home}/>
                <Route path='/home' component={Home}/>
                <Route path='/sports' component={Sports}/>
                <Route path='/entertainment' component={Entertainment}/>
                <Route path='/politics' component={Politics}/>
            </Switch>
        </Router>
    )
}

export default Nav
