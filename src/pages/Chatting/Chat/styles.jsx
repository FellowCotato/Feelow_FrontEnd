import styled from "styled-components";

export const ChatContainer = styled.div`
  display: flex;
  justify-content: ${(props) => (props.sender === "bot" ? "start" : "end")};
`;

export const BotImg = styled.img`
  width: 68px;
  height: 88px;
  flex-shrink: 0;
  background-color: transparent;

  @media only screen and (max-width: 768px) {
    width: 44px;
    height: 56px;
  }
`;

export const ChatContentContainer = styled.div`
  display: flex;
  padding: 16px 32px;
  flex-direction: column;
  justify-content: center;
  align-items: stretch;

  max-width: 50%;
  height: fit-content;
  margin: 0px 16px 32px;
  border-radius: 20px;
  background: ${(props) => props.background};

  @media only screen and (max-width: 768px) {
    padding: 12px 18px;
    gap: 10px;
    border-radius: 12px;
    max-width: 60%;
    margin: 0px 16px 20px;
  }
`;

export const ChatContent = styled.p`
  color: ${(props) => props.color};
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: 0.36px;

  @media only screen and (max-width: 768px) {
    font-size: 14px;
    letter-spacing: 0.14px;
    line-height: 17px;
  }
`;
