/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { AdditionTotalBox, ClassTextDiv, FlexBox, LogoName, UserInfoComponent } from "./style";
import ButtonBox from "../../layouts/ButtonBox";
import { useStateManager } from "react-select";
import { GetStudentListApi } from "../../utils/Teacher";
import character_img from "../../assets/character_img.svg";
import { StudentDiv } from "./component/StudentDiv";

const TeacherPage = () => {
  const token = localStorage.getItem("token");
  const memberId = localStorage.getItem("memberId");
  const memberType = localStorage.getItem("member_type");

  const [grade, setGrade] = useState("");
  const [classNum, setClassNum] = useState("");
  const [studentList, setStudentList] = useState({});

  const getStudentList = async () => {
    try {
      // await GetStudentListApi(memberId, token).then((res) => {
      //   console.log(res);
      // });
      setGrade("2");
      setClassNum("1");
      setStudentList([
        {
          studentImg: character_img,
          studentId: 1,
          studentName: "김가은",
        },
        {
          studentImg: character_img,
          studentId: 2,
          studentName: "김가연",
        },
        {
          studentImg: character_img,
          studentId: 3,
          studentName: "박가은",
        },
        {
          studentImg: character_img,
          studentId: 3,
          studentName: "박가은",
        },
        {
          studentImg: character_img,
          studentId: 3,
          studentName: "박가은",
        },
        {
          studentImg: character_img,
          studentId: 3,
          studentName: "박가은",
        },
        {
          studentImg: character_img,
          studentId: 3,
          studentName: "박가은",
        },
        {
          studentImg: character_img,
          studentId: 3,
          studentName: "박가은",
        },
        {
          studentImg: character_img,
          studentId: 3,
          studentName: "박가은",
        },
        {
          studentImg: character_img,
          studentId: 3,
          studentName: "박가은",
        },
        {
          studentImg: character_img,
          studentId: 3,
          studentName: "박가은",
        },
        {
          studentImg: character_img,
          studentId: 3,
          studentName: "박가은",
        },
        {
          studentImg: character_img,
          studentId: 3,
          studentName: "박가은",
        },
        {
          studentImg: character_img,
          studentId: 3,
          studentName: "박가은",
        },
        {
          studentImg: character_img,
          studentId: 3,
          studentName: "박가은",
        },
        {
          studentImg: character_img,
          studentId: 3,
          studentName: "박가은",
        },
        {
          studentImg: character_img,
          studentId: 3,
          studentName: "박가은",
        },
        {
          studentImg: character_img,
          studentId: 3,
          studentName: "박가은",
        },
        {
          studentImg: character_img,
          studentId: 3,
          studentName: "박가은",
        },
        {
          studentImg: character_img,
          studentId: 3,
          studentName: "박가은",
        },
        {
          studentImg: character_img,
          studentId: 3,
          studentName: "박가은",
        },
        {
          studentImg: character_img,
          studentId: 3,
          studentName: "박가은",
        },
        {
          studentImg: character_img,
          studentId: 3,
          studentName: "박가은",
        },
        {
          studentImg: character_img,
          studentId: 3,
          studentName: "박가은",
        },
        {
          studentImg: character_img,
          studentId: 3,
          studentName: "박가은",
        },
        {
          studentImg: character_img,
          studentId: 3,
          studentName: "박가은",
        },
        {
          studentImg: character_img,
          studentId: 3,
          studentName: "박가은",
        },
      ]);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getStudentList();
  }, []);

  return (
    <>
      <FlexBox style={{ width: "100vw", flexDirection: "column", backgroundColor: " #FFFBF8" }}>
        <AdditionTotalBox>
          <FlexBox style={{ flexDirection: "column" }}>
            <LogoName>Feelow</LogoName>
            <ButtonBox />
          </FlexBox>
        </AdditionTotalBox>
        <UserInfoComponent>
          <ClassTextDiv>2학년 2반</ClassTextDiv>
          <StudentDiv />
        </UserInfoComponent>
      </FlexBox>
    </>
  );
};

export default TeacherPage;
