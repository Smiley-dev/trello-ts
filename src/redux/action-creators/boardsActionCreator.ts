import boardsInstance from "../../axios/boardsInstance";
import { Dispatch } from "redux";
import { ActionTypes } from "../action-types";
import { Action } from "../actions/boardsActions";

export const getAllBoards = () => {
      console.log("akcija");
      return async (dispatch: Dispatch<Action>) => {
            dispatch({
                  type: ActionTypes.GET_ALL_BOARDS,
            });
            console.log("akcija");
            try {
                  const { data } = await boardsInstance.get(
                        "/members/me/boards",
                  );

                  dispatch({
                        type: ActionTypes.GET_ALL_BOARDS_SUCCESS,
                        payload: data,
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
