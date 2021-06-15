import { combineReducers } from "redux";
import boardsReducer from "./boardsReducer";

const reducers = combineReducers({
      boards: boardsReducer,
});

export default reducers;

export type RootState = ReturnType<typeof reducers>;
