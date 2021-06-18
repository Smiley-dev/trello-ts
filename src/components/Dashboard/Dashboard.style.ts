import styled from "styled-components";

export const DashboardStyled = styled.div`
      display: flex;
      justify-content: center;
      width: fit-content;
      max-width: 70%;
      margin: 150px auto;
      flex-wrap: wrap;
      gap: 10px;
      align-items: center;
`;

export const NewBoard = styled.div`
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: #f0f2f5;
      color: black;
      font-size: 15px;
      font-weight: 400;
      min-width: 200px;
      height: 100px;
      padding: 10px;
      border-radius: 10px;
      &:hover {
            cursor: pointer;
            opacity: 0.7;
      }
`;
