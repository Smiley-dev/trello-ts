import { combineReducers } from "redux";
import boardsReducer from "./boardsReducer";
import listsReducer from "./listsReducer";
import cardsReducer from "./cardsReducer";

const reducers = combineReducers({
      boards: boardsReducer,
      lists: listsReducer,
      cards: cardsReducer,
});

export default reducers;

export type RootState = ReturnType<typeof reducers>;
