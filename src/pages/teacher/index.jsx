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
import character_img from "../../assets/feelow_character.png";
import { StudentDiv } from "./component/StudentDiv";
import Pagination from "react-js-pagination";
import "./paging.css";
import { StudentComponent } from "./component/StudentsComponent";
import useWindowSize from "../../hook/WindowSize";
import TeacherMenu from "../../layouts/TeacherMenuBar";

const TeacherPage = () => {
  const token = localStorage.getItem("token");
  const memberId = localStorage.getItem("memberId");
  const memberType = localStorage.getItem("member_type");

  // 윈도우 브라우저 너비
  const { width } = useWindowSize();
  const [grade, setGrade] = useState("");
  const [classNum, setClassNum] = useState("");
  const [studentList, setStudentList] = useState([]);
  const [pageStudentList, setPageStudentList] = useState(null);

  //페이징을 위한 page 변수선언
  const [page, setPage] = useState(1);
  const perPage = width > 768 ? 12 : 9;
  // const [perPage, setPerPage] = useState(width > 768 ? 12 : 9);
  // 페이지 이동함수
  const handlePageChange = (page) => {
    setPage(page);
    takeOffList(page);
  };
  const [totalPage, setTotalPage] = useState();

  const takeOffList = (page) => {
    const startIndex = perPage * (page - 1);
    const nextLastIndex = perPage * (page - 1) + perPage;
    console.log(startIndex);
    setPageStudentList(studentList.slice(startIndex, nextLastIndex));
  };

  const getStudentList = async () => {
    try {
      console.log(token);
      await GetStudentListApi(memberId, token).then((res) => {
        console.log(res);
        if (res.data.statusCode === 200) {
          setGrade(res.data.data.grade);
          setClassNum(res.data.data.classNum);
          setStudentList(res.data.data.students);
          setTotalPage(Math.ceil(studentList.length / perPage));
        }
      });

      // setGrade("2");
      // setClassNum("1");
      // setStudentList([
      //   {
      //     studentId: 1,
      //     studentNum: 1,
      //     studentImg: character_img,
      //     studentName: "김가은",
      //   },
      //   {
      //     studentId: 2,
      //     studentNum: 1,
      //     studentImg: character_img,
      //     studentName: "김가연",
      //   },
      //   {
      //     studentId: 3,
      //     studentNum: 1,
      //     studentImg: character_img,
      //     studentName: "박가은",
      //   },
      //   {
      //     studentId: 4,
      //     studentNum: 1,
      //     studentImg: character_img,
      //     studentName: "박가은",
      //   },
      //   {
      //     studentId: 5,
      //     studentNum: 1,
      //     studentImg: character_img,
      //     studentName: "박가은",
      //   },
      //   {
      //     studentId: 6,
      //     studentNum: 1,
      //     studentImg: character_img,
      //     studentName: "박가은",
      //   },
      //   {
      //     studentId: 7,
      //     studentNum: 1,
      //     studentImg: character_img,
      //     studentName: "박가은",
      //   },
      //   {
      //     studentId: 8,
      //     studentNum: 1,
      //     studentImg: character_img,
      //     studentName: "박가은",
      //   },
      //   {
      //     studentId: 9,
      //     studentNum: 1,
      //     studentImg: character_img,
      //     studentName: "박가은",
      //   },
      //   {
      //     studentId: 10,
      //     studentNum: 1,
      //     studentImg: character_img,
      //     studentName: "박가은",
      //   },
      //   {
      //     studentId: 11,
      //     studentNum: 1,
      //     studentImg: character_img,
      //     studentName: "박가은",
      //   },
      //   {
      //     studentId: 12,
      //     studentNum: 1,
      //     studentImg: character_img,
      //     studentName: "박가은",
      //   },
      //   {
      //     studentId: 13,
      //     studentNum: 1,
      //     studentImg: character_img,
      //     studentName: "박가은",
      //   },
      //   {
      //     studentId: 14,
      //     studentNum: 1,
      //     studentImg: character_img,
      //     studentName: "박가은",
      //   },
      //   {
      //     studentId: 15,
      //     studentNum: 1,
      //     studentImg: character_img,
      //     studentName: "박가은",
      //   },
      //   {
      //     studentId: 16,
      //     studentNum: 1,
      //     studentImg: character_img,
      //     studentName: "박가은",
      //   },
      //   {
      //     studentId: 17,
      //     studentNum: 1,
      //     studentImg: character_img,
      //     studentName: "박가은",
      //   },
      //   {
      //     studentId: 18,
      //     studentNum: 1,
      //     studentImg: character_img,
      //     studentName: "박가은",
      //   },
      //   {
      //     studentId: 19,
      //     studentNum: 1,
      //     studentImg: character_img,
      //     studentName: "박가은",
      //   },
      //   {
      //     studentId: 20,
      //     studentNum: 1,
      //     studentImg: character_img,
      //     studentName: "박가은",
      //   },
      //   {
      //     studentId: 21,
      //     studentNum: 1,
      //     studentImg: character_img,
      //     studentName: "박가은",
      //   },
      //   {
      //     studentId: 22,
      //     studentNum: 1,
      //     studentImg: character_img,
      //     studentName: "박가은",
      //   },
      //   {
      //     studentId: 23,
      //     studentNum: 1,
      //     studentImg: character_img,
      //     studentName: "박가은",
      //   },
      //   {
      //     studentId: 24,
      //     studentNum: 1,
      //     studentImg: character_img,
      //     studentName: "박가은",
      //   },
      //   {
      //     studentId: 25,
      //     studentNum: 1,
      //     studentImg: character_img,
      //     studentName: "박가은",
      //   },
      //   {
      //     studentId: 26,
      //     studentNum: 1,
      //     studentImg: character_img,
      //     studentName: "박가은",
      //   },
      //   {
      //     studentId: 27,
      //     studentNum: 1,
      //     studentImg: character_img,
      //     studentName: "박가은",
      //   },
      //   {
      //     studentId: 28,
      //     studentNum: 1,
      //     studentImg: character_img,
      //     studentName: "박가은",
      //   },
      //   {
      //     studentId: 29,
      //     studentNum: 1,
      //     studentImg: character_img,
      //     studentName: "박가은",
      //   },
      //   {
      //     studentId: 30,
      //     studentNum: 1,
      //     studentImg: character_img,
      //     studentName: "박가은",
      //   },
      // ]);
      // setTotalPage(Math.ceil(studentList.length / perPage));
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
            {/* <ButtonBox /> */}
            <TeacherMenu page="studentList" grade={grade} classNum={classNum} />
          </FlexBox>
        </AdditionTotalBox>
        <UserInfoComponent>
          <ClassTextDiv>
            {grade}학년 {classNum}반
          </ClassTextDiv>
          <FlexBox>
            {pageStudentList === null ? (
              <></>
            ) : (
              <StudentComponent
                perPage={perPage}
                pageStudentList={pageStudentList}
              ></StudentComponent>
            )}
          </FlexBox>
          <Pagination
            activePage={page}
            itemsCountPerPage={width > 768 ? 12 : 9}
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
