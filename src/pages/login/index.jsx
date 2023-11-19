import React from "react";
import Background from "../../components/BackGround";
import {
  FlexBox,
  ButtonContainer,
  KakaoButton,
  PageContainer,
  GoogleButton,
  LogoContainer,
} from "./style";

import kakao_logo from "../../assets/kakao_logo.png";
import google_logo from "../../assets/google_logo.png";
import feelow_logo from "../../assets/home_logo.png";

const Login = () => {
  const handleKaKaoLogin = () => {};

  const handleGoogleLogin = () => {};

  return (
    <FlexBox>
      <PageContainer>
        <Background />
        <LogoContainer>
          <img src={feelow_logo} alt="feelow_logo" />
        </LogoContainer>
        <ButtonContainer>
          <KakaoButton onClick={handleKaKaoLogin}>
            <img src={kakao_logo} alt="kakao" />
            카카오 로그인/회원가입
          </KakaoButton>
          <GoogleButton onClick={handleGoogleLogin}>
            <img src={google_logo} alt="google" />
            구글 로그인/회원가입
          </GoogleButton>
        </ButtonContainer>
      </PageContainer>
    </FlexBox>
  );
};
export default Login;
