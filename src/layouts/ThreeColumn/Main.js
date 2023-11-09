import { Route, Switch } from "react-router-dom";
import Feed from "../../pages/Feed";
import ProtectedPage from "../../pages/ProtectedPage";

const Main = () => {
  return (
    <div className="main-container">
      <Switch>
        <Route exact path="/feed">
          <ProtectedPage PageComponent={Feed} fromURL="/feed" />
        </Route>
      </Switch>
    </div>
  );
};

export default Main;
