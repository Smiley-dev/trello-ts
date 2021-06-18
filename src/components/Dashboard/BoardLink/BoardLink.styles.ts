import styled from "styled-components";
import { Link } from "react-router-dom";

export const BoardLinkStyled = styled(Link)`
      display: flex;
      color: white;
      font-size: 15px;
      font-weight: 700;
      padding: 10px;
      min-width: 200px;
      height: 100px;
      background-color: #0081cc;

      border-radius: 10px;
      &:hover {
            cursor: pointer;
            opacity: 0.7;
      }
`;
