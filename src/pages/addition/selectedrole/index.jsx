import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { AdditionTotalBox, FlexBox, LogoName } from "../style";
import { OtherLabel, RoleLabel } from "./style";
import Select from "react-select";

const optionsSchool = [
  { value: "서울고등학교", label: "서울고등학교" },
  { value: "서울대학교사범대학부설고등학교", label: "서울대학교사범대학부설고등학교" },
  { value: "서울문명여자고등학교", label: "서울문명여자고등학교" },
  { value: "서울세종고등학교", label: "서울세종고등학교" },
  { value: "서울여자고등학교", label: "서울여자고등학교" },
];

const PlusAddition = () => {
  const { state } = useLocation();
  const [selectedOption, setSelectedOption] = useState("");

  const handleChange = (selectedOption) => {
    setSelectedOption(selectedOption);
  };

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

  return (
    <FlexBox style={{ width: "100vw", height: "100vh", backgroundColor: " #FFFBF8" }}>
      <AdditionTotalBox>
        <FlexBox style={{ flexDirection: "column" }}>
          <LogoName>Feelow</LogoName>
          <RoleLabel>{state.role}용</RoleLabel>
          <OtherLabel marginTop="66px">학교를 알려주세요.</OtherLabel>
          <FlexBox>
            <Select
              placeholder="학교를 선택해주세요."
              value={selectedOption}
              options={optionsSchool}
              isSearchable
              onChange={handleChange}
              styles={fullWidthStyles}
              menuPlacement="bottom"
            />
          </FlexBox>
        </FlexBox>
      </AdditionTotalBox>
    </FlexBox>
  );
};

export default PlusAddition;
