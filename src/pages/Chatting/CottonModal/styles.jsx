import styled from "styled-components";

export const ModalOverlay = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.4);
`;

export const ModalBackground = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  background: #fff;
  width: 980px;
  height: 544px;
  border-radius: 35px;
  box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.4);

  @media only screen and (max-width: 768px) {
    width: 332px;
    height: 452px;
    border-radius: 26px;
    box-shadow: 0px 0px 16px 0px rgba(0, 0, 0, 0.4);
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

  @media only screen and (max-width: 768px) {
    width: calc(100% - 16px);
    height: calc(100% - 16px);
    border: 2px dashed #d7ab6e;
    border-radius: 22px;
  }
`;

export const CloseButton = styled.img`
  position: absolute;
  top: 12px;
  right: 18px;
  width: 36px;
  height: 36px;
  cursor: pointer;

  @media only screen and (max-width: 768px) {
    width: 24px;
    height: 24px;
  }
`;

export const CottonImage = styled.img`
  width: 56px;
  height: 44px;
  margin: 36px 0 20px;

  @media only screen and (max-width: 768px) {
    width: 40px;
    height: 32px;
    margin: 28px 0 16px;
  }
`;

export const CottonTitle = styled.h3`
  color: #2c2c2c;
  text-align: center;
  font-family: Pretendard;
  font-size: 32px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: 0.32px;

  @media only screen and (max-width: 768px) {
    font-size: 20px;
    letter-spacing: 0.18px;
  }
`;

export const CottonDescription = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 16px;

  color: #000;
  text-align: center;
  font-family: Pretendard;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 25px;
  letter-spacing: 0.36px;
  font-weight: 400;

  p {
    margin: 24px;
  }

  .bold {
    font-weight: 600;
    line-height: 28px;
  }

  hr {
    margin: 24px;
    width: 120px;
    height: 4px;
    border: none;
    border-radius: 2px;
    background: #f7f0ea;
  }

  @media only screen and (max-width: 768px) {
    margin: 12px 28px;
    font-size: 12px;
    line-height: 16px;
    letter-spacing: 0.12px;

    p {
      margin: 12px;
    }

    .bold {
      line-height: 18px;
    }
  }
`;
