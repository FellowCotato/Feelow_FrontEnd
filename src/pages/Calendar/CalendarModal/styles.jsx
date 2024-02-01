import styled, { css } from "styled-components";
import { ReactComponent as CloseIcon } from "../../../assets/close_icon.svg";

export const ModalOverlay = styled.div`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 0.4);
  backdrop-filter: blur(2px);

  @media only screen and (max-width: 768px) {
    background: rgba(0, 0, 0, 0.2);
  }
`;

export const ModalBackground = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;

  background: #fff;
  width: 800px;
  height: 430px;
  border-radius: 36px;
  box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.4);

  @media only screen and (min-width: 768px) {
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    max-width: 80%;
  }

  @media only screen and (max-width: 768px) {
    width: 100%;
    height: 440px;
    bottom: -40px;
  }
`;

export const ModalBox = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  flex-direction: column;
  width: calc(100% - 18px);
  height: calc(100% - 18px);
  border: 2.5px dashed #d7ab6e;
  border-radius: 30px;
`;

export const CloseButton = styled(CloseIcon)`
  position: absolute;
  top: 12px;
  right: 18px;
  width: 36px;
  height: 36px;
  cursor: pointer;

  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

export const CloseBar = styled.div`
  margin-top: 16px;
  width: 54px;
  height: 4px;
  border-radius: 2.5px;
  background: #b0b0b0;

  @media only screen and (min-width: 768px) {
    display: none;
  }
`;

const fontStyle = css`
  color: #000;
  font-family: Pretendard;
  font-size: 18px;
  font-weight: 400;
  line-height: 21px;
  letter-spacing: 0.36px;
  margin: 0;

  @media only screen and (max-width: 768px) {
    font-size: 12px;
  }
`;

export const ModalHeader = styled.h3`
  ${fontStyle};
  font-size: 32px;
  font-weight: 600;
  margin-top: 36px;

  @media only screen and (max-width: 768px) {
    font-size: 20px;
  }
`;

export const ContentWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;

  @media only screen and (max-width: 768px) {
    margin-bottom: 40px;
  }
`;

export const ContentBox = styled.div`
  display: grid;
  grid-template-columns: 1fr 1.3fr;
  grid-template-areas: "character content";
  justify-content: center;
  align-items: center;
  gap: 40px;
  width: 90%;
`;

export const CharacterWrapper = styled.div`
  grid-area: "character";
  display: flex;
  justify-content: center;
  align-items: center;

  > svg {
    width: 132px;
    height: 180px;

    @media only screen and (max-width: 768px) {
      width: 92px;
      height: 124px;
    }
  }
`;

export const TextWrapper = styled.div`
  grid-area: "content";
  display: flex;
  flex-direction: column;
  margin-right: 48px;

  @media only screen and (max-width: 768px) {
    margin-right: 32px;
  }
`;

export const ChatSummary = styled.div`
  > h5 {
    ${fontStyle}
    font-weight: 600;
    margin-bottom: 20px;

    @media only screen and (max-width: 768px) {
      font-size: 14px;
      margin-bottom: 12px;
    }
  }

  > p {
    ${fontStyle}
  }
`;

export const Horizon = styled.div`
  width: 51px;
  height: 4px;
  border-radius: 2px;
  background: #f7f0ea;
  margin: 32px 0;
`;

export const TodayWord = styled.div`
  > h5 {
    ${fontStyle}
    font-weight: 600;
    margin-bottom: 20px;
  }

  > p {
    color: #809f80;
    font-family: Pretendard;
    font-size: 20px;
    font-weight: 600;
    line-height: 21px;
    letter-spacing: 0.4px;

    @media only screen and (max-width: 768px) {
      font-size: 14px;
    }
  }
`;
