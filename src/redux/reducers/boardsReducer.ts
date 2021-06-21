import { ActionTypes } from "../action-types";
import { Action } from "../actions/boardsActions";

interface BoardsState {
      loading: boolean;
      error: string | null;
      activeBoard: string | null;
      boards: object[];
}

const initialState: BoardsState = {
      loading: false,
      error: null,
      activeBoard: null,
      boards: [],
};

const reducer = (state: BoardsState = initialState, action: Action) => {
      switch (action.type) {
            case ActionTypes.GET_ALL_BOARDS:
                  return {
                        loading: true,
                        error: null,
                        activeBoard: null,
                        boards: [],
                  };
            case ActionTypes.GET_ALL_BOARDS_SUCCESS:
                  return {
                        loading: false,
                        error: null,
                        activeBoard: null,
                        boards: action.payload,
                  };
            case ActionTypes.GET_ALL_BOARDS_ERROR:
                  return {
                        loading: false,
                        error: action.payload,
                        activeBoard: null,
                        boards: [],
                  };
            case ActionTypes.CREATE_BOARD:
                  return {
                        loading: true,
                        error: null,
                        activeBoard: null,
                        boards: state.boards,
                  };
            case ActionTypes.CREATE_BOARD_SUCCESS:
                  return {
                        loading: false,
                        error: null,
                        activeBoard: null,
                        boards: [...state.boards, action.payload],
                  };
            case ActionTypes.CREATE_BOARD_ERROR:
                  return {
                        loading: false,
                        error: action.payload,
                        activeBoard: null,
                        boards: state.boards,
                  };
            case ActionTypes.DELETE_BOARD:
                  return {
                        loading: true,
                        error: null,
                        activeBoard: state.activeBoard,
                        boards: state.boards,
                  };
            case ActionTypes.DELETE_BOARD_SUCCESS:
                  console.log(action.payload);
                  const newState = state.boards.filter((board: any) => {
                        return board.id !== action.payload;
                  });
                  return {
                        loading: false,
                        error: null,
                        activeBoard: null,
                        boards: newState,
                  };
            case ActionTypes.DELETE_BOARD_ERROR:
                  console.log(action.payload);
                  return {
                        loading: false,
                        error: action.payload,
                        activeBoard: state.activeBoard,
                        boards: state.boards,
                  };

            case ActionTypes.SET_ACTIVE_BOARD:
                  return {
                        loading: false,
                        error: null,
                        activeBoard: action.payload,
                        boards: state.boards,
                  };
            default:
                  return state;
      }
};

export default reducer;
