/* eslint-disable no-unused-vars */
import React, { useCallback, useEffect, useState } from "react";
import {
  AdditionTotalBox,
  ClassTextDiv,
  FlexBox,
  LogoName,
  StudentListComponent,
  UserInfoComponent,
} from "./style";
import ButtonBox from "../../layouts/ButtonBox";
import { useStateManager } from "react-select";
import { GetStudentListApi } from "../../utils/Teacher";
import character_img from "../../assets/character_img.svg";
import { StudentDiv } from "./component/StudentDiv";
import Pagination from "react-js-pagination";
import "./paging.css";
import { StudentComponent } from "./component/StudentsComponent";

const TeacherPage = () => {
  const token = localStorage.getItem("token");
  const memberId = localStorage.getItem("memberId");
  const memberType = localStorage.getItem("member_type");

  const [grade, setGrade] = useState("");
  const [classNum, setClassNum] = useState("");
  const [studentList, setStudentList] = useState([]);
  const [pageStudentList, setPageStudentList] = useState(null);

  //페이징을 위한 page 변수선언
  const [page, setPage] = useState(1);
  // 페이지 이동함수
  const handlePageChange = (page) => {
    setPage(page);

    takeOffList(page);
  };

  const takeOffList = (page) => {
    const startIndex = 9 * (page - 1);
    const nextLastIndex = 9 * (page - 1) + 9;
    console.log(startIndex);
    setPageStudentList(studentList.slice(startIndex, nextLastIndex));
  };

  const getStudentList = async () => {
    try {
      // await GetStudentListApi(memberId, token).then((res) => {
      //   console.log(res);
      // });
      setGrade("2");
      setClassNum("1");
      setStudentList([
        {
          studentId: 1,
          studentImg: character_img,
          studentName: "김가은",
        },
        {
          studentId: 2,
          studentImg: character_img,
          studentName: "김가연",
        },
        {
          studentId: 3,
          studentImg: character_img,
          studentName: "박가은",
        },
        {
          studentId: 4,
          studentImg: character_img,
          studentName: "박가은",
        },
        {
          studentId: 5,
          studentImg: character_img,
          studentName: "박가은",
        },
        {
          studentId: 6,
          studentImg: character_img,
          studentName: "박가은",
        },
        {
          studentId: 7,
          studentImg: character_img,
          studentName: "박가은",
        },
        {
          studentId: 8,
          studentImg: character_img,
          studentName: "박가은",
        },
        {
          studentId: 9,
          studentImg: character_img,
          studentName: "박가은",
        },
        {
          studentId: 10,
          studentImg: character_img,
          studentName: "박가은",
        },
        {
          studentId: 11,
          studentImg: character_img,
          studentName: "박가은",
        },
        {
          studentId: 12,
          studentImg: character_img,
          studentName: "박가은",
        },
        {
          studentId: 13,
          studentImg: character_img,
          studentName: "박가은",
        },
        {
          studentId: 14,
          studentImg: character_img,
          studentName: "박가은",
        },
        {
          studentId: 15,
          studentImg: character_img,
          studentName: "박가은",
        },
        {
          studentId: 16,
          studentImg: character_img,
          studentName: "박가은",
        },
        {
          studentId: 17,
          studentImg: character_img,
          studentName: "박가은",
        },
        {
          studentId: 18,
          studentImg: character_img,
          studentName: "박가은",
        },
        {
          studentId: 19,
          studentImg: character_img,
          studentName: "박가은",
        },
        {
          studentId: 20,
          studentImg: character_img,
          studentName: "박가은",
        },
        {
          studentId: 21,
          studentImg: character_img,
          studentName: "박가은",
        },
        {
          studentId: 22,
          studentImg: character_img,
          studentName: "박가은",
        },
        {
          studentId: 23,
          studentImg: character_img,
          studentName: "박가은",
        },
        {
          studentId: 24,
          studentImg: character_img,
          studentName: "박가은",
        },
        {
          studentId: 25,
          studentImg: character_img,
          studentName: "박가은",
        },
        {
          studentId: 26,
          studentImg: character_img,
          studentName: "박가은",
        },
        {
          studentId: 27,
          studentImg: character_img,
          studentName: "박가은",
        },
        {
          studentId: 28,
          studentImg: character_img,
          studentName: "김가은",
        },
        {
          studentId: 29,
          studentImg: character_img,
          studentName: "김가연",
        },
        {
          studentId: 30,
          studentImg: character_img,
          studentName: "박가은",
        },
        {
          studentId: 31,
          studentImg: character_img,
          studentName: "박가은",
        },
        {
          studentId: 32,
          studentImg: character_img,
          studentName: "박가은",
        },
        {
          studentId: 33,
          studentImg: character_img,
          studentName: "박가은",
        },
        {
          studentId: 34,
          studentImg: character_img,
          studentName: "박가은",
        },
        {
          studentId: 35,
          studentImg: character_img,
          studentName: "박가은",
        },
        {
          studentId: 36,
          studentImg: character_img,
          studentName: "박가은",
        },
        {
          studentId: 37,
          studentImg: character_img,
          studentName: "박가은",
        },
        {
          studentId: 38,
          studentImg: character_img,
          studentName: "박가은",
        },
        {
          studentId: 39,
          studentImg: character_img,
          studentName: "박가은",
        },
        {
          studentId: 40,
          studentImg: character_img,
          studentName: "박가은",
        },
        {
          studentId: 41,
          studentImg: character_img,
          studentName: "박가은",
        },
        {
          studentId: 42,
          studentImg: character_img,
          studentName: "박가은",
        },
        {
          studentId: 43,
          studentImg: character_img,
          studentName: "박가은",
        },
        {
          studentId: 44,
          studentImg: character_img,
          studentName: "박가은",
        },
        {
          studentId: 45,
          studentImg: character_img,
          studentName: "박가은",
        },
        {
          studentId: 46,
          studentImg: character_img,
          studentName: "박가은",
        },
        {
          studentId: 47,
          studentImg: character_img,
          studentName: "박가은",
        },
        {
          studentId: 48,
          studentImg: character_img,
          studentName: "박가은",
        },
        {
          studentId: 49,
          studentImg: character_img,
          studentName: "박가은",
        },
        {
          studentId: 50,
          studentImg: character_img,
          studentName: "박가은",
        },
        {
          studentId: 51,
          studentImg: character_img,
          studentName: "박가은",
        },
        {
          studentId: 52,
          studentImg: character_img,
          studentName: "박가은",
        },
        {
          studentId: 53,
          studentImg: character_img,
          studentName: "박가은",
        },
        {
          studentId: 54,
          studentImg: character_img,
          studentName: "박가은",
        },
        {
          studentId: 55,
          studentImg: character_img,
          studentName: "김가은",
        },
        {
          studentId: 56,
          studentImg: character_img,
          studentName: "김가연",
        },
        {
          studentId: 57,
          studentImg: character_img,
          studentName: "박가은",
        },
        {
          studentId: 58,
          studentImg: character_img,
          studentName: "박가은",
        },
        {
          studentId: 59,
          studentImg: character_img,
          studentName: "박가은",
        },
        {
          studentId: 60,
          studentImg: character_img,
          studentName: "박가은",
        },
        {
          studentId: 61,
          studentImg: character_img,
          studentName: "박가은",
        },
        {
          studentId: 62,
          studentImg: character_img,
          studentName: "박가은",
        },
        {
          studentId: 63,
          studentImg: character_img,
          studentName: "박가은",
        },
        {
          studentId: 64,
          studentImg: character_img,
          studentName: "박가은",
        },
        {
          studentId: 65,
          studentImg: character_img,
          studentName: "박가은",
        },
        {
          studentId: 66,
          studentImg: character_img,
          studentName: "박가은",
        },
        {
          studentId: 67,
          studentImg: character_img,
          studentName: "박가은",
        },
        {
          studentId: 68,
          studentImg: character_img,
          studentName: "박가은",
        },
        {
          studentId: 69,
          studentImg: character_img,
          studentName: "박가은",
        },
        {
          studentId: 70,
          studentImg: character_img,
          studentName: "박가은",
        },
        {
          studentId: 71,
          studentImg: character_img,
          studentName: "박가은",
        },
        {
          studentId: 72,
          studentImg: character_img,
          studentName: "박가은",
        },
        {
          studentId: 73,
          studentImg: character_img,
          studentName: "박가은",
        },
        {
          studentId: 74,
          studentImg: character_img,
          studentName: "박가은",
        },
        {
          studentId: 75,
          studentImg: character_img,
          studentName: "박가은",
        },
        {
          studentId: 76,
          studentImg: character_img,
          studentName: "박가은",
        },
        {
          studentImg: character_img,
          studentId: 77,
          studentName: "박가은",
        },
        {
          studentImg: character_img,
          studentId: 78,
          studentName: "박가은",
        },
        {
          studentImg: character_img,
          studentId: 79,
          studentName: "박가은",
        },
        {
          studentImg: character_img,
          studentId: 80,
          studentName: "박가은",
        },
      ]);
      handlePageChange(page);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getStudentList();
  }, []);

  useEffect(() => {
    // Check if studentList has been updated before calling handlePageChange
    if (studentList.length > 0) {
      handlePageChange(page);
    }
  }, [studentList]);

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
          <FlexBox>
            {pageStudentList === null ? (
              <></>
            ) : (
              <StudentComponent pageStudentList={pageStudentList}></StudentComponent>
            )}
          </FlexBox>
          <Pagination
            activePage={page}
            itemsCountPerPage={9}
            totalItemsCount={studentList.length}
            pageRangeDisplayed={1}
            prevPageText={"‹"}
            nextPageText={"›"}
            onChange={handlePageChange}
          />
        </UserInfoComponent>
      </FlexBox>
    </>
  );
};

export default TeacherPage;
