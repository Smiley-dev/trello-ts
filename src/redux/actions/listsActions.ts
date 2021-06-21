import { ActionTypes } from "../action-types";

interface GetAllListsAction {
      type: ActionTypes.GET_ALL_LISTS;
}

interface GetAllListsSuccessAction {
      type: ActionTypes.GET_ALL_LISTS_SUCCESS;
      payload: object[];
}

interface GetAllListsErrorAction {
      type: ActionTypes.GET_ALL_LISTS_ERROR;
      payload: string;
}

export type Action =
      | GetAllListsAction
      | GetAllListsSuccessAction
      | GetAllListsErrorAction;
