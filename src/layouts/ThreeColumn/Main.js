import { Route, Switch } from "react-router-dom";
import Feed from "../../pages/Feed";

const Main = () => {
  return (
    <div className="main-container">
      <Switch>
        <Route exact path="/feed">
          <Feed />
        </Route>
      </Switch>
    </div>
  );
};

export default Main;
