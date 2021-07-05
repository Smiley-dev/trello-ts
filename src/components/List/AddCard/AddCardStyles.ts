import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const AddCardButton = styled.button`
      border: none;
      border-radius: 3px;
      line-height: 30px;
      width: 90%;
      padding: 4px 8px;
      text-align: left;
      font-size: 0.9rem;
      color: #5e6c84;
      margin: 2px 0 0 8px;
      display: flex;
      align-items: center;
      &:hover {
            cursor: pointer;
            background-color: #bdc2cd;
            color: #172b4d;
      }
`;

export const AddCardForm = styled.div`
      width: 90%;
`;

export const ButtonGroup = styled.div`
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
`;

export const AddButton = styled.button`
      background-color: #5aac44;
      color: white;
      border: none;
      margin-top: 5px;

      text-align: center;
      width: 70px;
      height: 30px;
      border-radius: 5px;
      &:hover {
            cursor: pointer;
      }
`;

export const CloseButton = styled(FontAwesomeIcon)`
      &:hover {
            cursor: pointer;
      }
`;
