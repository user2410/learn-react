import { combineReducers } from "redux";

import counter from "./counter";
import favHandler from "./favHandler";

const allReducers = combineReducers({
  counter,
  favHandler
});

export default allReducers;