/* eslint-disable no-unused-vars */
import styled from "styled-components";
import XImg from "../../../assets/close_img.svg";

export const XDiv = ({ item, perPage }) => {
  return (
    <Box perPage={perPage}>
      <BoxImg src={XImg} alt="X" />
    </Box>
  );
};

const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 164px;
  height: 240px;
  flex-shrink: 0;
  border-radius: 10px;
  border: 1px solid #b7b7b7;
  background: var(--White, #fbf7f4);
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.12);
  ${(props) =>
    props.perPage === 9 &&
    `
    min-width:106px;
    width: 26vw;

    min-height: 151px;
    height:39vw;
    flex-shrink: 0;
    `}
`;

const BoxImg = styled.img`
  width: 54.78%;
  object-fit: cover;
  flex-shrink: 0;

  @media screen and (max-width: 768px) {
    width: 53.35%;
  }
`;
