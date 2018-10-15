import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './routes/Home';
import FreeTrial from './routes/FreeTrial';
import Confirmation from './routes/Confirmation';
import Match from './routes/Match';
import NoMatch from './routes/NoMatch';
import SecondaryForm from './routes/SecondaryForm';
import NotFound from './routes/NotFound';

class Main extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/free-trial" exact component={FreeTrial} />
          <Route path="/confirmation" exact component={Confirmation} />
          <Route path="/match" exact component={Match} />
          <Route path="/no-match" exact component={NoMatch} />
          <Route path="/secondary-form" exact component={SecondaryForm} />
          <Route component={NotFound} />
        </Switch>
      </div>
    );
  }
}

export default Main;
