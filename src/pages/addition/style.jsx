import styled from "styled-components";

export const FlexBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const AdditionTotalBox = styled.div`
  width: 100%;
  height: 100%;
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

export const AdditionLabel = styled.div`
  color: #2c2c2c;
  text-align: center;
  font-family: "Pretendard";
  font-size: 28px;
  font-weight: 600;
  letter-spacing: 0.28px;
  margin-top: 44%;

  @media screen and (width<786px) {
    margin-top: 54%;
  }
`;
