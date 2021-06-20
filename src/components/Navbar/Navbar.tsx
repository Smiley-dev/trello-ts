import React, { useEffect, useRef, useState } from "react";
import {
      NavbarStyled,
      LeftNavSection,
      HomeLink,
      BoardsButton,
      Logo,
      RightNavSection,
} from "./Navbar.style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
      faHome,
      faAlignJustify,
      faUserCircle,
} from "@fortawesome/free-solid-svg-icons";
import Dropdown from "./Dropdown/Dropdown";

const Navbar: React.FC = (): JSX.Element => {
      const [dropdownOpened, setDrodownOpened] = useState<boolean>(false);
      const ref = useRef<HTMLDivElement>(null);

      useEffect(() => {
            const checkIfClickedOutside = (e: any) => {
                  if (
                        dropdownOpened &&
                        ref.current &&
                        !ref.current.contains(e.target)
                  ) {
                        setDrodownOpened(false);
                  }
            };
            document.addEventListener("mousedown", checkIfClickedOutside);
            return () => {
                  document.removeEventListener(
                        "mousedown",
                        checkIfClickedOutside,
                  );
            };
      }, [dropdownOpened]);

      return (
            <div ref={ref}>
                  <NavbarStyled>
                        <LeftNavSection>
                              <HomeLink to="/">
                                    <FontAwesomeIcon icon={faHome} />
                              </HomeLink>
                              <BoardsButton
                                    onClick={() =>
                                          setDrodownOpened(!dropdownOpened)
                                    }
                              >
                                    <FontAwesomeIcon icon={faAlignJustify} />
                                    Boards
                              </BoardsButton>
                        </LeftNavSection>
                        <Logo to="/">Trello</Logo>
                        <RightNavSection>
                              <FontAwesomeIcon icon={faUserCircle} />
                        </RightNavSection>
                  </NavbarStyled>
                  <Dropdown
                        isOpened={dropdownOpened}
                        setIsOpened={setDrodownOpened}
                  />
            </div>
      );
};

export default Navbar;
