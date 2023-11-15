import React from "react";
import { useLocation } from "react-router-dom";
import { AdditionTotalBox, FlexBox, LogoName } from "../style";
import { OtherLabel, RoleLabel } from "./style";

const PlusAddition = () => {
  const { state } = useLocation();
  return (
    <FlexBox style={{ width: "100vw", height: "100vh" }}>
      <AdditionTotalBox>
        <FlexBox style={{ flexDirection: "column" }}>
          <LogoName>Feelow</LogoName>
          <RoleLabel>{state.role}용</RoleLabel>
          <OtherLabel marginTop="66px">학교를 알려주세요.</OtherLabel>
        </FlexBox>
      </AdditionTotalBox>
    </FlexBox>
  );
};

export default PlusAddition;
