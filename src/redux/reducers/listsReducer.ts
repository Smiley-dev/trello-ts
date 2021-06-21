import { ActionTypes } from "../action-types";
import { Action } from "../actions/listsActions";

interface ListsState {
      loading: boolean;
      error: string | null;
      lists: object[];
}

const initialState: ListsState = {
      loading: false,
      error: null,
      lists: [],
};

const reducer = (state: ListsState = initialState, action: Action) => {
      switch (action.type) {
            case ActionTypes.GET_ALL_LISTS:
                  return {
                        loading: true,
                        error: null,
                        lists: state.lists,
                  };
            case ActionTypes.GET_ALL_LISTS_SUCCESS:
                  return {
                        loading: false,
                        error: null,
                        lists: action.payload,
                  };
            case ActionTypes.GET_ALL_LISTS_ERROR:
                  return {
                        loading: false,
                        error: action.payload,
                        lists: state.lists,
                  };
            default:
                  return state;
      }
};

export default reducer;
