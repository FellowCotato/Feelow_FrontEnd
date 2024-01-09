/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import {
  TotalBox,
  FlexBox,
  LogoName,
  TotalCompleteFoam,
  DashedCompleteFoam,
  TextDiv,
  TextDivHeader,
  TextDivParagraph,
  TextDivParagraph2,
  ButtonDiv,
} from "./style";
import { useNavigate } from "react-router-dom";
import { GetSimpleInfoApi } from "../../utils/User";

const LoginComplete = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const [email, setEmail] = useState("");
  const [nickname, setNickname] = useState("");

  const getInfo = async () => {
    try {
      await GetSimpleInfoApi(token).then((res) => {
        console.log(res);
        setEmail(res.data.email);
        setNickname(res.data.nickname);
      });
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getInfo();
  }, []);

  return (
    <>
      <FlexBox
        style={{
          flexDirection: "column",
          width: "100vw",
          height: "100vh",
          backgroundColor: "#FFFBF8",
          justifyContent: "flex-start",
        }}
      >
        <TotalBox>
          <LogoName>Feelow</LogoName>
        </TotalBox>
        <TotalCompleteFoam>
          <DashedCompleteFoam>
            <FlexBox style={{ flexDirection: "column" }}>
              <TextDivHeader>Feelow 회원가입 완료</TextDivHeader>
              <TextDivParagraph>{nickname}님 반갑습니다!!</TextDivParagraph>
              <TextDivParagraph2>
                {email} 회원정보와 카카오계정 가입 및 연결 완료되었습니다.
              </TextDivParagraph2>
              <ButtonDiv
                onClick={() => {
                  navigate("/addition");
                }}
              >
                추가정보 입력하기
              </ButtonDiv>{" "}
            </FlexBox>
          </DashedCompleteFoam>
        </TotalCompleteFoam>
      </FlexBox>
    </>
  );
};

export default LoginComplete;
