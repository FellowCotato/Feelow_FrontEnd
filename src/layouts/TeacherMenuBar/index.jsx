/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { ButtonWrapper, Button, Buttons, ButtonContainer, ClassInfo } from "./style";
import { ReactComponent as StudentListImg } from "../../assets/studentList_img.svg";
import { ReactComponent as StudentChartImg } from "../../assets/studentChart_img.svg";
import { ReactComponent as ProfileImg } from "../../assets/teacherProfile_img.svg";
import { ReactComponent as ColorStudentListImg } from "../../assets/colorStudentList_img.svg";
import { ReactComponent as ColorStudentChartImg } from "../../assets/colorStudentChart_img.svg";
import { ReactComponent as ColorProfileImg } from "../../assets/colorTeacherProfile_img.svg";

const TeacherMenu = ({ page, grade, classNum }) => {
  const [isStudentListActive, setIsStudentListActive] = useState(page === "studentList");
  const [isStudentChartActive, setIsStudentChartActive] = useState(page === "studentChart");
  const [isProfileActive, setIsProfileActive] = useState(page === "profile");

  useEffect(() => {
    setIsStudentListActive(page === "studentList");
    setIsStudentChartActive(page === "studentChart");
    setIsProfileActive(page === "profile");
  }, [page]);

  return (
    <ButtonWrapper>
      <ButtonContainer>
        <ClassInfo>
          {grade}-{classNum}
        </ClassInfo>
        <Buttons>
          <Button to="/teacher" color={isStudentListActive ? "#D7AB6E" : "#B0B0B0"}>
            {isStudentListActive ? <ColorStudentListImg /> : <StudentListImg />}
            <p>명단</p>
          </Button>

          <Button to="/studentChart" color={isStudentChartActive ? "#D7AB6E" : "#B0B0B0"}>
            {isStudentChartActive ? <ColorStudentChartImg /> : <StudentChartImg />}
            <p>학생차트</p>
          </Button>
          <Button to="/mypage" color={isProfileActive ? "#D7AB6E" : "#B0B0B0"}>
            {isProfileActive ? <ColorProfileImg /> : <ProfileImg />}
            <p>프로필</p>
          </Button>
        </Buttons>
      </ButtonContainer>
    </ButtonWrapper>
  );
};

export default React.memo(TeacherMenu);
