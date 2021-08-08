import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "../../Home";

const RouterComp = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
};
export default RouterComp;
