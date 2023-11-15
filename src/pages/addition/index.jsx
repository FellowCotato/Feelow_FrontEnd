/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { AdditionTotalBox, FlexBox, LogoName, AdditionLabel } from "./style";
import { BlankButton } from "../../components/button";

const AdditionRole = () => {
  const [role, setRole] = useState("");

  const selectStudent = () => {
    setRole("학생");
  };
  const selectTeacher = () => {
    setRole("선생님");
  };

  return (
    <FlexBox style={{ width: "100vw", height: "100vh" }}>
      <AdditionTotalBox>
        <LogoName>Feelow</LogoName>
        <AdditionLabel>학생/선생님을 선택해주세요.</AdditionLabel>
        <FlexBox style={{ marginTop: "82px" }}>
          <BlankButton onClick={selectStudent} borderColor="#809F80">
            학생
          </BlankButton>
          <BlankButton onClick={selectTeacher} borderColor="#809F80">
            선생님
          </BlankButton>
        </FlexBox>
      </AdditionTotalBox>
    </FlexBox>
  );
};

export default AdditionRole;
