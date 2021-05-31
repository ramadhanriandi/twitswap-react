import { combineReducers } from "@reduxjs/toolkit";

import streamingReducer from "./streaming";

const rootReducer = combineReducers({
  streaming: streamingReducer,
});

export default rootReducer;
