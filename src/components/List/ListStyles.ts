import styled from "styled-components";

export const ListElement = styled.div`
      font-size: 14px;
      width: 250px;
      min-width: 250px;
      max-height: 100%;
      height: 90%;
      margin-left: 10px;
      background-color: #ebecf0;
      border-radius: 3px;
      color: #172b4d;
      padding: 8px;
      &:hover {
            cursor: unset;
      }
`;

export const ListHeading = styled.div`
      display: flex;
      justify-content: space-between;
      align-items: center;
`;

export const ListTitle = styled.div`
      font-weight: 500;

      margin-left: 10px;
`;

export const CardsWrapper = styled.div`
      margin-top: 20px;
`;
