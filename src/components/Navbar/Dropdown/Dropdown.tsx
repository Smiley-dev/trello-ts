import React, { useEffect, useState } from "react";
import { useTypedSelector } from "../../../hooks/useTypedSelector";
import {
      DropdownContainer,
      SearchInput,
      SearchContainer,
      CloseSearch,
      Board,
      BoardsLabel,
} from "./Dropdown.style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faAlignJustify } from "@fortawesome/free-solid-svg-icons";
import slugify from "slugify";

interface DropdownProps {
      isOpened: boolean;
      setIsOpened: React.Dispatch<React.SetStateAction<boolean>>;
}

const Dropdown: React.FC<DropdownProps> = ({
      isOpened,
      setIsOpened,
}): JSX.Element => {
      const { boards } = useTypedSelector((state) => state.boards);
      const [searchInput, setSearchInput] = useState<string>("");
      const [filteredBoards, setFilteredBoards] =
            useState<object[] | []>(boards);

      useEffect(() => {
            if (searchInput === "") {
                  setFilteredBoards(boards);
            } else {
                  setFilteredBoards(
                        boards.filter((board: any) =>
                              board.name
                                    .toLowerCase()
                                    .includes(searchInput.toLowerCase()),
                        ),
                  );
            }
      }, [searchInput]);

      return (
            <DropdownContainer isOpened={isOpened}>
                  <SearchContainer>
                        <SearchInput
                              onChange={(e) => setSearchInput(e.target.value)}
                              type="text"
                              placeholder="Find boards by name..."
                              autoFocus
                        />
                        <CloseSearch
                              icon={faTimes}
                              onClick={() => setIsOpened(false)}
                        />
                  </SearchContainer>
                  <BoardsLabel>
                        <FontAwesomeIcon icon={faAlignJustify} />
                        &nbsp; Boards
                  </BoardsLabel>
                  {filteredBoards.map((board: any) => {
                        const boardSlug = slugify(board.name);
                        const shortLink = board.shortUrl.split("/").pop();
                        return (
                              <Board
                                    onClick={() => setIsOpened(false)}
                                    key={board.id}
                                    to={{
                                          pathname: `/board/${shortLink}/${boardSlug}`,
                                          state: {
                                                boardId: board.id,
                                          },
                                    }}
                              >
                                    {board.name}
                              </Board>
                        );
                  })}
            </DropdownContainer>
      );
};

export default Dropdown;
