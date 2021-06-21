import listsInstance from "../../axios/listsInstance";
import boardsInstance from "../../axios/boardsInstance";
import { Dispatch } from "redux";
import { ActionTypes } from "../action-types";
import { Action } from "../actions/listsActions";

import { filterResponse } from "../../utils/filterResponse";

export const getAllLists = (boardId: string) => {
      return async (dispatch: Dispatch<Action>) => {
            dispatch({
                  type: ActionTypes.GET_ALL_LISTS,
            });

            try {
                  const { data } = await boardsInstance(
                        `/boards/${boardId}/lists`,
                  );
                  dispatch({
                        type: ActionTypes.GET_ALL_LISTS_SUCCESS,
                        payload: data,
                  });
            } catch (err) {
                  dispatch({
                        type: ActionTypes.GET_ALL_LISTS_ERROR,
                        payload: err.message,
                  });
            }
      };
};
