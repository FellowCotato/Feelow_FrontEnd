import styled from "styled-components";

export const ChatContainer = styled.div`
  display: flex;
  justify-content: ${(props) => (props.isBot ? "flex-start" : "flex-end")};
`;

export const BotImg = styled.img`
  width: 68px;
  height: 91.229px;
  flex-shrink: 0;
`;

export const UserCircle = styled.div`
  width: 54px;
  height: 54px;
  border-radius: 50%;
  flex-shrink: 0;
  background-color: #b19b8f;
  position: relative;
`;

export const UserName = styled.div`
  color: #fff;
  text-align: center;
  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: 1px;

  position: absolute;
  top: 30%;
  left: 16%;
`;

export const ChatContentContainer = styled.div`
  display: flex;
  padding: 16px 32px;
  flex-direction: column;
  justify-content: center;
  align-items: stretch;

  max-width: 50%;
  height: fit-content;
  margin: 0px 16px 0px;

  border-radius: 20px;
  background: #f7f0ea;
`;

export const ChatContent = styled.span`
  color: var(--Main-Font, #2c2c2c);

  font-family: Pretendard;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: 0.36px;
`;
