import { applyMiddleware, legacy_createStore as createStore } from "redux";
import { reducers } from "./reducers";
import logger from "redux-logger";
import { composeWithDevTools } from "@redux-devtools/extension";
import thunk from "redux-thunk";
import { customMiddleware } from "./middlewares/customMiddleware";

const middlewares = applyMiddleware(thunk, customMiddleware, logger);

export const myStore = createStore(reducers, composeWithDevTools(middlewares));
