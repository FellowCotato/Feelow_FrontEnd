/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { AdditionTotalBox, FlexBox, LogoName, UserInfoBox } from "./style";
import ButtonBox from "../../layouts/ButtonBox";

const TeacherPage = () => {
  const token = localStorage.getItem("token");
  const memberId = localStorage.getItem("memberId");
  const memberType = localStorage.getItem("member_type");

  return (
    <>
      <FlexBox
        style={{
          width: "100vw",
          flexDirection: "column",
          backgroundColor: " #FFFBF8",
        }}
      >
        <AdditionTotalBox>
          <FlexBox style={{ flexDirection: "column" }}>
            <LogoName>Feelow</LogoName>
            <ButtonBox />
          </FlexBox>
        </AdditionTotalBox>
      </FlexBox>
      <UserInfoBox></UserInfoBox>
    </>
  );
};

export default TeacherPage;
