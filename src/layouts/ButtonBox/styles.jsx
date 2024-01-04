import styled from "styled-components";

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100px;

  @media only screen and (max-width: 768px) {
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.1);
    height: 60px;
  }
`;

export const ButtonContainer = styled.div`
  height: 100%;
  width: 60%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media only screen and (max-width: 768px) {
    width: 90%;
  }
`;

export const Cotton = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;

  img {
    width: 56px;
    height: 44px;
    background-color: transparent;
    border: none;

    @media only screen and (max-width: 769px) {
      width: 34px;
      height: 28px;
    }
  }

  p {
    margin-left: 16px;

    color: #2c2c2c;
    font-family: Pretendard;
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    letter-spacing: 0.22px;

    @media only screen and (max-width: 768px) {
      margin-left: 12px;
      font-size: 14px;
      letter-spacing: 0.14px;
    }
  }
`;

export const Button = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  margin-left: 24px;

  @media only screen and (max-width: 768px) {
    margin-left: 16px;
  }

  > svg {
    width: 36px;
    height: 32px;

    @media only screen and (max-width: 768px) {
      width: 26px;
      height: 22px;
    }
  }

  > p {
    color: ${(props) => props.color};
    text-align: center;
    font-family: Pretendard;
    font-size: 16px;
    font-weight: 500;
    letter-spacing: 0.32px;
    margin-top: 4px;

    @media only screen and (max-width: 768px) {
      display: none;
    }
  }
`;
