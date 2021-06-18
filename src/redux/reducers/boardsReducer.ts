import { ActionTypes } from "../action-types";
import { Action } from "../actions/boardsActions";

interface BoardsState {
      loading: boolean;
      error: string | null;
      boards: object[];
}

const initialState: BoardsState = {
      loading: false,
      error: null,
      boards: [],
};

const reducer = (state: BoardsState = initialState, action: Action) => {
      switch (action.type) {
            case ActionTypes.GET_ALL_BOARDS:
                  return { loading: true, error: null, boards: [] };
            case ActionTypes.GET_ALL_BOARDS_SUCCESS:
                  return {
                        loading: false,
                        error: null,
                        boards: action.payload,
                  };
            case ActionTypes.GET_ALL_BOARDS_ERROR:
                  return { loading: false, error: action.payload, boards: [] };
            case ActionTypes.CREATE_BOARD:
                  return { loading: false, error: null, boards: state.boards };
            case ActionTypes.CREATE_BOARD_SUCCESS:
                  return {
                        loading: false,
                        error: null,
                        boards: [...state.boards, action.payload],
                  };
            case ActionTypes.CREATE_BOARD_ERROR:
                  return {
                        loading: false,
                        error: action.payload,
                        boards: state.boards,
                  };
            default:
                  return state;
      }
};

export default reducer;
