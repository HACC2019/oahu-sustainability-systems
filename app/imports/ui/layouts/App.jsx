import React from 'react';
import * as Router from 'react-router-dom';
import Home from '../pages/Home'
import NotFound from '../pages/NotFound'
import About from '../pages/About'

const App = () => (
        <Router.BrowserRouter>
            <Router.Route path='/' component={Home}/>
        </Router.BrowserRouter>



);

export default App;