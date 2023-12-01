import { styled } from "styled-components";

const FlexCenter = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

export const FlexBox = styled(FlexCenter)``;

export const PageContainer = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
  background-color: #fffbf8;
`;

const sharedTextStyle = `
  color: var(--Main-Font, #2c2c2c);
  text-align: center;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: 0.64px;
  margin-top: 20.74vh;
  margin-bottom: 7.56vh;
  @media screen and (max-width: 768px) {
   font-size: 20px;
  }
  @media screen and (min-width: 768px) {
    font-size: 30px;
   }
`;

export const Text = styled.div`
  ${sharedTextStyle}
  font-family: Pretendard;
`;

export const HighlightedText = styled.span`
  ${sharedTextStyle}
  font-family: Coiny;
`;

export const LogoContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  width: 14.01vw;
  height: 28.79vh;
  min-width: 159px;
  min-height: 201.67px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  margin-top: 8.2vh;
`;

export const ButtonContainer = styled(FlexCenter)`
  display: inline-flex;
  height: 50px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  position: absolute;
  top: calc(50% + 23.92vh);
  transform: translateX(-50%);
  left: 50%;
`;

export const StartButton = styled.button`
  width: 19.73vw;
  height: 4.9vh;
  min-width: 179px;
  border-radius: 40px;
  border: 0px;
  background: var(--Point-Color, #d7ab6e);
  box-shadow: 0px 0px 15px 0px rgba(0, 0, 0, 0.2);

  color: #fff;
  font-family: Pretendard;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: 0.4px;
`;
