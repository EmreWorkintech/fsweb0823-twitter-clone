import { Switch, Route } from "react-router-dom";
import WholePage from "./layouts/WholePage/WholePage";
import ThreeColumn from "./layouts/ThreeColumn/ThreeColumn";

import "./App.css";

function App() {
  return (
    <Switch>
      <Route exact path="/login">
        <WholePage />
      </Route>
      <Route path="/">
        <ThreeColumn />
      </Route>
    </Switch>
  );
}

export default App;
