/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { AdditionTotalBox, FlexBox, LogoName, AdditionLabel } from "./style";
import { BlankButton } from "../../components/button";
import { useNavigate } from "react-router-dom";
import { SelectRoleApi } from "../../utils/User";

const AdditionRole = () => {
  const [role, setRole] = useState("");
  const navigate = useNavigate();
  const memberId = localStorage.getItem("memberId");
  const token = localStorage.getItem("token");
  const SelectRole = async () => {
    try {
      await SelectRoleApi(memberId, role, token).then((res) => {
        console.log(res);
      });
    } catch (err) {
      console.log(err);
    }
  };

  const selectStudent = () => {
    setRole("학생");
    SelectRole();
    // navigate("/addition/detail", { state: { role: "학생" } });
  };
  const selectTeacher = () => {
    setRole("선생님");
    SelectRole();

    // navigate("/addition/detail", { state: { role: "선생님" } });
  };

  return (
    <FlexBox style={{ width: "100vw", height: "100vh", backgroundColor: " #FFFBF8" }}>
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
