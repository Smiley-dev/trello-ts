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
      type: ActionTypes.CREATE_BOARD_SUCCESS;
      payload: object[];
}

interface CreateBoardErrorAction {
      type: ActionTypes.CREATE_BOARD_ERROR;
      payload: string;
}

interface UpdateBoardAction {
      type: ActionTypes.UPDATE_BOARD;
}

interface UpdateBoardSuccessAction {
      type: ActionTypes.UPDATE_BOARD_SUCCESS;
      payload: { boardName: string; boardId: string };
}

interface UpdateBoardErrorAction {
      type: ActionTypes.UPDATE_BOARD_ERROR;
      payload: string;
}

interface DeleteBoardAction {
      type: ActionTypes.DELETE_BOARD;
}

interface DeleteBoardSuccessAction {
      type: ActionTypes.DELETE_BOARD_SUCCESS;
      payload: string;
}

interface DeleteBoardErrorAction {
      type: ActionTypes.DELETE_BOARD_ERROR;
      payload: string;
}

interface SetActiveBoardAction {
      type: ActionTypes.SET_ACTIVE_BOARD;
      payload: string | null;
}

export type Action =
      | GetAllBoardsAction
      | GetAllBoardsSuccessAction
      | GetAllBoardsErrorAction
      | CreateBoardAction
      | CreateBoardSuccessAction
      | CreateBoardErrorAction
      | SetActiveBoardAction
      | DeleteBoardAction
      | DeleteBoardSuccessAction
      | DeleteBoardErrorAction
      | UpdateBoardAction
      | UpdateBoardSuccessAction
      | UpdateBoardErrorAction;
