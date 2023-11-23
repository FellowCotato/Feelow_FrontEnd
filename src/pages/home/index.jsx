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

import feelow_logo from "../../assets/home_logo.png";

import Background from "../../components/BackGround";

const Home = () => {
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
            <StartButton>시작하기</StartButton>
          </ButtonContainer>
        </LogoContainer>
      </PageContainer>
    </FlexBox>
  );
};

export default Home;
