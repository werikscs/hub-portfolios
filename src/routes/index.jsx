import { useState } from "react";
import { Switch, Route } from "react-router-dom";
import Login from "../pages/Login";

const Routes = () => {

  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (

    <Switch>

      <Route exact path='/'>
        <Login/>
      </Route>

      <Route path='/register'>
        {/* register */}
      </Route>

      <Route path='/dashboard'>
        {/* dashboard */}
      </Route>

    </Switch>

  );

}

export default Routes;