import styled from "styled-components";

export const FlexBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const AdditionTotalBox = styled.div`
  width: 100%;
  height: 100%;
  max-width: 510px;
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
  height: 100vh;
  background-color: #f7f0ea;
`;

export const Img = styled.img`
  position: absolute;
  width: ${(props) => props.width || "279px"};
  height: ${(props) => props.height || "279px"};
  z-index: ${(props) => props.zIndex || "1"};
  top: ${(props) => props.Top || "180px"};
  margin: ${(props) => props.margin || "0px"};
`;

export const InfoDiv = styled.div`
  width: 96%;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: ${(props) => props.margin || "0px"};
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

export const InfoInput = styled.div`
  display: flex;
  align-items: center;
  justify-content: ${(props) => props.justifyContent || "none"};
  max-width: ${(props) => props.maxWidth || "258px"};
  width: ${(props) => props.width || "140%"};
  height: 43px;
  padding: 0px 0px 0px 24px;
  border-radius: 20px;
  margin: ${(props) => props.margin || "0px"};
  border: 2px solid #809f80;
  background: #fff;
  color: var(--Main-Font, #2c2c2c);
  font-family: "Pretendard";
`;

export const Placeholder = styled.div`
  color: var(--Sub-Font, #b0b0b0);
  margin: "0px 0px 0px 5px";
  font-family: "Pretendard";
  font-size: 14px;
  margin: 0px 6px 0px 0px;
`;
