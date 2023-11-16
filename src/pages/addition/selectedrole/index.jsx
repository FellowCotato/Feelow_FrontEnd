import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { AdditionTotalBox, FlexBox, LogoName } from "../style";
import { OtherLabel, RoleLabel, TextInput } from "./style";
import Select from "react-select";
import { OptionsSchool, OptionsGrade, OptionsClass, OptionsNumber } from "./components/optionsList";
import { BlankButton } from "../../../components/button";

const PlusAddition = () => {
  // 값이 결정되었는데 boolean 확인

  // 유저 정보 저장
  const { state } = useLocation();
  const [userInfo, setUserInfo] = useState({
    role: state.role,
    school: "",
    grade: "",
    class: "",
    number: "",
    name: "",
    nickname: "",
  });
  const { name, nickname } = userInfo;

  // 선택된 값 저장
  const [selectedOptionSchool, setSelectedOptionSchool] = useState("");
  const [selectedOptionGrade, setSelectedOptionGrade] = useState("");
  const [selectedOptionClass, setSelectedOptionClass] = useState("");
  const [selectedOptionNumber, setSelectedOptionNumber] = useState("");

  const handleChangeSchool = (selectedOptionSchool) => {
    setSelectedOptionSchool(selectedOptionSchool);
    setUserInfo({
      ...userInfo,
      school: selectedOptionSchool.label,
    });
  };
  const handleChangeGrade = (selectedOptionGrade) => {
    setSelectedOptionGrade(selectedOptionGrade);
    setUserInfo({
      ...userInfo,
      grade: selectedOptionGrade.label,
    });
  };
  const handleChangeClass = (selectedOptionClass) => {
    setSelectedOptionClass(selectedOptionClass);
    setUserInfo({
      ...userInfo,
      class: selectedOptionClass.label,
    });
  };
  const handleChangeNumber = (selectedOptionNumber) => {
    setSelectedOptionNumber(selectedOptionNumber);
    setUserInfo({
      ...userInfo,
      number: selectedOptionNumber.label,
    });
  };
  const TextChange = (e) => {
    const { name, value } = e.target;
    setUserInfo({
      ...userInfo,
      [name]: value,
    });
  };

  // react-select 몇가지 설정
  const fullWidthStyles = {
    control: (provided, state) => ({
      ...provided,
      marginTop: "31px",
      width: "85vw",
      maxWidth: "500px",
      height: "49px",
      borderRadius: "18px",
      border: "2px solid #809F80",
      color: "white",
      backgroundColor: "#FFF",
      borderColor: state.isFocused ? "#809F80" : provided.borderColor,
      boxShadow: state.isFocused ? "0 0 0 1px #809F80" : provided.boxShadow,

      ":hover": {
        border: "2px solid #809F80",
        color: "white",
      },
    }),
    menu: (provided) => ({
      ...provided,
      position: "absolute",
      width: "100%",
      zIndex: 1,
    }),
    menuList: (provided) => ({
      ...provided,
      maxHeight: "170px",
      overflowY: "scroll",
      border: "2px solid #809F80",
      "&::-webkit-scrollbar": {
        width: "8px", // Set the width of the scrollbar
      },
      "&::-webkit-scrollbar-thumb": {
        backgroundColor: "#ccc", // Set the color of the scrollbar thumb
        borderRadius: "4px", // Set the border radius of the scrollbar thumb
        marginRight: "10px",
      },
    }),
    option: (provided) => ({
      ...provided,
      width: "96%",
      height: "40px",
      backgroundColor: "none",
      color: "black",
      ":hover": {
        backgroundColor: " #D7AB6E",
        color: "white",
      },
    }),
  };

  const oneThirdWidthStyles = {
    control: (provided, state) => ({
      ...provided,
      margin: "31px 1vw 0px",
      paddingLeft: "6px",
      width: "27vw",
      maxWidth: "151px",
      height: "49px",
      borderRadius: "18px",
      border: "2px solid #809F80",
      color: "white",
      backgroundColor: "#FFF",
      borderColor: state.isFocused ? "#809F80" : provided.borderColor,
      boxShadow: state.isFocused ? "0 0 0 1px #809F80" : provided.boxShadow,

      ":hover": {
        border: "2px solid #809F80",
        color: "white",
      },
    }),
    menu: (provided) => ({
      ...provided,
      position: "absolute",
      width: "100%",
      zIndex: 1,
    }),
    menuList: (provided) => ({
      ...provided,
      maxHeight: "170px",
      overflowY: "scroll",
      border: "2px solid #809F80",
      "&::-webkit-scrollbar": {
        width: "8px", // Set the width of the scrollbar
      },
      "&::-webkit-scrollbar-thumb": {
        backgroundColor: "#ccc", // Set the color of the scrollbar thumb
        borderRadius: "4px", // Set the border radius of the scrollbar thumb
        marginRight: "10px",
      },
    }),
    option: (provided) => ({
      ...provided,
      width: "96%",
      height: "40px",
      backgroundColor: "none",
      color: "black",
      ":hover": {
        backgroundColor: " #D7AB6E",
        color: "white",
      },
    }),
  };
  const halfWidthStyles = {
    control: (provided, state) => ({
      ...provided,
      margin: "31px 10px 0px",
      paddingLeft: "6px",
      width: "40vw",
      maxWidth: "240px",
      height: "49px",
      borderRadius: "18px",
      border: "2px solid #809F80",
      color: "white",
      backgroundColor: "#FFF",
      borderColor: state.isFocused ? "#809F80" : provided.borderColor,
      boxShadow: state.isFocused ? "0 0 0 1px #809F80" : provided.boxShadow,

      ":hover": {
        border: "2px solid #809F80",
        color: "white",
      },
    }),
    menu: (provided) => ({
      ...provided,
      position: "absolute",
      width: "100%",
      zIndex: 1,
    }),
    menuList: (provided) => ({
      ...provided,
      maxHeight: "170px",
      overflowY: "scroll",
      border: "2px solid #809F80",
      "&::-webkit-scrollbar": {
        width: "8px", // Set the width of the scrollbar
      },
      "&::-webkit-scrollbar-thumb": {
        backgroundColor: "#ccc", // Set the color of the scrollbar thumb
        borderRadius: "4px", // Set the border radius of the scrollbar thumb
        marginRight: "10px",
      },
    }),
    option: (provided) => ({
      ...provided,
      width: "96%",
      height: "40px",
      backgroundColor: "none",
      color: "black",
      ":hover": {
        backgroundColor: " #D7AB6E",
        color: "white",
      },
    }),
  };

  return (
    <FlexBox style={{ width: "100vw", backgroundColor: " #FFFBF8" }}>
      <AdditionTotalBox>
        <FlexBox style={{ flexDirection: "column" }}>
          <LogoName>Feelow</LogoName>
          <RoleLabel>{state.role}용</RoleLabel>
          <OtherLabel marginTop="66px">학교를 알려주세요.</OtherLabel>
          <FlexBox>
            <Select
              placeholder="학교를 선택해주세요."
              value={selectedOptionSchool}
              options={OptionsSchool}
              isSearchable
              onChange={handleChangeSchool}
              styles={fullWidthStyles}
              menuPlacement="bottom"
            />
          </FlexBox>
          <OtherLabel marginTop="66px">학년/반을 알려주세요.</OtherLabel>
          {state.role === "학생" ? (
            <FlexBox>
              <Select
                placeholder="학년"
                value={selectedOptionGrade}
                options={OptionsGrade}
                isSearchable
                onChange={handleChangeGrade}
                styles={oneThirdWidthStyles}
                menuPlacement="bottom"
              />
              <Select
                placeholder="반"
                value={selectedOptionClass}
                options={OptionsClass}
                isSearchable
                onChange={handleChangeClass}
                styles={oneThirdWidthStyles}
                menuPlacement="bottom"
              />
              <Select
                placeholder="번호"
                value={selectedOptionNumber}
                options={OptionsNumber}
                isSearchable
                onChange={handleChangeNumber}
                styles={oneThirdWidthStyles}
                menuPlacement="bottom"
              />
            </FlexBox>
          ) : (
            <FlexBox>
              <Select
                placeholder="학년"
                value={selectedOptionGrade}
                options={OptionsGrade}
                isSearchable
                onChange={handleChangeGrade}
                styles={halfWidthStyles}
                menuPlacement="bottom"
              />
              <Select
                placeholder="반"
                value={selectedOptionClass}
                options={OptionsClass}
                isSearchable
                onChange={handleChangeClass}
                styles={halfWidthStyles}
                menuPlacement="bottom"
              />
            </FlexBox>
          )}
          <OtherLabel marginTop="67px">이름을 알려주세요.</OtherLabel>
          <TextInput
            style={{ marginTop: "31px" }}
            placeholder="여기에 입력해주세요"
            name="name"
            value={name}
            onChange={TextChange}
            autocomplete="off"
          />

          {state.role === "학생" ? (
            <>
              <OtherLabel marginTop="67px">닉네임을 정해주세요.</OtherLabel>
              <TextInput
                style={{ marginTop: "31px" }}
                placeholder="두 글자 이상 입력해주세요."
                name="nickname"
                value={nickname}
                onChange={TextChange}
                autocomplete="off"
              />
            </>
          ) : (
            <></>
          )}
          <p>두 글자 이상 입력해주세요.</p>
          <BlankButton style={{ margin: "36px 0px 89px" }}></BlankButton>
          <div>{userInfo.role}</div>
          <div>{userInfo.school}</div>
          <div>{userInfo.grade}</div>
          <div>{userInfo.class}</div>
          <div>{userInfo.name}</div>
          {state.role === "학생" ? <div>{userInfo.nickname}</div> : <></>}
        </FlexBox>
      </AdditionTotalBox>
    </FlexBox>
  );
};

export default PlusAddition;
