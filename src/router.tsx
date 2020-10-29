import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

// import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Dashboard from './pages/Dashboard';

const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        {/* <Route path="/" exact component={SignIn} /> */}
        <Route path="/" exact component={Dashboard} />
        <Route path="/signup" component={SignUp} />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
