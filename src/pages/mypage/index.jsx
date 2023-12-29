import React from "react";
import { AdditionTotalBox, FlexBox, LogoName, UserInfoBox } from "./style";

const MyPage = () => {
  return (
    <>
      <FlexBox style={{ width: "100vw", flexDirection: "column", backgroundColor: " #FFFBF8" }}>
        <AdditionTotalBox>
          <FlexBox style={{ flexDirection: "column" }}>
            <LogoName>Feelow</LogoName>
            <div style={{ height: "40px" }}>상단 메뉴바 가져와서 추가할 계획</div>
          </FlexBox>
        </AdditionTotalBox>
        <UserInfoBox></UserInfoBox>
      </FlexBox>
    </>
  );
};

export default MyPage;
