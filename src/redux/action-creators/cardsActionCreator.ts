import cardsInstance from "../../axios/cardsInstance";
import listsInstance from "../../axios/listsInstance";
import { Dispatch } from "redux";
import { ActionTypes } from "../action-types";
import { Action } from "../actions/cardsActions";

import { filterResponse } from "../../utils/filterResponse";

export const getAllCards = (listId: string) => {
      return async (dispatch: Dispatch<Action>) => {
            dispatch({
                  type: ActionTypes.GET_ALL_CARDS,
            });

            try {
                  const { data } = await listsInstance.get(`/${listId}/cards`);

                  dispatch({
                        type: ActionTypes.GET_ALL_CARDS_SUCCESS,
                        payload: data,
                  });
            } catch (err) {
                  dispatch({
                        type: ActionTypes.GET_ALL_CARDS_ERROR,
                        payload: err.message,
                  });
            }
      };
};
