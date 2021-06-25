import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { useActions } from "../../../hooks/useActions";
import { useTypedSelector } from "../../../hooks/useTypedSelector";
import {
      Overlay,
      BoardForm,
      BoardTitle,
      SubmitBoardButton,
      Wrapper,
} from "./NewBoardForm.style";

interface NewBoardFormProps {
      isOpened: boolean;
      setIsOpened: React.Dispatch<React.SetStateAction<boolean>>;
}

//TODO: Redirect to new board once it is created

const NewBordForm: React.FC<NewBoardFormProps> = ({
      isOpened,
      setIsOpened,
}): JSX.Element => {
      const [boardTitle, setBoardTitle] = useState<string>("");

      const { createBoard } = useActions();
      const { error, loading } = useTypedSelector((state) => state.boards);

      const createNewBoard = () => {
            createBoard(boardTitle);
            setIsOpened(false);
      };

      return (
            <Wrapper isOpened={isOpened}>
                  <Overlay>
                        <BoardForm>
                              <BoardTitle
                                    onChange={(e) =>
                                          setBoardTitle(e.target.value)
                                    }
                                    placeholder="Board title..."
                              ></BoardTitle>
                              <div
                                    style={{
                                          display: "flex",
                                          justifyContent: "space-between",
                                          alignItems: "center",
                                          marginTop: "20px",
                                    }}
                              >
                                    <SubmitBoardButton onClick={createNewBoard}>
                                          Add Board
                                    </SubmitBoardButton>
                                    <FontAwesomeIcon
                                          onClick={() => setIsOpened(false)}
                                          icon={faTimes}
                                          size={"lg"}
                                          color={"#6b778c"}
                                    ></FontAwesomeIcon>
                              </div>
                        </BoardForm>
                  </Overlay>
            </Wrapper>
      );
};

export default NewBordForm;
