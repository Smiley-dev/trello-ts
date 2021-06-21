import React, { useState } from "react";
import { useActions } from "../../../hooks/useActions";
import { useHistory } from "react-router";
import {
      BoardHeaderStyled,
      UpdateBoardForm,
      DeleteBoard,
      BoardTitle,
} from "./BoardHeader.style";

interface BoardHeaderProps {
      boardName: string;
      boardId: string;
}

const BoardHeader: React.FC<BoardHeaderProps> = ({
      boardName,
      boardId,
}): JSX.Element => {
      const [boardTitleFormOpened, setBoardTitleFormOpened] =
            useState<boolean>(false);
      const [updateFormValue, setUpdateFormValue] = useState(boardName);
      const { deleteBoard, updateBoard } = useActions();
      const history = useHistory();

      const handleSubmit = () => {
            updateBoard(updateFormValue, boardId);
            setBoardTitleFormOpened(false);
      };

      const handleFormValueChange = (e: any) => {
            if (e.target.value !== "") setUpdateFormValue(e.target.value);
      };

      const handleDelete = () => {
            deleteBoard(boardId);
            history.push("/");
      };

      return (
            <BoardHeaderStyled>
                  {boardTitleFormOpened ? (
                        <UpdateBoardForm
                              value={updateFormValue}
                              onBlur={handleSubmit}
                              onChange={handleFormValueChange}
                              autoFocus
                        ></UpdateBoardForm>
                  ) : (
                        <BoardTitle
                              onClick={() => setBoardTitleFormOpened(true)}
                        >
                              {updateFormValue}
                        </BoardTitle>
                  )}

                  <DeleteBoard onClick={handleDelete}>Delete Board</DeleteBoard>
            </BoardHeaderStyled>
      );
};

export default BoardHeader;
