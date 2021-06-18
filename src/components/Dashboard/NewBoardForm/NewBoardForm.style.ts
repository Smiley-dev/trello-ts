import styled from "styled-components";

interface WrapperProps {
      isOpened: boolean;
}

export const Wrapper = styled.div<WrapperProps>`
      display: ${(props: WrapperProps) => (props.isOpened ? "block" : "none")};
`;

export const Overlay = styled.div`
      position: fixed;
      top: 0;
      left: 0;
      width: 100vw;
      height: 100vh;
      background-color: rgba(0, 0, 0, 0.5);
      z-index: 100;
      display: flex;
      justify-content: center;
      align-items: center;
`;

export const BoardForm = styled.div`
      background-color: #ebecf0;
      width: 500px;
      max-width: 80vw;
      border-radius: 5px;
      padding: 20px 20px;
`;

export const BoardTitle = styled.input`
      width: 100%;
      height: 30px;
      border: none;
      border-radius: 3px;
      padding-left: 10px;
      font-size: 20px;
`;

export const SubmitBoardButton = styled.button`
      background-color: #5aac44;
      color: white;
      border: none;
      margin-right: 20px;
      text-align: center;
      width: 100px;
      height: 30px;
      border-radius: 5px;
      &:hover {
            cursor: pointer;
            opacity: 0.7;
      }
`;
