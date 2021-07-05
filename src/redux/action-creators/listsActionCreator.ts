import listsInstance from "../../axios/listsInstance";
import boardsInstance from "../../axios/boardsInstance";
import cardsInstance from "../../axios/cardsInstance";
import { Dispatch } from "redux";
import { ActionTypes } from "../action-types";
import { Action } from "../actions/listsActions";

export const getAllLists = (boardId: string) => {
      return async (dispatch: Dispatch<Action>) => {
            dispatch({
                  type: ActionTypes.GET_ALL_LISTS,
            });

            try {
                  const { data } = await boardsInstance(
                        `/boards/${boardId}/lists`,
                  );

                  const lists = await Promise.all(
                        data.map(async (list: any) => {
                              try {
                                    const { data } = await listsInstance.get(
                                          `/${list.id}/cards`,
                                    );
                                    return { ...list, cards: data };
                              } catch (err) {
                                    dispatch({
                                          type: ActionTypes.GET_ALL_LISTS_ERROR,
                                          payload: err.message,
                                    });
                              }
                        }),
                  );

                  dispatch({
                        type: ActionTypes.GET_ALL_LISTS_SUCCESS,
                        payload: lists,
                  });
            } catch (err) {
                  dispatch({
                        type: ActionTypes.GET_ALL_LISTS_ERROR,
                        payload: err.message,
                  });
            }
      };
};

export const addList = (title: string, idBoard: string) => {
      return async (dispatch: Dispatch<Action>) => {
            dispatch({
                  type: ActionTypes.ADD_LIST,
            });

            try {
                  const { data } = await listsInstance.post("/", null, {
                        params: {
                              name: title,
                              idBoard: idBoard,
                        },
                  });

                  dispatch({
                        type: ActionTypes.ADD_LIST_SUCCESS,
                        payload: data,
                  });
            } catch (err) {
                  dispatch({
                        type: ActionTypes.ADD_LIST_ERROR,
                        payload: err.message,
                  });
            }
      };
};

export const addCard = (title: string, idList: string) => {
      return async (dispatch: Dispatch<Action>) => {
            dispatch({
                  type: ActionTypes.ADD_CARD,
            });
            try {
                  const { data } = await cardsInstance.post("/", null, {
                        params: {
                              name: title,
                              idList: idList,
                        },
                  });

                  dispatch({
                        type: ActionTypes.ADD_CARD_SUCCESS,
                        payload: data,
                  });
            } catch (error) {
                  dispatch({
                        type: ActionTypes.ADD_CARD_ERROR,
                        payload: error.message,
                  });
            }
      };
};
