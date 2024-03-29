import styled from "styled-components";

export const FlexBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const AdditionTotalBox = styled.div`
  width: 100%;
  height: 130%;
  /* max-width: 510px; */
`;
export const LogoName = styled.div`
  margin: 30px 0px 0px 0px;
  color: #809f80;
  text-align: center;
  font-family: "Coiny";
  font-size: 35px;
  font-weight: 400;
  letter-spacing: 0.7px;
`;

export const UserInfoBox = styled.div`
  width: 100%;
  height: 100%;
  background-color: #f7f0ea;
`;

export const Img = styled.img`
  position: absolute;
  width: ${(props) => props.width || "253px"};
  height: ${(props) => props.height || "253px"};
  z-index: ${(props) => props.zIndex || "1"};
  top: ${(props) => props.Top || "230px"};
  margin: ${(props) => props.margin || "0px"};
  @media screen and (max-width: 480px) {
    top: 210px;
  }
`;
export const CharacterImage = styled(Img)`
  top: 320px;
  @media screen and (max-width: 768px) {
    top: 190px;
  }
`;

export const DecoPeelowBtn = styled.button`
  margin: 363px 0px 0px 0px;
  padding: 10px 64px;
  gap: 10px;
  border: none;
  border-radius: 40px;
  background: var(--Point-Color, #d7ab6e);
  color: var(--White, #fff);
  font-family: Pretendard;
  font-size: 18px;
  font-weight: 600;
  letter-spacing: 0.36px;
  /* 정보입력 */
  box-shadow: 0px 0px 12px 0px rgba(0, 0, 0, 0.18);
  @media screen and (max-width: 768px) {
    margin: 393px 0px 0px 0px;
  }
`;

export const MyPageTeacherNameText = styled.div`
  margin: 363px 0px 0px 0px;
  color: var(--Main-Font, #2c2c2c);
  text-align: center;
  /* Title */
  font-family: Pretendard;
  font-size: 28px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: 0.28px;
  @media screen and (max-width: 768px) {
    margin: 263px 0px 0px 0px;
  }
`;

export const InfoDiv = styled.div`
  width: 96%;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: ${(props) => props.margin || "0px"};
  padding: ${(props) => props.padding || "0px"};
  max-width: 470px;
`;

export const InfoLabel = styled.label`
  max-width: 113px;
  margin: ${(props) => props.margin || "0px 30px 0px 0px"};
  padding-left: 18px;
  width: 48%;
  height: 26px;
  color: var(--Main-Font, #2c2c2c);
  font-family: "Pretendard";
  font-size: 22px;
  font-weight: 600;
`;

export const InfoLabelFixedWidth = styled.label`
  margin: ${(props) => props.margin || "0px"};
  padding-left: 18px;
  width: 146px;
  height: 26px;
  color: var(--Main-Font, #2c2c2c);
  font-family: "Pretendard";
  font-size: 22px;
  font-weight: 600;
  @media screen and (max-width: 480px) {
    width: 270px;
  }
`;

export const InfoInput = styled.div`
  display: flex;
  align-items: center;
  justify-content: ${(props) => props.justifyContent || "none"};
  max-width: ${(props) => props.maxWidth || "258px"};
  width: ${(props) => props.width || "110%"};
  height: 43px;
  padding: 0px 0px 0px 24px;
  border-radius: 20px;
  margin: ${(props) => props.margin || "0px 5px 0px 0px"};
  border: ${(props) => props.border || "2px solid #809f80"};
  background: ${(props) => props.background || "#fff"};
  color: var(--Main-Font, #503d3d);
  font-family: "Pretendard";
`;

export const Placeholder = styled.div`
  color: var(--Sub-Font, #b0b0b0);
  margin: "0px 0px 0px 5px";
  font-family: "Pretendard";
  font-size: 14px;
  margin: 0px 6px 0px 0px;
`;

export const Button = styled.button`
  color: ${(props) => props.color || "#B0B0B0"};
  font-family: "Pretendard";
  font-size: 16px;
  font-weight: 500;
  letter-spacing: 0.32px;
  border: none;
  text-decoration-line: underline;
  margin: 0px 7.5px;
`;

export const Modal = styled.div`
  position: fixed;
  z-index: 2;
  top: 40%;
  width: 90%;
  max-width: 661px;
  height: 273px;
  border-radius: 16px;
  background: #fff;
  box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.4);
`;

export const ModalXButton = styled.img`
  position: absolute;
  top: 20px;
  right: 26px;
  width: 36px;
`;

export const ModalHeader = styled.h3`
  color: var(--Main-Font, #2c2c2c);
  text-align: center;
  font-family: "Pretendard";
  font-size: 32px;
  font-weight: 600;
  letter-spacing: 0.32px;
  margin: ${(props) => props.margin || "0px"};
`;
export const ModalParagraph = styled.p`
  color: #000;
  text-align: center;
  font-family: "Pretendard";
  font-size: 18px;
  font-weight: 400;
  line-height: 21px; /* 116.667% */
  letter-spacing: 0.36px;
  margin: ${(props) => props.margin || "0px"};
`;

export const ModalUnderGrayParagraph = styled.p`
  color: var(--Sub-Font, #b0b0b0);
  text-align: center;
  font-family: "Pretendard";
  font-size: 14px;
  font-weight: 500;
  letter-spacing: 0.28px;
  margin: ${(props) => props.margin || "0px"};
`;

export const BtnDiv = styled.div`
  text-align: end;
`;

export const Btn = styled.button`
  display: inline-flex;
  padding: 6px 28px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 40px;
  font-family: "Pretendard";
  font-size: 16px;
  font-weight: 500;
  letter-spacing: 0.32px;
  color: ${(props) => props.color || "#d7ab6e"};
  background-color: ${(props) => props.backgroundColor || "#fff"};
  border: ${(props) => props.border || "1px solid #d7ab6e"};
  margin: ${(props) => props.margin || "0px"};
`;
