/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { AdditionTotalBox, FlexBox, LogoName, UserInfoBox } from "./style";
import ButtonBox from "../../layouts/ButtonBox";
import { useStateManager } from "react-select";

const TeacherPage = () => {
  const token = localStorage.getItem("token");
  const memberId = localStorage.getItem("memberId");
  const memberType = localStorage.getItem("member_type");

  const [grade, setGrade] = useState("");
  const [classNum, setClassNum] = useState("");
  const [studentList, setStudentList] = useState({});

  return (
    <>
      <FlexBox style={{ width: "100vw", flexDirection: "column", backgroundColor: " #FFFBF8" }}>
        <AdditionTotalBox>
          <FlexBox style={{ flexDirection: "column" }}>
            <LogoName>Feelow</LogoName>
            <ButtonBox />
          </FlexBox>
        </AdditionTotalBox>

        <UserInfoBox></UserInfoBox>
      </FlexBox>
    </>
  );
};

export default TeacherPage;
