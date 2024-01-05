import React from "react";
import {
  FlexBox,
  PageContainer,
  ButtonContainer,
  LogoContainer,
  HighlightedText,
  Text,
  StartButton,
} from "./style";
import { useNavigate } from "react-router-dom";

import feelow_logo from "../../assets/home_logo.png";

import Background from "../../components/BackGround";

const Home = () => {
  const navigate = useNavigate();

  const handleStartClick = () => {
    // 페이지 로딩 시 토큰을 확인하여 회원 여부 판단
    const token = 0;
    if (token) {
      // 토큰이 있는 경우, 회원이므로 채팅 페이지로 이동
      navigate("/chatting");
    } else {
      // 없는 경우, 로그인 페이지로 이동
      navigate("/login");
    }
  };

  return (
    <FlexBox>
      <PageContainer>
        <Background />
        <Text>
          안녕하세요. <br />
          <HighlightedText>Feelow</HighlightedText> 에 오신걸 환영합니다~!!
        </Text>
        <LogoContainer>
          <img src={feelow_logo} alt="feelow_logo" />
          <ButtonContainer>
            <StartButton onClick={handleStartClick}>시작하기</StartButton>
          </ButtonContainer>
        </LogoContainer>
      </PageContainer>
    </FlexBox>
  );
};

export default Home;
