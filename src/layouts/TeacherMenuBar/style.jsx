import { Link } from "react-router-dom";
import styled from "styled-components";

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100vw;
  height: 173px;

  @media only screen and (max-width: 768px) {
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.1);
    height: 66px;
  }
`;

export const ButtonContainer = styled.div`
  height: 100%;
  max-width: 1080px;
  width: 90%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media only screen and (max-width: 768px) {
    width: 90%;
  }
`;

export const ClassInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 89px;
  height: 36px;
  flex-shrink: 0;
  border-radius: 28px;
  background: #b19b8f;
  color: var(--White, #fff);
  text-align: center;
  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: 0.2px;
  @media only screen and (max-width: 768px) {
    width: 63px;
    height: 25px;
    border-radius: 40px;
    background: var(--Sub-Color2, #b19b8f);
    font-size: 14px;
    font-weight: 500;
    line-height: 17px; /* 121.429% */
    letter-spacing: 0.14px;
  }
`;

export const Buttons = styled.div`
  display: flex;
`;

export const Button = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: transparent;
  border: none;
  margin-left: 24px;
  text-decoration: none;

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
