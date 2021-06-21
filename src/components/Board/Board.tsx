import React, { useEffect } from "react";
import { useLocation } from "react-router";
import { useActions } from "../../hooks/useActions";
import BoardHeader from "./BoardHeader/BoardHeader";

interface LocationState {
      boardName: string;
      boardId: string;
}

const Board: React.FC = () => {
      const location = useLocation<LocationState>();
      const { boardName, boardId }: { boardName: string; boardId: string } =
            location.state;

      const { setActiveBoard, getAllLists } = useActions();

      useEffect(() => {
            getAllLists(boardId);
      });

      useEffect(() => {
            setActiveBoard(boardId);
            // eslint-disable-next-line react-hooks/exhaustive-deps
      }, []);

      return (
            <div>
                  <BoardHeader boardName={boardName} boardId={boardId} />
            </div>
      );
};

export default Board;
