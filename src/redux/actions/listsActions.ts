import { ActionTypes } from "../action-types";

interface GetAllListsAction {
      type: ActionTypes.GET_ALL_LISTS;
}

interface GetAllListsSuccessAction {
      type: ActionTypes.GET_ALL_LISTS_SUCCESS;
      payload: any;
}

interface GetAllListsErrorAction {
      type: ActionTypes.GET_ALL_LISTS_ERROR;
      payload: string;
}

interface AddListAction {
      type: ActionTypes.ADD_LIST;
}

interface AddListSuccessAction {
      type: ActionTypes.ADD_LIST_SUCCESS;
      payload: object[];
}

interface AddListErrorAction {
      type: ActionTypes.ADD_LIST_ERROR;
      payload: string;
}

export type Action =
      | GetAllListsAction
      | GetAllListsSuccessAction
      | GetAllListsErrorAction
      | AddListAction
      | AddListSuccessAction
      | AddListErrorAction;
