import React from 'react';
import {BrowserRouter as Router,Route,Switch,Link} from 'react-router-dom';
import Entertainment from '../pages/Entertainment';
import Home from '../pages/Home';
import Politics from '../pages/Politics';
import Sport from '../pages/Sports';

function Nav() {
    return (
        <Router>
            <Link to="/home">To Home</Link>
            <Link to="/sports">To Sports</Link>
            <Link to="/entertainment">To Entertainment</Link>
            <Link to='/politics'>To Politics</Link>
            <Switch>
                <Route exact path='/' component={Home}/>
                <Route path='/home' component={Home}/>
                <Route path='/sports' component={Sport}/>
                <Route path='/entertainment' component={Entertainment}/>
                <Route path='/politics' component={Politics}/>
            </Switch>
        </Router>
    )
}

export default Nav
