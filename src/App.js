import React from 'react';
// import {BrowserRouter as Router,Route,Switch,Link} from 'react-router-dom';
import Nav from './components/Nav';
import './styles/App.css';

function App() {
  return (
    <div>
      <header id="he">
        All News : A site where you can read and search top 20 news.
      </header>
      <Nav />
      <footer id="ft">
        Thanks for visiting :)
      </footer>
    </div>
  );
}

export default App;
