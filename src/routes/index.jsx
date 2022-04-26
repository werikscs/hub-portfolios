import { useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import Login from "../pages/Login";
import Register from "../pages/Register";

const Routes = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const token = JSON.parse(localStorage.getItem("@KenzieHub:token"));

    if (token) return setIsAuthenticated(true);
  }, [isAuthenticated]);

  return (
    <Switch>
      <Route exact path="/">
        <Login
          isAuthenticated={isAuthenticated}
          setIsAuthenticated={setIsAuthenticated}
        />
      </Route>

      <Route path="/register">
        <Register isAuthenticated={isAuthenticated} />
      </Route>

      <Route path="/dashboard">
        <Dashboard
          isAuthenticated={isAuthenticated}
          setIsAuthenticated={setIsAuthenticated}
        />
      </Route>
    </Switch>
  );
};

export default Routes;
