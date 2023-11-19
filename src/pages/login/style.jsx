import { styled } from "styled-components";

const FlexCenter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const FlexBox = styled(FlexCenter)``;

export const PageContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #fffbf8;
`;

export const LogoContainer = styled(FlexCenter)`
  flex-direction: column;
  position: absolute;
  width: 17.7vw;
  height: 36.77vh;
  min-width: 100px;
  min-height: 100px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -70%);
`;

export const ButtonContainer = styled(FlexCenter)`
  flex-direction: column;
  gap: 2.22vh;
  width: 100%;
  position: absolute;
  top: 74vh;
  left: 50%;
  transform: translateX(-50%);
`;

const StyledButton = styled.button`
  display: flex;
  padding: 15px 32px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 10px;

  max-width: 396px;
  width: 70vw;
  height: 15vh;
  max-height: 53px;
  color: #2a2a2a;

  text-align: center;
  font-family: "Roboto";
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: 0.36px;

  border-radius: 12px;
`;

export const KakaoButton = styled(StyledButton)`
  background: #fee500;
  border: 0px;
`;

export const GoogleButton = styled(StyledButton)`
  border: 1px solid #cdcdcd;
  background: #fff;
`;
