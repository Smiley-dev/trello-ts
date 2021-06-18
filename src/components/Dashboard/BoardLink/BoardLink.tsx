import React from "react";
import slugify from "slugify";
import { BoardLinkStyled } from "./BoardLink.styles";

interface Board {
      name: string;
      shortUrl: string;
      id: string;
}

interface BoardLinkProps {
      board: Board;
}

const BoardLink: React.FC<BoardLinkProps> = ({ board }): JSX.Element => {
      const boardSlug = slugify(board.name);
      const shortLink = board.shortUrl.split("/").pop();
      return (
            <BoardLinkStyled
                  to={{
                        pathname: `/board/${shortLink}/${boardSlug}`,
                        state: {
                              boardId: board.id,
                              boardName: board.name,
                        },
                  }}
            >
                  {board.name}
            </BoardLinkStyled>
      );
};

export default BoardLink;
