import { ActionTypes } from "../action-types";

interface GetAllCardsAction {
      type: ActionTypes.GET_ALL_CARDS;
}

interface GetAllCardsSuccessAction {
      type: ActionTypes.GET_ALL_CARDS_SUCCESS;
      payload: object[];
}

interface GetAllCardsErrorAction {
      type: ActionTypes.GET_ALL_CARDS_ERROR;
      payload: string;
}

export type Action =
      | GetAllCardsAction
      | GetAllCardsSuccessAction
      | GetAllCardsErrorAction;
