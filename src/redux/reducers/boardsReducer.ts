import { ActionTypes } from "../action-types";
import { Action } from "../actions/boardsActions";

interface BoardsState {
      loading: boolean;
      error: string | null;
      data: object[] | any;
}

const initialState: BoardsState = {
      loading: false,
      error: null,
      data: [],
};

const reducer = (state: BoardsState = initialState, action: Action) => {
      switch (action.type) {
            case ActionTypes.GET_ALL_BOARDS:
                  return { loading: true, error: null, data: [] };
            case ActionTypes.GET_ALL_BOARDS_SUCCESS:
                  return { loading: false, error: null, data: action.payload };
            case ActionTypes.GET_ALL_BOARDS_ERROR:
                  return { loading: false, error: action.payload, data: [] };
            case ActionTypes.CREATE_BOARD:
                  return { loading: false, error: null, data: state.data };
            case ActionTypes.CREATE_BOARD_SUCCESS:
                  return {
                        loading: false,
                        error: null,
                        data: [...state.data, action.payload],
                  };
            case ActionTypes.CREATE_BOARD_ERROR:
                  return {
                        loading: false,
                        error: action.payload,
                        data: state.data,
                  };
            default:
                  return state;
      }
};

export default reducer;
