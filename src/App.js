import { Switch, Route } from "react-router-dom";
import WholePage from "./layouts/WholePage/WholePage";
import ThreeColumn from "./layouts/ThreeColumn/ThreeColumn";

import "./App.css";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getTweets } from "./store/actions/tweetActions";
import { axiosWithAuth } from "./api/axiosWithAuth";
import { Redirect } from "react-router-dom";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    axiosWithAuth()
      .get("tweets?orderBy=id&order=desc")
      .then((res) => {
        dispatch(getTweets(res.data));
      })
      .catch((err) => console.error(err.message));
  }, []);
  return (
    <Switch>
      <Route exact path="/login">
        <WholePage />
      </Route>
      <Route exact path="/">
        <Redirect to="/feed" />
      </Route>
      <Route exact path="/feed">
        <ThreeColumn />
      </Route>
    </Switch>
  );
}

export default App;
