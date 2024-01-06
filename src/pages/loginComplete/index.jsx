/* eslint-disable no-unused-vars */
import React from "react";
import {
  TotalBox,
  FlexBox,
  LogoName,
  TotalCompleteFoam,
  DashedCompleteFoam,
  TextDiv,
  TextDivHeader,
  TextDivParagraph,
  TextDivParagraph2,
  ButtonDiv,
} from "./style";

const LoginComplete = () => {
  return (
    <>
      <FlexBox
        style={{
          flexDirection: "column",
          width: "100vw",
          height: "100vh",
          backgroundColor: " #FFFBF8",
        }}
      >
        <TotalBox>
          <LogoName>Feelow</LogoName>
        </TotalBox>
        <TotalCompleteFoam>
          <DashedCompleteFoam>
            <FlexBox style={{ flexDirection: "column" }}>
              <TextDivHeader>Feelow 회원가입 완료</TextDivHeader>
              <TextDivParagraph>강희수님 반갑습니다!!</TextDivParagraph>
              <TextDivParagraph2>
                000@000.com 회원정보와 카카오계정 가입 및 연결 완료되었습니다.
              </TextDivParagraph2>
              <ButtonDiv>추가정보 입력하기</ButtonDiv>
            </FlexBox>
          </DashedCompleteFoam>
        </TotalCompleteFoam>
      </FlexBox>
    </>
  );
};

export default LoginComplete;
