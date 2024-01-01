import React from "react";
import {
  AdditionTotalBox,
  FlexBox,
  Img,
  InfoDiv,
  InfoInput,
  InfoLabel,
  LogoName,
  Placeholder,
  UserInfoBox,
} from "./style";
import characterImg from "../../assets/character_img.svg";
import circleImg from "../../assets/circle_img.svg";

const MyPage = () => {
  return (
    <>
      <FlexBox style={{ width: "100vw", flexDirection: "column", backgroundColor: " #FFFBF8" }}>
        <AdditionTotalBox>
          <FlexBox style={{ flexDirection: "column" }}>
            <LogoName>Feelow</LogoName>
            <div style={{ height: "40px" }}>상단 메뉴바 가져와서 추가할 계획</div>
          </FlexBox>
        </AdditionTotalBox>
        <UserInfoBox>
          <FlexBox>
            <Img
              Top="220px"
              width="210px"
              height="255px"
              zIndex="2"
              margin="0px 0px 0px -20px"
              src={characterImg}
              alt="character"
            />
            <Img src={circleImg} alt="character" />
          </FlexBox>
          <InfoDiv margin="410px 0px 0px 0px">
            <InfoLabel>학교</InfoLabel>
            <InfoInput>서울대학교사범대학부설고등학교</InfoInput>
          </InfoDiv>
          <InfoDiv margin="33px 0px 0px 0px">
            <InfoLabel>학년/반/번호</InfoLabel>
            <InfoInput justifyContent="space-around" width="32%" maxWidth="63px">
              2<Placeholder>학년</Placeholder>
            </InfoInput>
            <InfoInput
              justifyContent="space-around"
              margin="0px 0px 0px 6px"
              width="32%"
              maxWidth="63px"
            >
              2<Placeholder>반</Placeholder>
            </InfoInput>
            <InfoInput
              justifyContent="space-around"
              margin="0px 0px 0px 6px"
              width="32%"
              maxWidth="63px"
            >
              2<Placeholder>번호</Placeholder>
            </InfoInput>
          </InfoDiv>
          <InfoDiv margin="33px 0px 0px 0px">
            <InfoLabel>이름</InfoLabel>
            <InfoInput>강희수</InfoInput>
          </InfoDiv>
          <InfoDiv margin="33px 0px 0px 0px">
            <InfoLabel>닉네임</InfoLabel>
            <InfoInput>빛나는물</InfoInput>
          </InfoDiv>
        </UserInfoBox>
      </FlexBox>
    </>
  );
};

export default MyPage;
