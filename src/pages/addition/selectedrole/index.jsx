/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { AdditionTotalBox, FlexBox, LogoName } from "../style";
import { CheckRegx, OtherLabel, RoleLabel, TextInput } from "./style";
import Select from "react-select";
import { OptionsGrade, OptionsClass, OptionsNumber } from "./components/optionsList.jsx";
import { BlankButton } from "../../../components/button";
import data from "./components/School.json";
import { AdditionalInfoApi } from "../../../utils/User.jsx";
const PlusAddition = () => {
  const memberId = localStorage.getItem("memberId");
  const token = localStorage.getItem("token");

  // 값이 결정되었는데 boolean 확인
  const [isSchool, setIsSchool] = useState(false);
  const [isGrade, setIsGrade] = useState(false);
  const [isClass, setIsClass] = useState(false);
  const [isNumber, setIsNumber] = useState(false);
  const [isName, setIsName] = useState(false);
  const [isNickname, setIsNickname] = useState(false);

  // 유저 정보 저장
  const { state } = useLocation();
  const [userInfo, setUserInfo] = useState({});

  useEffect(() => {
    if (state.role === "선생님") {
      setIsNumber(true);
      setIsNickname(true);
      setUserInfo({
        school: "",
        grade: "",
        class_num: "",
        student_number: null,
        name: "",
        nickname: null,
      });
    } else {
      setUserInfo({
        school: "",
        grade: "",
        class_num: "",
        student_number: "",
        name: "",
        nickname: "",
      });
    }
  }, [state.role]);

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
    setIsSchool(true);
  };
  const handleChangeGrade = (selectedOptionGrade) => {
    setSelectedOptionGrade(selectedOptionGrade);
    setUserInfo({
      ...userInfo,
      grade: selectedOptionGrade.label,
    });
    setIsGrade(true);
  };
  const handleChangeClass = (selectedOptionClass) => {
    setSelectedOptionClass(selectedOptionClass);
    setUserInfo({
      ...userInfo,
      class_num: selectedOptionClass.label,
    });
    setIsClass(true);
  };
  const handleChangeNumber = (selectedOptionNumber) => {
    setSelectedOptionNumber(selectedOptionNumber);
    setUserInfo({
      ...userInfo,
      student_number: selectedOptionNumber.label,
    });
    setIsNumber(true);
  };
  const handleChangeName = (e) => {
    const { name, value } = e.target;
    setUserInfo({
      ...userInfo,
      [name]: value,
    });
    if (value !== "") {
      setIsName(true);
    } else {
      setIsName(false);
    }
  };
  const handleChangeNickname = (e) => {
    const { name, value } = e.target;
    setUserInfo({
      ...userInfo,
      [name]: value,
    });
    if (value !== "") {
      setIsNickname(true);
    } else {
      setIsNickname(false);
    }
    if (value.length < 2) {
      setIsNickname(false);
    }
  };

  const customFilter = (option, rawInput) => {
    const normalizedOption = option.label.toLowerCase();
    const normalizedInput = rawInput.toLowerCase();

    return normalizedOption.startsWith(normalizedInput);
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
      margin: "31px 0.8vw 0px",
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
  const postAddition = async () => {
    try {
      // console.log(userInfo);
      await AdditionalInfoApi(memberId, userInfo, token).then((res) => {
        console.log(res);
        alert("회원가입 되었습니다!\n다시 로그인을 진행해주세요");
      });
    } catch (err) {
      console.log(err);
    }
  };

  const signUpButton = () => {
    if (!isSchool || !isGrade || !isClass || !isNumber || !isName || !isNickname) {
      alert("모든 항목을 작성해주세요!");
    } else {
      postAddition();
    }
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
              placeholder="학교를 선택해주세요"
              value={selectedOptionSchool}
              options={data}
              isSearchable
              onChange={handleChangeSchool}
              styles={fullWidthStyles}
              menuPlacement="bottom"
              filterOption={customFilter}
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
            onChange={handleChangeName}
            autocomplete="off"
          />

          {state.role === "학생" ? (
            <>
              <OtherLabel marginTop="67px">닉네임을 정해주세요.</OtherLabel>
              <TextInput
                marginTop="31px"
                placeholder="여기에 입력해주세요"
                name="nickname"
                value={nickname}
                onChange={handleChangeNickname}
                autocomplete="off"
              />
            </>
          ) : (
            <></>
          )}
          {isNickname ? (
            <CheckRegx
              marginTop="14px"
              style={{ marginLeft: "18px", alignSelf: "flex-start" }}
            ></CheckRegx>
          ) : (
            <CheckRegx marginTop="14px" style={{ alignSelf: "flex-start" }}>
              *두 글자 이상 입력해 주세요.
            </CheckRegx>
          )}
          {isSchool && isGrade && isClass && isNumber && isName && isNickname ? (
            <BlankButton
              backgroundColor="#D7AB6E"
              color="#fff"
              width="279px"
              borderColor="#D7AB6E"
              style={{ margin: "37px 0px 89px" }}
              onClick={signUpButton}
            >
              시작하기
            </BlankButton>
          ) : (
            <BlankButton
              backgroundColor="#D0D0D0"
              color="#fff"
              width="279px"
              borderColor="#D0D0D0"
              style={{ margin: "37px 0px 89px" }}
              onClick={signUpButton}
            >
              시작하기
            </BlankButton>
          )}
        </FlexBox>
      </AdditionTotalBox>
    </FlexBox>
  );
};

export default PlusAddition;
