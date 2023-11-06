import { Route, Switch } from "react-router-dom";
import Login from "../../pages/Login";

import "./wholepage.css";

const WholePage = () => {
  return (
    <div className="wholepage-container">
      <Switch>
        <Route exact path="/login">
          <Login />
        </Route>
      </Switch>
    </div>
  );
};

export default WholePage;
