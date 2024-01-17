/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import {
  AdditionTotalBox,
  Btn,
  BtnDiv,
  Button,
  FlexBox,
  Img,
  InfoDiv,
  InfoInput,
  InfoLabel,
  InfoLabelFixedWidth,
  LogoName,
  Modal,
  ModalHeader,
  ModalParagraph,
  ModalUnderGrayParagraph,
  ModalXButton,
  Placeholder,
  UserInfoBox,
} from "./style";
import characterImg from "../../assets/character_img.svg";
import circleImg from "../../assets/circle_img.svg";
import xButtonImg from "../../assets/xButton_img.svg";
import ButtonBox from "../../layouts/ButtonBox";

const MyPage = () => {
  const [isLogOutModal, setIsLogOutModal] = useState(false);
  const [isSignOutModal, setIsSignOutModal] = useState(false);

  const handleOpenLogOutModal = () => {
    setIsLogOutModal(true);
    setIsSignOutModal(false);
  };
  const handleCloseLogOutModal = () => {
    setIsLogOutModal(false);
  };
  const handleOpenSignOutModal = () => {
    setIsSignOutModal(true);
    setIsLogOutModal(false);
  };
  const handleCloseSignOutModal = () => {
    setIsSignOutModal(false);
  };

  return (
    <>
      <FlexBox style={{ width: "100vw", flexDirection: "column", backgroundColor: " #FFFBF8" }}>
        <AdditionTotalBox>
          <FlexBox style={{ flexDirection: "column" }}>
            <LogoName>Feelow</LogoName>
            <ButtonBox />
          </FlexBox>
        </AdditionTotalBox>
        <UserInfoBox>
          <FlexBox>
            <Img
              Top="270px"
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
            <InfoLabelFixedWidth>학년/반/번호</InfoLabelFixedWidth>
            <InfoInput justifyContent="space-around" width="28%" maxWidth="63px">
              2<Placeholder>학년</Placeholder>
            </InfoInput>
            <InfoInput
              justifyContent="space-around"
              margin="0px 0px 0px 6px"
              width="28%"
              maxWidth="63px"
            >
              2<Placeholder>반</Placeholder>
            </InfoInput>
            <InfoInput
              justifyContent="space-around"
              margin="0px 0px 0px 6px"
              width="28%"
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
          <InfoDiv margin="50px 0px 0px" padding="0px 0px 85px 0px">
            <Button onClick={handleOpenLogOutModal} color="#db6b6b">
              로그아웃
            </Button>
            <Button onClick={handleOpenSignOutModal}>회원탈퇴</Button>
          </InfoDiv>
        </UserInfoBox>
        {isLogOutModal ? (
          <Modal>
            <ModalXButton onClick={handleCloseLogOutModal} src={xButtonImg} alt="xButton" />
            <ModalHeader margin="44px 0px 0px 0px">로그아웃</ModalHeader>
            <ModalParagraph margin="50px 0px 0px 0px">정말 로그아웃 하시겠습니까?</ModalParagraph>
            <BtnDiv>
              <Btn onClick={handleCloseLogOutModal} margin="59px 0px 0px 0px">
                취소
              </Btn>
              <Btn backgroundColor="#D7AB6E" color="#fff" margin="59px 30.5px 0px 15.5px">
                로그아웃
              </Btn>
            </BtnDiv>
          </Modal>
        ) : (
          <></>
        )}
        {isSignOutModal ? (
          <Modal>
            <ModalXButton onClick={handleCloseSignOutModal} src={xButtonImg} alt="xButton" />
            <ModalHeader margin="44px 0px 0px 0px">회원탈퇴</ModalHeader>
            <ModalParagraph margin="42px 0px 0px 0px">정말 탈퇴하시겠습니까?</ModalParagraph>
            <ModalUnderGrayParagraph margin="10px 0px 0px 0px">
              탈퇴 시 계정의 모든 정보는 삭제됩니다.
            </ModalUnderGrayParagraph>
            <BtnDiv>
              <Btn onClick={handleCloseSignOutModal} margin="40px 0px 0px 0px">
                취소
              </Btn>
              <Btn backgroundColor="#D7AB6E" color="#fff" margin="40px 30.5px 0px 15.5px">
                회원탈퇴
              </Btn>
            </BtnDiv>
          </Modal>
        ) : (
          <></>
        )}
      </FlexBox>
    </>
  );
};

export default MyPage;
