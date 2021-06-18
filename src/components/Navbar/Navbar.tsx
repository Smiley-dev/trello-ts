import React, { useState } from "react";
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

const Navbar: React.FC = () => {
      return (
            <>
                  <NavbarStyled>
                        <LeftNavSection>
                              <HomeLink to="/">
                                    <FontAwesomeIcon icon={faHome} />
                              </HomeLink>
                              <BoardsButton>
                                    <FontAwesomeIcon icon={faAlignJustify} />
                                    Boards
                              </BoardsButton>
                        </LeftNavSection>
                        <Logo to="/">Trello</Logo>
                        <RightNavSection>
                              <FontAwesomeIcon icon={faUserCircle} />
                        </RightNavSection>
                  </NavbarStyled>
            </>
      );
};

export default Navbar;
