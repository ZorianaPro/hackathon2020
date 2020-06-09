import { combineReducers } from "redux";
import appReducer from "./components/App/reducer";
import ideaInfoOverlayReducer from "./components/IdeaInfoOverlay/reducer";
import joinIdeaOverlayReducer from "./components/JoinIdeaOverlay/reducer";

export default combineReducers({
  appReducer,
  ideaInfoOverlayReducer,
  joinIdeaOverlayReducer
});
