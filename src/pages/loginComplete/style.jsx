import styled from "styled-components";

export const FlexBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const TotalBox = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
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

export const TotalCompleteFoam = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 6px 0px 0px 0px;
  max-width: 1079px;
  min-width: 331px;
  padding: 12px;
  width: 88%;
  max-height: 550px;
  min-height: 452px;
  height: 57%;
  flex-shrink: 0;
  border-radius: 35px;
  background: #fff;
  box-shadow: 0px 0px 18px 0px #e1d7d0;
  @media screen and (max-width: 425px) {
    height: 50%;
    width: 80%;
    padding: 6px;
  }
`;
export const DashedCompleteFoam = styled.div`
  max-width: 1055px;
  width: 100%;
  max-height: 526px;
  height: 100%;
  flex-shrink: 0;
  border-radius: 30px;
  border: 2.5px dashed #d7ab6e;
`;

export const TextDivHeader = styled.div`
  color: var(--Main-Font, #2c2c2c);
  text-align: center;
  font-family: "Pretendard";
  font-style: normal;
  line-height: normal;
  font-size: 32px;
  font-weight: 600;
  letter-spacing: 0.32px;
  margin: 91px 0px 0px 0px;

  @media screen and (max-width: 425px) {
    font-size: 18px;
    letter-spacing: 0.18px;
    margin: 63px 0px 0px 0px;
  }
`;

export const TextDivParagraph = styled.div`
  color: var(--Main-Font, #2c2c2c);
  text-align: center;
  font-family: "Pretendard";
  font-style: normal;
  line-height: normal;
  font-size: 16px;
  font-weight: 600;
  letter-spacing: 0.16px;
  margin: 109px 0px 0px 0px;

  @media screen and (max-width: 425px) {
    font-size: 16px;
    letter-spacing: 0.18px;
    margin: 98px 0px 0px 0px;
  }
`;

export const TextDivParagraph2 = styled.div`
  color: var(--Main-Font, #2c2c2c);
  text-align: center;
  font-family: "Pretendard";
  font-style: normal;
  line-height: normal;
  font-size: 18px;
  font-weight: 500;
  letter-spacing: 0.36px;
  margin: 20px 0px 0px 0px;
  width: 80%;

  @media screen and (max-width: 425px) {
    font-size: 14px;
    letter-spacing: 0.28px;
    margin: 19px 0px 0px 0px;
    width: 229px;
  }
`;

export const ButtonDiv = styled.button`
  display: flex;
  height: 50px;
  width: 80%;
  max-width: 360px;
  cursor: pointer;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  border-radius: 40px;
  background: var(--Point-Color, #d7ab6e);
  box-shadow: 0px 0px 15px 0px rgba(0, 0, 0, 0.2);
  color: var(--White, #fff);
  font-family: "Pretendard";
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: 0.4px;
  margin: 80px 0px 0px 0px;
  border: none;
  @media screen and (max-width: 425px) {
    width: 229px;
    height: 41px;
    gap: 10px;
    font-size: 14px;
    font-weight: 600;
    letter-spacing: 0.28px;
    margin: 98px 0px 0px 0px;
  }
`;
