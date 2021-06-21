import boardsInstance from "../../axios/boardsInstance";
import { Dispatch } from "redux";
import { ActionTypes } from "../action-types";
import { Action } from "../actions/boardsActions";

import { filterResponse } from "../../utils/filterResponse";

export const getAllBoards = () => {
      return async (dispatch: Dispatch<Action>) => {
            dispatch({
                  type: ActionTypes.GET_ALL_BOARDS,
            });

            try {
                  const { data } = await boardsInstance.get(
                        "/members/me/boards",
                  );

                  const filterValues = ["id", "name", "shortUrl"];

                  const filteredData = filterResponse(data, filterValues);

                  dispatch({
                        type: ActionTypes.GET_ALL_BOARDS_SUCCESS,
                        payload: filteredData,
                  });
            } catch (err) {
                  console.log(err);
                  dispatch({
                        type: ActionTypes.GET_ALL_BOARDS_ERROR,
                        payload: err.message,
                  });
            }
      };
};

export const createBoard = (name: string) => {
      return async (dispatch: Dispatch<Action>) => {
            dispatch({
                  type: ActionTypes.CREATE_BOARD,
            });

            try {
                  const { data } = await boardsInstance.post("/boards", null, {
                        params: {
                              name: name,
                        },
                  });

                  dispatch({
                        type: ActionTypes.CREATE_BOARD_SUCCESS,
                        payload: data,
                  });
            } catch (err) {
                  dispatch({
                        type: ActionTypes.CREATE_BOARD_ERROR,
                        payload: err.message,
                  });
            }
      };
};

export const updateBoard = (boardName: string, boardId: string) => {
      return async (dispatch: Dispatch<Action>) => {
            dispatch({
                  type: ActionTypes.UPDATE_BOARD,
            });

            try {
                  const { data } = await boardsInstance.put(
                        `/boards/${boardId}`,
                        null,
                        {
                              params: {
                                    name: boardName,
                              },
                        },
                  );

                  dispatch({
                        type: ActionTypes.UPDATE_BOARD_SUCCESS,
                        payload: { boardName, boardId },
                  });
            } catch (err) {
                  dispatch({
                        type: ActionTypes.UPDATE_BOARD_ERROR,
                        payload: err.message,
                  });
            }
      };
};

export const deleteBoard = (boardId: string) => {
      return async (dispatch: Dispatch<Action>) => {
            dispatch({
                  type: ActionTypes.DELETE_BOARD,
            });

            try {
                  await boardsInstance.delete(`/boards/${boardId}`);

                  dispatch({
                        type: ActionTypes.DELETE_BOARD_SUCCESS,
                        payload: boardId,
                  });
            } catch (err) {
                  dispatch({
                        type: ActionTypes.DELETE_BOARD_ERROR,
                        payload: err.message,
                  });
            }
      };
};

export const setActiveBoard = (id: string | null) => {
      return (dispatch: Dispatch<Action>) => {
            dispatch({
                  type: ActionTypes.SET_ACTIVE_BOARD,
                  payload: id,
            });
      };
};
