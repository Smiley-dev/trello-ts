import React, { useState } from "react";
import {
      BoardHeaderStyled,
      UpdateBoardForm,
      DeleteBoard,
      BoardTitle,
} from "./BoardHeader.style";

interface BoardHeaderProps {
      boardName: string;
}

const BoardHeader: React.FC<BoardHeaderProps> = ({
      boardName,
}): JSX.Element => {
      const [boardTitleFormOpened, setBoardTitleFormOpened] =
            useState<boolean>(false);
      const [updateFormValue, setUpdateFormValue] = useState(boardName);

      const handleSubmit = (e: any) => {
            setBoardTitleFormOpened(false);
      };

      const handleFormValueChange = (e: any) => {
            if (e.target.value !== "") setUpdateFormValue(e.target.value);
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

                  <DeleteBoard>Delete Board</DeleteBoard>
            </BoardHeaderStyled>
      );
};

export default BoardHeader;
