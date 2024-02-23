import styled, { css, keyframes } from "styled-components";

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const fadeOut = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`;

export const AlertBox = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  display: flex;
  flex-direction: column;
  align-items: center;

  gap: 20px;
  border-radius: 40px;
  padding: 22px 148px;
  background: #d7ab6e;
  box-shadow: 0px 0px 15px 0px rgba(0, 0, 0, 0.2);

  animation: ${(props) => (props.visible === "visible" ? fadeIn : fadeOut)} 0.3s ease-out;

  @media only screen and (max-width: 768px) {
    padding: 24px 48px;
    border-radius: 20px;
  }
`;

const fontStyle = css`
  color: #fff;
  text-align: center;
  font-family: Pretendard;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

export const CottonFive = styled.div`
  display: inline-flex;
  justify-content: center;
  align-items: center;

  img {
    width: 56px;
    height: 44px;
    flex-shrink: 0;
  }

  p {
    ${fontStyle}
    font-size: 26px;
    letter-spacing: 0.28px;
  }

  @media only screen and (max-width: 768px) {
    img {
      width: 40px;
      height: 32px;
    }

    p {
      font-size: 18px;
      font-weight: 500;
      letter-spacing: 0.36px;
    }
  }
`;

export const CottonSentense = styled.p`
  ${fontStyle}
  font-size: 20px;
  letter-spacing: 0.22px;
  white-space: nowrap;

  @media only screen and (max-width: 768px) {
    font-size: 14px;
    letter-spacing: 0.14px;
  }
`;
