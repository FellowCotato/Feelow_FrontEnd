/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { AdditionTotalBox, FlexBox, LogoName, AdditionLabel } from "./style";
import { BlankButton } from "../../components/button";
import { useNavigate } from "react-router-dom";
import { SelectRoleApi } from "../../utils/User";

const AdditionRole = () => {
  const memberId = localStorage.getItem("memberId");
  const token = localStorage.getItem("token");
  const [role, setRole] = useState("");
  const navigate = useNavigate();

  const SelectRole = async () => {
    try {
      await SelectRoleApi(memberId, role, token).then((res) => {
        console.log(res);

        if (res.data.success === false) {
          alert("해당 ID의 회원을 찾을 수 없습니다.");
        } else {
          const member_type = res.data.data.member_type;
          localStorage.setItem("member_type", member_type);
          navigate("/addition/detail", { state: { role: role } });
        }
      });
    } catch (err) {
      console.log(err);
    }
  };

  const selectStudent = () => {
    setRole("학생");
    // navigate("/addition/detail", { state: { role: "학생" } });
    SelectRole();
  };
  const selectTeacher = () => {
    setRole("선생님");
    // navigate("/addition/detail", { state: { role: "선생님" } });

    SelectRole();
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
