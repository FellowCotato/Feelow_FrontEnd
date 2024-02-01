import styled, { keyframes } from "styled-components";
import { ReactComponent as Character } from "../../../assets/feelow_character.svg";

export const ChatContainer = styled.div`
  display: flex;
  justify-content: ${(props) => (props.sender === "bot" ? "start" : "end")};
`;

export const FeelowCharacter = styled(Character)`
  width: 68px;
  height: 88px;
  background-color: transparent;

  @media only screen and (max-width: 768px) {
    width: 44px;
    height: 56px;
  }
`;

export const ChatContentContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 16px 32px;

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
  font-weight: 500;
  letter-spacing: 0.36px;

  @media only screen and (max-width: 768px) {
    font-size: 14px;
    letter-spacing: 0.14px;
    line-height: 17px;
  }
`;

const scaling = (scale) => keyframes`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(${scale});
  }

  100% {
    transform: scale(1);
  }
`;

export const ChatAnimation = styled.div`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  margin: 0 2px;
  border-radius: 50%;
  background: #b4b4b4;
  animation: ${(props) => scaling(props.scale)} 1s linear infinite;

  @media only screen and (max-width: 768px) {
    margin: -3px;
  }
`;
