import React from 'react';
import * as Router from 'react-router-dom';
import Home from '../pages/Home'
import NotFound from '../page'

const App = () => (
    <Router.BrowserRouter>
        <Router.Route path='/' Component={Home}>
            <Router.Route path='About' Component={Dashboard}/>
            <Router.Route path='About' Component={About}/>

        </Router.Route>
        <Router.Route path='*' Component={NotFound}/>


    </Router.BrowserRouter>
);

export default App;
