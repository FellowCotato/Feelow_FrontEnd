import styled from "styled-components";

// 속이 비어있는 버튼
export const BlankButton = styled.button`
  padding: 14px 0px;
  border-radius: 40px;
  box-shadow: 0px 0px 12px 0px rgba(0, 0, 0, 0.18);
  font-family: "Pretendard";
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 0.4px;
  cursor: pointer;
  background-color: ${(props) => props.backgroundColor || " #fff"};
  width: ${(props) => props.width || "195px"};
  max-width: ${(props) => props.width || "500px"};
  border: 2px solid ${(props) => props.borderColor || "black"};
  color: ${(props) => props.color || "#2c2c2c"};
  margin: 0px 5%;

  &:hover {
    background-color: #d7ab6e;
    color: #fff;
    border: 2px solid #d7ab6e;
  }
`;
