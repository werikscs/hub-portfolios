import { useState } from "react";
import { Route } from "react-router-dom";
import { Switch } from "react-router-dom";

const Routes = () => {

  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (

    <Switch>

      <Route path='/'>
        {/* login */}
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