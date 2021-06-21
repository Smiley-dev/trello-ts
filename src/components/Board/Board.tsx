import React, { useEffect } from "react";
import { useLocation } from "react-router";
import { useActions } from "../../hooks/useActions";
import BoardHeader from "./BoardHeader/BoardHeader";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import List from "../List/List";

import { BoardContainer } from "./BoardStyle";

interface LocationState {
      boardName: string;
      boardId: string;
}

const Board: React.FC = () => {
      const location = useLocation<LocationState>();
      const { boardName, boardId }: { boardName: string; boardId: string } =
            location.state;

      const { lists, error, loading } = useTypedSelector(
            (state) => state.lists,
      );

      const { setActiveBoard, getAllLists } = useActions();

      useEffect(() => {
            getAllLists(boardId);
            // eslint-disable-next-line react-hooks/exhaustive-deps
      }, [boardId]);

      useEffect(() => {
            setActiveBoard(boardId);
            // eslint-disable-next-line react-hooks/exhaustive-deps
      }, [boardId]);

      return (
            <>
                  <BoardHeader boardName={boardName} boardId={boardId} />
                  <BoardContainer>
                        {lists.map((list: any) => {
                              return (
                                    <List
                                          key={list.id}
                                          id={list.id}
                                          name={list.name}
                                          pos={list.pos}
                                          cards={list.cards}
                                    />
                              );
                        })}
                  </BoardContainer>
            </>
      );
};

export default Board;
