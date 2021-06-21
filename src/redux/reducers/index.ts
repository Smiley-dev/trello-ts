import { combineReducers } from "redux";
import boardsReducer from "./boardsReducer";
import listsReducer from "./listsReducer";

const reducers = combineReducers({
      boards: boardsReducer,
      lists: listsReducer,
});

export default reducers;

export type RootState = ReturnType<typeof reducers>;
