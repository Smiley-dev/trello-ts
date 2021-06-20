import styled from "styled-components";

export const BoardHeaderStyled = styled.div`
      height: 40px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      background-color: #0079bf;
      width: 100%;
`;

export const BoardTitle = styled.div`
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 0px 20px;
      color: white;
      font-size: 20px;
      font-weight: bold;
      &:hover {
            cursor: pointer;
      }
`;

export const UpdateBoardForm = styled.input`
      border-radius: 10px;
      border: none;
      font-size: 20px;
      width: fit-content;
      padding: 0px 20px;
      margin-left: 20px;

      height: 80%;
      outline: none;
`;

export const DeleteBoard = styled.button`
      background-color: #eb5a46;
      color: white;
      border-radius: 10px;
      width: 200px;
      height: 30px;
      opacity: 0.7;
      &:hover {
            cursor: pointer;
            opacity: 1;
      }
`;
