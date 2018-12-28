import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

import Header from './containers/Header/Header';
import Game from './containers/Game/Game';
import Victory from './components/Victory/Victory';

const MainPage = () => (
  <React.Fragment>
    <Header />
    <Game />
  </React.Fragment>
);

const App = () => (
  <Router>
    <React.Fragment>
      <Link to="/" />
      <Link to="/victory" />
      <Switch>
        <Route exact path="/" component={MainPage} />
        <Route path="/victory" component={Victory} />
      </Switch>
    </React.Fragment>
  </Router>
);

export default App;
