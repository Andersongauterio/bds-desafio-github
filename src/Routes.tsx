import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from 'pages/Home';
import Navbar from 'components/Navbar';
import Before from 'pages/Before';
import After from 'pages/After';

const Routes = () => (
  <BrowserRouter>
    <Navbar />
    <Switch>
      <Route path="/" exact>
        <Home />
      </Route>
      <Route path="/before" exact>
        <Before />
      </Route>
      <Route path="/after" exact>
        <After />
      </Route>
    </Switch>
  </BrowserRouter>
);

export default Routes;
