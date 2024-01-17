import styled from "styled-components";

export const ChattingWrapper = styled.div`
  background: #fffbf8;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ChattingContainer = styled.div`
  width: 60%;

  @media only screen and (max-width: 600px) {
    width: 90%;
  }
`;
