import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

const Home = lazy(() => import('../Pages/Home'));
const Faith = lazy(() => import('../Pages/Faith'));
const Love = lazy(() => import('../Pages/Love'));
const Write = lazy(() => import('../Pages/Write'));
const Color = lazy(() => import('../Pages/Color'));
const Loading = lazy(() => import('../Pages/Loading'));
const Poster = lazy(() => import('../Pages/Poster'));
const Gallery = lazy(() => import('../Pages/Gallery'));
const NotFound = lazy(() => import('../Pages/NotFound'));

export default function Routes() {
  return (
    <Router>
      <Suspense fallback={<div>Carregando...</div>}>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/faith" exact component={Faith} />
          <Route path="/love" exact component={Love} />
          <Route path="/write" exact component={Write} />
          <Route path="/color" exact component={Color} />
          <Route path="/loading" exact component={Loading} />
          <Route path="/poster" exact component={Poster} />
          <Route path="/gallery" exact component={Gallery} />
          <Route component={NotFound} />
        </Switch>
      </Suspense>
    </Router>
  );
};
