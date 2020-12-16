import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import ProtectedRoute from './protectedRoute'
import Home from '../Pages/Home'
import Faith from '../Pages/Faith'
import Love from '../Pages/Love'
import Write from '../Pages/Write'
import Color from '../Pages/Color'
import Loading from '../Pages/Loading'
import Poster from '../Pages/Poster'
import Gallery from '../Pages/Gallery'
import Card from '../Pages/Card'
import NotFound from '../Pages/NotFound'

export default function Routes() {
  return (
    <Router basename="/2021">
      <Switch>
        <Route path="/" exact component={Home} />
        <ProtectedRoute path="/faith" exact component={Faith} />
        <ProtectedRoute path="/love" exact component={Love} />
        <ProtectedRoute path="/write" exact component={Write} />
        <Route path="/color" exact component={Color} />
        <ProtectedRoute path="/loading" exact component={Loading} />
        <ProtectedRoute path="/poster" exact component={Poster} />
        <Route path="/gallery" exact component={Gallery} />
        <Route path="/card/:id" exact component={Card} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
};
