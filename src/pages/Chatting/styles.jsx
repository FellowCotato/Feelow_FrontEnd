import styled from "styled-components";

export const ChattingWrapper = styled.div`
  background: #fffbf8;
  position: fixed;
  width: 100%;
  height: 100%;
`;

export const ChattingContainer = styled.div`
  margin-left: 21.875vw;
  margin-right: 21.875vw;
`;

export const ButtonContainer = styled.div`
  width: 100%;
  height: 13vh;
`;

export const Button = styled.button`
  background-color: transparent;
  border: none;
  width: 34.868px;
  height: 34px;
  cursor: pointer;
  float: ${(props) => props.position};
  margin-left: ${(props) => (props.position === "right" ? "30px" : 0)};
  margin-right: ${(props) => (props.position === "left" ? "30px" : 0)};
  /* padding: 10px; */
`;
