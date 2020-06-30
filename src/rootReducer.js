import { combineReducers } from "redux";
import appReducer from "./components/App/reducer";
import ideaInfoOverlayReducer from "./components/IdeaInfoOverlay/reducer";
import joinIdeaOverlayReducer from "./components/JoinIdeaOverlay/reducer";
import addNewIdeaReducer from "./components/AddNewIdea/reducer";

export default combineReducers({
  appReducer,
  ideaInfoOverlayReducer,
  joinIdeaOverlayReducer,
  addNewIdeaReducer
});
