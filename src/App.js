import { Switch, Route } from "react-router-dom";
import WholePage from "./layouts/WholePage/WholePage";
import ThreeColumn from "./layouts/ThreeColumn/ThreeColumn";

import "./App.css";
import { useEffect } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { getTweets } from "./store/actions/tweetActions";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    axios
      .get("https://6540a96145bedb25bfc247b4.mockapi.io/api/tweets")
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
      <Route path="/">
        <ThreeColumn />
      </Route>
    </Switch>
  );
}

export default App;
