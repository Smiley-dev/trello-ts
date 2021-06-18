import React, { useEffect, useState } from "react";
import { useActions } from "../../hooks/useActions";
import { useTypedSelector } from "../../hooks/useTypedSelector";

import BoardLink from "./BoardLink/BoardLink";
import NewBoardForm from "./NewBoardForm/NewBordForm";
import { DashboardStyled, NewBoard } from "./Dashboard.style";

const Dashboard: React.FC = (): JSX.Element => {
      const { getAllBoards } = useActions();
      const { boards, error, loading } = useTypedSelector(
            (state) => state.boards,
      );

      const [newBoardFormOpened, setNewBoardFormOpened] =
            useState<boolean>(false);

      useEffect(() => {
            if (boards.length === 0) getAllBoards();
            // eslint-disable-next-line react-hooks/exhaustive-deps
      }, []);

      return (
            <DashboardStyled>
                  {boards.map((board: any) => {
                        return (
                              <BoardLink
                                    key={board.id}
                                    board={{
                                          name: board.name,
                                          id: board.id,
                                          shortUrl: board.shortUrl,
                                    }}
                              />
                        );
                  })}
                  <NewBoard onClick={() => setNewBoardFormOpened(true)}>
                        Create Board
                  </NewBoard>
                  <NewBoardForm
                        isOpened={newBoardFormOpened}
                        setIsOpened={setNewBoardFormOpened}
                  />
            </DashboardStyled>
      );
};

export default Dashboard;
