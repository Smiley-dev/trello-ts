import React, { useEffect } from "react";
import { useActions } from "../../hooks/useActions";
import { useTypedSelector } from "../../hooks/useTypedSelector";

const App: React.FC = () => {
      const { getAllBoards, createBoard } = useActions();
      const { data, error, loading } = useTypedSelector(
            (state) => state.boards,
      );

      useEffect(() => {
            getAllBoards();
            // eslint-disable-next-line react-hooks/exhaustive-deps
      }, []);

      return (
            <div>
                  {error && <h3>{error}</h3>}
                  {loading && <h3>Loading...</h3>}
                  {!error &&
                        !loading &&
                        data.map((board: any) => (
                              <div>
                                    {board.name}
                                    <p>{board.id}</p>
                              </div>
                        ))}
                  <button onClick={() => createBoard("New Board")}>
                        new Board
                  </button>
            </div>
      );
};

export default App;
