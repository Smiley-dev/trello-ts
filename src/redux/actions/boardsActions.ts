import { ActionTypes } from "../action-types";

interface GetAllBoardsAction {
      type: ActionTypes.GET_ALL_BOARDS;
}

interface GetAllBoardsSuccessAction {
      type: ActionTypes.GET_ALL_BOARDS_SUCCESS;
      payload: object[];
}

interface GetAllBoardsErrorAction {
      type: ActionTypes.GET_ALL_BOARDS_ERROR;
      payload: string;
}

interface CreateBoardAction {
      type: ActionTypes.CREATE_BOARD;
}

interface CreateBoardSuccessAction {
      type: ActionTypes.CREATE_BOARD;
      payload: object;
}

interface CreateBoardErrorAction {
      type: ActionTypes.CREATE_BOARD;
      payload: string;
}

export type Action =
      | GetAllBoardsAction
      | GetAllBoardsSuccessAction
      | GetAllBoardsErrorAction
      | CreateBoardAction
      | CreateBoardSuccessAction
      | CreateBoardErrorAction;
