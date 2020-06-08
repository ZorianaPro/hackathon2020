import { combineReducers } from "redux";
import appReducer from "./components/App/reducer";
import ideaInfoOverlayReducer from "./components/IdeaInfoOverlay/reducer";

export default combineReducers({
  appReducer,
  ideaInfoOverlayReducer
});
