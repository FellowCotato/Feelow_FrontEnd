import React from "react";
import styled, { css } from "styled-components";

const LogoContainer = styled.div`
  margin-top: 30px;
  color: #809f80;
  text-align: center;
  font-family: "Coiny";
  font-size: 35px;
  font-weight: 400;
  letter-spacing: 0.7px;
  z-index: 1;
`;

const Pattern = styled.div`
  z-index: 0;
  width: 31.26vw;
  height: 31.26vw;
  max-width: 602px;
  max-height: 602px;
  min-width: 200px;
  min-height: 200px;
  position: absolute;
  background-color: ${(props) =>
    props.color === "brown"
      ? "rgba(215, 171, 110, 0.4)"
      : props.color === "green"
      ? "rgba(128, 159, 128, 0.40)"
      : "transparent"};
  filter: blur(10.42vw);

  ${(props) =>
    props.color === "green" &&
    css`
      top: 4.44vh;
      left: -14.74vw;
    `}
  ${(props) =>
    props.color === "brown" &&
    css`
      width: 25.26vw;
      height: 35.9vh;
      right: 0vw;
      bottom: 0vh;
    `}
`;

const Background = () => {
  return (
    <>
      <LogoContainer>Feelow</LogoContainer>
      <Pattern color="brown" />
      <Pattern color="green" />
    </>
  );
};

export default Background;
