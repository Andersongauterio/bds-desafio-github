import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from 'pages/Home';
import Navbar from 'components/Navbar';
import GitUserInfo from 'pages/GitUserInfo';

const Routes = () => (
  <BrowserRouter>
    <Navbar />
    <Switch>
      <Route path="/" exact>
        <Home />
      </Route>
      <Route path="/gituser" exact>
        <GitUserInfo />
      </Route>
    </Switch>
  </BrowserRouter>
);

export default Routes;
