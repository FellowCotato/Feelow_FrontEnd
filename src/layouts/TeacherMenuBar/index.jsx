import React, { useEffect, useState } from "react";
import { ButtonWrapper, Button, Buttons, ButtonContainer, ClassInfo } from "./style";
import { ReactComponent as StoreImg } from "../../assets/store_img.svg";
import { ReactComponent as ProfileImg } from "../../assets/profile_img.svg";
import { ReactComponent as CalendarImg } from "../../assets/calendar_img.svg";

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
          <Button
            to="/teacher"
            color={isStudentListActive ? "#D7AB6E" : page === "studentList" ? "#B19B8F" : "#B0B0B0"}
          >
            <StoreImg
              fill={
                isStudentListActive ? "#D7AB6E" : page === "studentList" ? "#B19B8F" : "#B0B0B0"
              }
            />
            <p>명단</p>
          </Button>

          <Button
            to="/studentChart"
            color={isStudentChartActive ? "#D7AB6E" : page === "chatting" ? "#B19B8F" : "#B0B0B0"}
          >
            <CalendarImg
              fill={isStudentChartActive ? "#D7AB6E" : page === "chatting" ? "#B19B8F" : "#B0B0B0"}
            />
            <p>학생차트</p>
          </Button>
          <Button
            to="/profile"
            color={isProfileActive ? "#D7AB6E" : page === "chatting" ? "#B19B8F" : "#B0B0B0"}
          >
            <ProfileImg
              fill={isProfileActive ? "#D7AB6E" : page === "chatting" ? "#B19B8F" : "#B0B0B0"}
            />
            <p>프로필</p>
          </Button>
        </Buttons>
      </ButtonContainer>
    </ButtonWrapper>
  );
};

export default React.memo(TeacherMenu);
