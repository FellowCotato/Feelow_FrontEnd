import styled from "styled-components";

export const FlexBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const AdditionTotalBox = styled.div`
  width: 100%;
  height: 130%;
  max-width: 510px;
`;
export const LogoName = styled.div`
  margin: 30px 0px 0px 0px;
  color: #809f80;
  text-align: center;
  font-family: "Coiny";
  font-size: 35px;
  font-weight: 400;
  letter-spacing: 0.7px;
`;
export const UserInfoComponent = styled.div`
  width: 100%;
  height: 726px;
  background-color: #f7f0ea;
  @media screen and (max-width: 768px) {
    height: 786px;
  }
`;

export const ClassTextDiv = styled.div`
  color: var(--Main-Font, #2c2c2c);
  text-align: center;

  /* Title */
  font-family: Pretendard;
  font-size: 28px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: 0.28px;
  margin: 54px 0px 0px 0px;
  @media screen and (max-width: 768px) {
    margin: 40px 0px 0px 0px;
  }
`;
