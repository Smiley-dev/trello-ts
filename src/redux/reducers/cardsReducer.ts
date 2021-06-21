import { ActionTypes } from "../action-types";
import { Action } from "../actions/cardsActions";

interface CardsState {
      loading: boolean;
      error: string | null;
      cards: object[];
}

const initialState: CardsState = {
      loading: false,
      error: null,
      cards: [],
};

const reducer = (state: CardsState = initialState, action: Action) => {
      switch (action.type) {
            case ActionTypes.GET_ALL_CARDS:
                  return {
                        loading: true,
                        error: null,
                        cards: state.cards,
                  };
            case ActionTypes.GET_ALL_CARDS_SUCCESS:
                  return {
                        loading: false,
                        error: null,
                        cards: [...state.cards, action.payload],
                  };
            case ActionTypes.GET_ALL_CARDS_ERROR:
                  return {
                        loading: false,
                        error: action.payload,
                        cards: state.cards,
                  };
            default:
                  return state;
      }
};

export default reducer;
